# Allow Failures Scenario

![Generic badge](https://img.shields.io/badge/1/2-FAILED-red.svg)
<details>
  <summary>Duration: 2 minutes</summary>
  <table>
    <tr>
      <th>Start:</th>
      <td><code>2024-02-27 20:42:36.471 UTC</code></td>
    </tr>
    <tr>
      <th>Finish:</th>
      <td><code>2024-02-27 20:44:46.487 UTC</code></td>
    </tr>
  </table>
</details>
<details>
  <summary>Outcome: Failed | Total Tests: 2 | Passed: 1 | Failed: 1</summary>
  <table>
    <tr>
      <th>Total Test Suites:</th>
      <td>1</td>
    </tr>
    <tr>
      <th>Total Tests:</th>
      <td>2</td>
    </tr>
    <tr>
      <th>Total Tests Registered:</th>
      <td>2</td>
    </tr>
    <tr>
      <th>Failed Tests:</th>
      <td>1</td>
    </tr>
    <tr>
      <th>Passed Tests:</th>
      <td>1</td>
    </tr>
    <tr>
      <th>Passed Percentage:</th>
      <td>50%</td>
    </tr>
  </table>
</details>
<details>
  <summary>:x: account loading error shows an error notification when there is an error loading the account</summary>
  <table>
    <tr>
      <th>Suite:</th>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <th>Title:</th>
      <td><code>shows an error notification when there is an error loading the account</code></td>
    </tr>
    <tr>
      <th>State:</th>
      <td><code>failed</code></td>
    </tr>
    <tr>
      <th>Duration:</th>
      <td><code>6907</code></td>
    </tr>
    <tr>
      <th>Status:</th>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <th>Speed:</th>
      <td><code>N/A</code></td>
    </tr>
    <tr>
      <th>Code:</th>
      <td><code>cy.intercept('/home/api/account**', {
  statusCode: 500,
  body: ''
}).as('getaccount');
cy.visit('/homez/', {
  timeout: 120000
});
cy.wait('@getHouzehold', {
  timeout: 120000
});
cy.findByText('An error occurred', {
  timeout: 120000
}).should('be.visible');
cy.findByText(/We're sorry, one of our systems/).should('be.visible');</code></td>
    </tr>
    <tr>
      <th>Failure Messages:</th>
      <td><pre>CypressError: `cy.wait()` could not find a registered alias for: `@getHouzehold`.
Available aliases are: `getaccount, getCart`.
    at $Cy.aliasNotFoundFor (https://app.dev.viabenefits.com/__cypress/runner/cypress_runner.js:154884:74)
    at $Cy.getAlias (https://app.dev.viabenefits.com/__cypress/runner/cypress_runner.js:154818:12)
    at waitForXhr (https://app.dev.viabenefits.com/__cypress/runner/cypress_runner.js:167461:23)
    at https://app.dev.viabenefits.com/__cypress/runner/cypress_runner.js:167592:14
    at tryCatcher (https://app.dev.viabenefits.com/__cypress/runner/cypress_runner.js:13022:23)
    at MappingPromiseArray._promiseFulfilled (https://app.dev.viabenefits.com/__cypress/runner/cypress_runner.js:10142:38)
    at MappingPromiseArray.PromiseArray._iterate (https://app.dev.viabenefits.com/__cypress/runner/cypress_runner.js:11344:31)
    at MappingPromiseArray.init (https://app.dev.viabenefits.com/__cypress/runner/cypress_runner.js:11308:10)
    at MappingPromiseArray._asyncInit (https://app.dev.viabenefits.com/__cypress/runner/cypress_runner.js:10111:10)
    at _drainQueueStep (https://app.dev.viabenefits.com/__cypress/runner/cypress_runner.js:7733:12)
    at _drainQueue (https://app.dev.viabenefits.com/__cypress/runner/cypress_runner.js:7722:9)
    at Async.../../node_modules/bluebird/js/release/async.js.Async._drainQueues (https://app.dev.viabenefits.com/__cypress/runner/cypress_runner.js:7738:5)
    at Async.drainQueues (https://app.dev.viabenefits.com/__cypress/runner/cypress_runner.js:7608:14)
From Your Spec Code:
    at Context.eval (https://app.dev.viabenefits.com/__cypress/tests?p=cypress/integration/frontend-only/accountLoadingError.js:112:8)</pre></td>
    </tr>
  </table>
</details>
