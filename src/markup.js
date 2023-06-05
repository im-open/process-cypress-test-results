const core = require('@actions/core');
const { format, utcToZonedTime } = require('date-fns-tz');
const timezone = core.getInput('timezone') || 'Etc/UTC';
const formatDistance = require('date-fns/formatDistance');

function getMarkupForJson(jsonResults, reportName, truncatedMarkup = false) {
  return `
# ${reportName}
${getBadge(jsonResults.stats)}
${getTestTimes(jsonResults.stats)}
${getTestCounters(jsonResults.stats)}
${getTestResultsMarkup(jsonResults.results, reportName, truncatedMarkup)}
  `;
}

function getBadge(stats) {
  const failedCount = stats.failures;
  const passedCount = stats.passes;
  const totalCount = stats.tests;

  const badgeCountText =
    failedCount > 0 ? `${`${failedCount}/${totalCount}`}` : `${`${passedCount}/${totalCount}`}`;
  const badgeStatusText = failedCount > 0 ? 'FAILED' : 'PASSED';
  const badgeColor = failedCount > 0 ? 'red' : 'brightgreen';

  return `![Generic badge](https://img.shields.io/badge/${badgeCountText}-${badgeStatusText}-${badgeColor}.svg)`;
}

function formatDate(dateToFormat) {
  if (timezone && timezone.length > 0) {
    let dateWithTimezone = utcToZonedTime(dateToFormat, timezone);
    return `${format(dateWithTimezone, 'yyyy-MM-dd HH:mm:ss.SSS zzz', { timeZone: timezone })}`;
  } else {
    return format(dateToFormat, 'yyyy-MM-dd HH:mm:ss.SSS zzz');
  }
}

function getTestTimes(stats) {
  const startDate = new Date(stats.start);
  const endDate = new Date(stats.end);
  const duration = formatDistance(endDate, startDate, {
    includeSeconds: true
  });

  return `
<details>  
  <summary> Duration: ${duration} </summary>
  <table>
    <tr>
      <th>Start:</th>
      <td><code>${formatDate(startDate)}</code></td>
    </tr>
    <tr>
      <th>Finish:</th>
      <td><code>${formatDate(endDate)}</code></td>    
    </tr>
  </table>
</details>
  `;
}

function getTestCounters(stats) {
  let extraProps = getTableRowIfHasValue('Pending Tests:', stats.pending);
  extraProps += getTableRowIfHasValue('Pending Percent:', stats.pendingPercent);
  extraProps += getTableRowIfHasValue('Other:', stats.other);
  extraProps += getTableRowIfHasValue('skipped:', stats.skipped);
  let outcome = stats.failures > 0 ? 'Failed' : 'Passed';
  return `
<details>
  <summary> Outcome: ${outcome} | Total Tests: ${stats.tests} | Passed: ${stats.passes} | Failed: ${stats.failures} </summary>
  <table>
    <tr>
      <th>Total Test Suites:</th>
      <td>${stats.suites}</td>
    </tr>
    <tr>
      <th>Total Tests:</th>
      <td>${stats.tests}</td>
    </tr>
    <tr>
      <th>Total Tests Registered:</th>
      <td>${stats.testsRegistered}</td>
    </tr>
    <tr>
      <th>Failed Tests:</th>
      <td>${stats.failures}</td>    
    </tr>
    <tr>
      <th>Passed Tests:</th>
      <td>${stats.passes}</td>    
    </tr>
    <tr>
      <th>Passed Percentage:</th>
      <td>${stats.passPercent}%</td>    
    </tr>${extraProps}
  </table>
</details>

  `;
}

function getTableRowIfHasValue(heading, data) {
  if (data > 0) {
    return `
<tr>
  <th>${heading}</th>
  <td>${data}</td>
</tr>`;
  }
  return '';
}

function getTestResultsMarkup(results, reportName, truncatedMarkup = false) {
  let resultsMarkup = '';

  if (!results || results.length === 0) {
    return getNoResultsMarkup(reportName);
  } else {
    let failedTestSuites = results
      .map(r => r.suites)
      .flat()
      .filter(s => s && s.failures.length > 0);

    failedTestSuites.forEach(failedSuite => {
      const suiteName = failedSuite.title;
      let failedTests = failedSuite.tests.filter(t => !t.pass);
      failedTests.forEach(failedTest => {
        resultsMarkup += getFailedTestMarkup(failedTest, suiteName, truncatedMarkup);
      });
    });
    return resultsMarkup.trim();
  }
}

function getNoResultsMarkup(reportName) {
  const testResultIcon = ':grey_question:';
  const resultsMarkup = `
  ## ${testResultIcon} ${reportName}
  There were no test results to report.
  `;
  return resultsMarkup;
}

function getFailedTestMarkup(failedTest, suiteName, truncatedMarkup = false) {
  core.debug(`Processing ${failedTest.title}`);

  let icon = failedTest.state === 'failed' ? ':x:' : ':grey_question:';
  let failTestMarkdown;
  if (truncatedMarkup) {
    failTestMarkdown = `
    <details>
      <summary>${icon} ${failedTest.fullTitle}</summary>
       - <b>Suite:</b> ${suiteName} <br/>
       - <b>Title:</b>  ${failedTest.title} <br/>
       - <b>State:</b>  ${failedTest.state} <br/>
       - <b>Status:</b> ${failedTest.status} <br/>
       Full details truncated. Please see full test report output for error message.
    </details>   
    `;
  } else {
    failTestMarkdown = `
  <details>
    <summary>${icon} ${failedTest.fullTitle}</summary>    
    <table>
      <tr>
        <th>Suite:</th>
        <td><code>${suiteName}</code></td>
      </tr>
      <tr>
        <th>Title:</th>
        <td><code>${failedTest.title}</code></td>
      </tr>
      <tr>
        <th>State:</th>
        <td><code>${failedTest.state}</code></td>
      </tr>
      <tr>
        <th>Duration:</th>
        <td><code>${failedTest.duration}</code></td>
      </tr>
      <tr>
        <th>Status:</th>
        <td><code>${failedTest.status}</code></td>
      </tr>
      <tr>
        <th>Speed:</th>
        <td><code>${failedTest.speed || 'N/A'}</code></td>
      </tr>
      <tr>
        <th>Code:</th>
        <td><code>${failedTest.code}</code></td>
      </tr>
      <tr>
        <th>Failure Messages:</th>
        <td><pre>${failedTest.err.estack}</pre></td>
      </tr>
    </table>
  </details>
    `;
  }
  return failTestMarkdown.trim();
}

module.exports = {
  getMarkupForJson
};
