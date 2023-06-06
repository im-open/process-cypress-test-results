const core = require('@actions/core');
const fs = require('fs');
const path = require('path');

async function readJsonResultsFromFile(resultsFile) {
  core.info('Reading results from cypress results file....');
  if (fs.existsSync(resultsFile)) {
    const rawJson = fs.readFileSync(resultsFile, 'utf8');
    if (!rawJson) {
      core.info(
        `The results file '${resultsFile}' does not contain any data.  No status check or PR comment will be created.`
      );
      return;
    }
    return JSON.parse(rawJson);
  } else {
    core.setFailed(
      `The results file '${resultsFile}' does not exist.  No status check or PR comment will be created.`
    );
    return;
  }
}

function areThereAnyFailingTests(json) {
  core.info(`Checking for failing tests..`);

  if (json.stats.failures > 0) {
    core.warning(`At least one failing test was found.`);
    return true;
  }

  core.info(`There are no failing tests.`);
  return false;
}

function createOutcomeFile(outcomeFileName, markupData) {
  core.info(`Writing outcome to ${outcomeFileName}`);
  let outcomeFilePath = null;

  fs.writeFile(outcomeFileName, markupData, err => {
    if (err) {
      core.info(`Error writing markupData to file. Error: ${err}`);
    } else {
      core.info('Successfully created outcome file.');
      core.info(`File: ${outcomeFileName}`);
    }
  });
  outcomeFilePath = path.resolve(outcomeFileName);
  core.exportVariable('TEST_OUTCOME_FILE_PATH', outcomeFilePath);

  return outcomeFilePath;
}

module.exports = {
  readJsonResultsFromFile,
  areThereAnyFailingTests,
  createOutcomeFile
};
