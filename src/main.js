const core = require('@actions/core');
const { readJsonResultsFromFile, areThereAnyFailingTests, createOutcomeFile } = require('./utils');
const { createStatusCheck, createPrComment } = require('./github');
const { getMarkupForJson } = require('./markup');

const requiredArgOptions = {
  required: true,
  trimWhitespace: true
};

const token = core.getInput('github-token', requiredArgOptions);
const resultsFile = core.getInput('results-file', requiredArgOptions);
const ignoreTestFailures = core.getBooleanInput('ignore-test-failures');
const shouldCreateStatusCheck = core.getBooleanInput('create-status-check');
const shouldCreatePRComment = core.getBooleanInput('create-pr-comment');
const updateCommentIfOneExists = core.getBooleanInput('update-comment-if-one-exists');
const reportName = core.getInput('report-name');

async function run() {
  try {
    const resultsJson = await readJsonResultsFromFile(resultsFile);
    if (!resultsJson) {
      core.setOutput('test-outcome', 'Failed');
      return;
    }

    const failingTestsFound = areThereAnyFailingTests(resultsJson);

    let markupData = getMarkupForJson(resultsJson, reportName);
    let fullMarkupData;
    const characterLimit = 65535;

    if (markupData.length > characterLimit) {
      core.info(
        `Truncating markup data due to character limit exceeded for github api.  Markup data length: ${markupData.length}/${characterLimit}`
      );
      const outcomeFile = './test-outcome.md';
      fullMarkupData = markupData;
      markupData = getMarkupForJson(resultsJson, reportName, true);

      const outcomeFilePath = createOutcomeFile(outcomeFile, fullMarkupData);
      core.setOutput('test-outcome-truncated', 'true');
      core.setOutput('test-outcome-file-path', outcomeFilePath);

      if (markupData.length > 65535) {
        core.info(
          `Truncating markup data again due to character limit exceeded for github api. Markup data length: ${markupData.length}/${characterLimit}`
        );
        markupData =
          'Test outcome truncated due to character limit. See full report in output. <br/>' +
          markupData.substring(0, characterLimit - 100);
      }
    } else {
      core.setOutput('test-outcome-truncated', 'false');
    }

    let conclusion = 'success';
    if (failingTestsFound) {
      conclusion = ignoreTestFailures ? 'neutral' : 'failure';
    }

    if (shouldCreateStatusCheck) {
      await createStatusCheck(token, markupData, conclusion, reportName);
    }
    if (shouldCreatePRComment) {
      await createPrComment(token, markupData, updateCommentIfOneExists);
    }

    core.setOutput('test-outcome', failingTestsFound ? 'Failed' : 'Passed');
  } catch (error) {
    if (error instanceof RangeError) {
      core.info(error.message);
      core.setOutput('test-outcome', 'Failed');
      return;
    } else {
      core.setFailed(`An error occurred processing the cypress results file: ${error.message}`);
      core.setOutput('test-outcome', 'Failed');
    }
  }
}

run();
