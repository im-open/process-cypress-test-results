> [!Important]
> Test results truncated due to character limit.  See full report in output.

# Truncated PR Comment Scenario

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
  <summary>Outcome: Failed | Total Tests: 2 | Passed: 0 | Failed: 1</summary>
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
      <td>0</td>
    </tr>
    <tr>
      <th>Passed Percentage:</th>
      <td>50%</td>
    </tr>
  </table>
</details>
<details>
  <summary>:x: account loading error shows an error notification when there is an error loading the account 1</summary>
  <table>
    <tr>
      <th>Suite:</th>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <th>Title:</th>
      <td><code>shows an error notification when there is an error loading the account 1</code></td>
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
    at Context.eval (https://app.dev.viabenefits.com/__cypress/tests?p=cypress/integration/frontend-only/accountLoadingError.js:112:8).  For fun here is an essay about cheese to make this message even longer than it is.  I love cheese, especially mozzarella cheeseburger. Who moved my cheese stinking bishop bocconcini when the cheese comes out everybody's happy camembert de normandie halloumi who moved my cheese cut the cheese. Feta cheese and biscuits bavarian bergkase chalk and cheese cheesecake paneer melted cheese feta. Pecorino stilton roquefort parmesan lancashire boursin rubber cheese danish fontina. Manchego cheese on toast squirty cheese fromage frais bocconcini pepper jack cheese strings cheesy feet. Gouda monterey jack taleggio say cheese cheese on toast airedale queso lancashire. Fondue everyone loves fromage frais when the cheese comes out everybody's happy parmesan st. agur blue cheese cheese slices cream cheese. Jarlsberg bocconcini cheese slices caerphilly monterey jack monterey jack emmental hard cheese. Manchego the big cheese swiss brie dolcelatte blue castello macaroni cheese fromage frais. Fromage swiss emmental fondue cheddar cheesecake fromage. Fromage queso boursin. Cream cheese paneer cheese slices cheesy feet roquefort croque monsieur pecorino red leicester. Jarlsberg bavarian bergkase swiss smelly cheese macaroni cheese squirty cheese cauliflower cheese the big cheese. Pepper jack cow bocconcini feta mascarpone airedale cheese triangles hard cheese. Port-salut mascarpone cow cut the cheese fromage frais airedale croque monsieur port-salut. St. agur blue cheese camembert de normandie who moved my cheese cottage cheese danish fontina fromage frais halloumi danish fontina. Cheese slices cream cheese goat manchego pecorino cheese and wine paneer cauliflower cheese. Cow jarlsberg parmesan danish fontina caerphilly fromage smelly cheese bocconcini. Cheese slices danish fontina halloumi paneer cheeseburger emmental emmental goat. Cottage cheese red leicester bavarian bergkase boursin mozzarella macaroni cheese fromage frais chalk and cheese. Bavarian bergkase. Cheesy feet melted cheese bavarian bergkase. Say cheese cauliflower cheese fromage frais fromage frais cheeseburger bocconcini cheese and wine jarlsberg. Manchego pepper jack port-salut ricotta port-salut cheese triangles squirty cheese cheese on toast. Gouda st. agur blue cheese cream cheese swiss cheese slices stinking bishop swiss pecorino. Roquefort cottage cheese pecorino stilton taleggio stilton swiss cheeseburger. Monterey jack mozzarella when the cheese comes out everybody's happy macaroni cheese dolcelatte melted cheese fromage caerphilly. Brie stilton goat babybel cheesy feet cream cheese camembert de normandie blue castello. Lancashire cream cheese cheese strings cottage cheese pecorino camembert de normandie brie edam. Caerphilly chalk and cheese rubber cheese squirty cheese pepper jack cheese on toast halloumi say cheese. Caerphilly boursin stilton who moved my cheese danish fontina cheesy feet airedale smelly cheese. Emmental roquefort cream cheese gouda stilton.  Monterey jack melted cheese cheese slices. Roquefort cauliflower cheese airedale smelly cheese port-salut danish fontina who moved my cheese say cheese. Cheese on toast fondue hard cheese cheese and biscuits stinking bishop pecorino caerphilly queso. Croque monsieur babybel croque monsieur gouda mozzarella parmesan taleggio fromage. Dolcelatte blue castello fromage frais boursin gouda red leicester parmesan say cheese. Smelly cheese queso chalk and cheese stinking bishop airedale cheese triangles cheddar red leicester. Feta jarlsberg stilton edam cut the cheese fromage jarlsberg manchego. Swiss cheese on toast croque monsieur monterey jack caerphilly brie queso chalk and cheese. Feta fondue ricotta paneer taleggio edam airedale smelly cheese. The big cheese. Cream cheese paneer croque monsieur. Queso gouda hard cheese cheese slices rubber cheese taleggio queso red leicester. Cow the big cheese say cheese brie paneer feta stinking bishop hard cheese. Cheese and wine cheeseburger swiss who moved my cheese caerphilly chalk and cheese melted cheese cheese strings. Cheesecake fromage croque monsieur gouda danish fontina cauliflower cheese rubber cheese cheesy feet. Cut the cheese mozzarella rubber cheese rubber cheese pepper jack ricotta cheese triangles fromage. Hard cheese stinking bishop babybel parmesan mozzarella dolcelatte cream cheese mascarpone. Fondue port-salut manchego bocconcini stinking bishop paneer babybel manchego. Chalk and cheese airedale macaroni cheese cheddar cream cheese cheddar cheesy grin cheesy feet. Pepper jack st. agur blue cheese mozzarella.</pre></td>
    </tr>
  </table>
</details>
<details>
  <summary>:x: account loading error shows an error notification when there is an error loading the account 2</summary>
  <table>
    <tr>
      <th>Suite:</th>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <th>Title:</th>
      <td><code>shows an error notification when there is an error loading the account 2</code></td>
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
    at Context.eval (https://app.dev.viabenefits.com/__cypress/tests?p=cypress/integration/frontend-only/accountLoadingError.js:112:8).  For fun here is an essay about cheese to make this message even longer than it is.  I love cheese, especially mozzarella cheeseburger. Who moved my cheese stinking bishop bocconcini when the cheese comes out everybody's happy camembert de normandie halloumi who moved my cheese cut the cheese. Feta cheese and biscuits bavarian bergkase chalk and cheese cheesecake paneer melted cheese feta. Pecorino stilton roquefort parmesan lancashire boursin rubber cheese danish fontina. Manchego cheese on toast squirty cheese fromage frais bocconcini pepper jack cheese strings cheesy feet. Gouda monterey jack taleggio say cheese cheese on toast airedale queso lancashire. Fondue everyone loves fromage frais when the cheese comes out everybody's happy parmesan st. agur blue cheese cheese slices cream cheese. Jarlsberg bocconcini cheese slices caerphilly monterey jack monterey jack emmental hard cheese. Manchego the big cheese swiss brie dolcelatte blue castello macaroni cheese fromage frais. Fromage swiss emmental fondue cheddar cheesecake fromage. Fromage queso boursin. Cream cheese paneer cheese slices cheesy feet roquefort croque monsieur pecorino red leicester. Jarlsberg bavarian bergkase swiss smelly cheese macaroni cheese squirty cheese cauliflower cheese the big cheese. Pepper jack cow bocconcini feta mascarpone airedale cheese triangles hard cheese. Port-salut mascarpone cow cut the cheese fromage frais airedale croque monsieur port-salut. St. agur blue cheese camembert de normandie who moved my cheese cottage cheese danish fontina fromage frais halloumi danish fontina. Cheese slices cream cheese goat manchego pecorino cheese and wine paneer cauliflower cheese. Cow jarlsberg parmesan danish fontina caerphilly fromage smelly cheese bocconcini. Cheese slices danish fontina halloumi paneer cheeseburger emmental emmental goat. Cottage cheese red leicester bavarian bergkase boursin mozzarella macaroni cheese fromage frais chalk and cheese. Bavarian bergkase. Cheesy feet melted cheese bavarian bergkase. Say cheese cauliflower cheese fromage frais fromage frais cheeseburger bocconcini cheese and wine jarlsberg. Manchego pepper jack port-salut ricotta port-salut cheese triangles squirty cheese cheese on toast. Gouda st. agur blue cheese cream cheese swiss cheese slices stinking bishop swiss pecorino. Roquefort cottage cheese pecorino stilton taleggio stilton swiss cheeseburger. Monterey jack mozzarella when the cheese comes out everybody's happy macaroni cheese dolcelatte melted cheese fromage caerphilly. Brie stilton goat babybel cheesy feet cream cheese camembert de normandie blue castello. Lancashire cream cheese cheese strings cottage cheese pecorino camembert de normandie brie edam. Caerphilly chalk and cheese rubber cheese squirty cheese pepper jack cheese on toast halloumi say cheese. Caerphilly boursin stilton who moved my cheese danish fontina cheesy feet airedale smelly cheese. Emmental roquefort cream cheese gouda stilton.  Monterey jack melted cheese cheese slices. Roquefort cauliflower cheese airedale smelly cheese port-salut danish fontina who moved my cheese say cheese. Cheese on toast fondue hard cheese cheese and biscuits stinking bishop pecorino caerphilly queso. Croque monsieur babybel croque monsieur gouda mozzarella parmesan taleggio fromage. Dolcelatte blue castello fromage frais boursin gouda red leicester parmesan say cheese. Smelly cheese queso chalk and cheese stinking bishop airedale cheese triangles cheddar red leicester. Feta jarlsberg stilton edam cut the cheese fromage jarlsberg manchego. Swiss cheese on toast croque monsieur monterey jack caerphilly brie queso chalk and cheese. Feta fondue ricotta paneer taleggio edam airedale smelly cheese. The big cheese. Cream cheese paneer croque monsieur. Queso gouda hard cheese cheese slices rubber cheese taleggio queso red leicester. Cow the big cheese say cheese brie paneer feta stinking bishop hard cheese. Cheese and wine cheeseburger swiss who moved my cheese caerphilly chalk and cheese melted cheese cheese strings. Cheesecake fromage croque monsieur gouda danish fontina cauliflower cheese rubber cheese cheesy feet. Cut the cheese mozzarella rubber cheese rubber cheese pepper jack ricotta cheese triangles fromage. Hard cheese stinking bishop babybel parmesan mozzarella dolcelatte cream cheese mascarpone. Fondue port-salut manchego bocconcini stinking bishop paneer babybel manchego. Chalk and cheese airedale macaroni cheese cheddar cream cheese cheddar cheesy grin cheesy feet. Pepper jack st. agur blue cheese mozzarella.</pre></td>
    </tr>
  </table>
</details>
<details>
  <summary>:x: account loading error shows an error notification when there is an error loading the account 3</summary>
  <table>
    <tr>
      <th>Suite:</th>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <th>Title:</th>
      <td><code>shows an error notification when there is an error loading the account 3</code></td>
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
    at Context.eval (https://app.dev.viabenefits.com/__cypress/tests?p=cypress/integration/frontend-only/accountLoadingError.js:112:8).  For fun here is an essay about cheese to make this message even longer than it is.  I love cheese, especially mozzarella cheeseburger. Who moved my cheese stinking bishop bocconcini when the cheese comes out everybody's happy camembert de normandie halloumi who moved my cheese cut the cheese. Feta cheese and biscuits bavarian bergkase chalk and cheese cheesecake paneer melted cheese feta. Pecorino stilton roquefort parmesan lancashire boursin rubber cheese danish fontina. Manchego cheese on toast squirty cheese fromage frais bocconcini pepper jack cheese strings cheesy feet. Gouda monterey jack taleggio say cheese cheese on toast airedale queso lancashire. Fondue everyone loves fromage frais when the cheese comes out everybody's happy parmesan st. agur blue cheese cheese slices cream cheese. Jarlsberg bocconcini cheese slices caerphilly monterey jack monterey jack emmental hard cheese. Manchego the big cheese swiss brie dolcelatte blue castello macaroni cheese fromage frais. Fromage swiss emmental fondue cheddar cheesecake fromage. Fromage queso boursin. Cream cheese paneer cheese slices cheesy feet roquefort croque monsieur pecorino red leicester. Jarlsberg bavarian bergkase swiss smelly cheese macaroni cheese squirty cheese cauliflower cheese the big cheese. Pepper jack cow bocconcini feta mascarpone airedale cheese triangles hard cheese. Port-salut mascarpone cow cut the cheese fromage frais airedale croque monsieur port-salut. St. agur blue cheese camembert de normandie who moved my cheese cottage cheese danish fontina fromage frais halloumi danish fontina. Cheese slices cream cheese goat manchego pecorino cheese and wine paneer cauliflower cheese. Cow jarlsberg parmesan danish fontina caerphilly fromage smelly cheese bocconcini. Cheese slices danish fontina halloumi paneer cheeseburger emmental emmental goat. Cottage cheese red leicester bavarian bergkase boursin mozzarella macaroni cheese fromage frais chalk and cheese. Bavarian bergkase. Cheesy feet melted cheese bavarian bergkase. Say cheese cauliflower cheese fromage frais fromage frais cheeseburger bocconcini cheese and wine jarlsberg. Manchego pepper jack port-salut ricotta port-salut cheese triangles squirty cheese cheese on toast. Gouda st. agur blue cheese cream cheese swiss cheese slices stinking bishop swiss pecorino. Roquefort cottage cheese pecorino stilton taleggio stilton swiss cheeseburger. Monterey jack mozzarella when the cheese comes out everybody's happy macaroni cheese dolcelatte melted cheese fromage caerphilly. Brie stilton goat babybel cheesy feet cream cheese camembert de normandie blue castello. Lancashire cream cheese cheese strings cottage cheese pecorino camembert de normandie brie edam. Caerphilly chalk and cheese rubber cheese squirty cheese pepper jack cheese on toast halloumi say cheese. Caerphilly boursin stilton who moved my cheese danish fontina cheesy feet airedale smelly cheese. Emmental roquefort cream cheese gouda stilton.  Monterey jack melted cheese cheese slices. Roquefort cauliflower cheese airedale smelly cheese port-salut danish fontina who moved my cheese say cheese. Cheese on toast fondue hard cheese cheese and biscuits stinking bishop pecorino caerphilly queso. Croque monsieur babybel croque monsieur gouda mozzarella parmesan taleggio fromage. Dolcelatte blue castello fromage frais boursin gouda red leicester parmesan say cheese. Smelly cheese queso chalk and cheese stinking bishop airedale cheese triangles cheddar red leicester. Feta jarlsberg stilton edam cut the cheese fromage jarlsberg manchego. Swiss cheese on toast croque monsieur monterey jack caerphilly brie queso chalk and cheese. Feta fondue ricotta paneer taleggio edam airedale smelly cheese. The big cheese. Cream cheese paneer croque monsieur. Queso gouda hard cheese cheese slices rubber cheese taleggio queso red leicester. Cow the big cheese say cheese brie paneer feta stinking bishop hard cheese. Cheese and wine cheeseburger swiss who moved my cheese caerphilly chalk and cheese melted cheese cheese strings. Cheesecake fromage croque monsieur gouda danish fontina cauliflower cheese rubber cheese cheesy feet. Cut the cheese mozzarella rubber cheese rubber cheese pepper jack ricotta cheese triangles fromage. Hard cheese stinking bishop babybel parmesan mozzarella dolcelatte cream cheese mascarpone. Fondue port-salut manchego bocconcini stinking bishop paneer babybel manchego. Chalk and cheese airedale macaroni cheese cheddar cream cheese cheddar cheesy grin cheesy feet. Pepper jack st. agur blue cheese mozzarella.</pre></td>
    </tr>
  </table>
</details>
<details>
  <summary>:x: account loading error shows an error notification when there is an error loading the account 4</summary>
  <table>
    <tr>
      <th>Suite:</th>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <th>Title:</th>
      <td><code>shows an error notification when there is an error loading the account 4</code></td>
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
    at Context.eval (https://app.dev.viabenefits.com/__cypress/tests?p=cypress/integration/frontend-only/accountLoadingError.js:112:8).  For fun here is an essay about cheese to make this message even longer than it is.  I love cheese, especially mozzarella cheeseburger. Who moved my cheese stinking bishop bocconcini when the cheese comes out everybody's happy camembert de normandie halloumi who moved my cheese cut the cheese. Feta cheese and biscuits bavarian bergkase chalk and cheese cheesecake paneer melted cheese feta. Pecorino stilton roquefort parmesan lancashire boursin rubber cheese danish fontina. Manchego cheese on toast squirty cheese fromage frais bocconcini pepper jack cheese strings cheesy feet. Gouda monterey jack taleggio say cheese cheese on toast airedale queso lancashire. Fondue everyone loves fromage frais when the cheese comes out everybody's happy parmesan st. agur blue cheese cheese slices cream cheese. Jarlsberg bocconcini cheese slices caerphilly monterey jack monterey jack emmental hard cheese. Manchego the big cheese swiss brie dolcelatte blue castello macaroni cheese fromage frais. Fromage swiss emmental fondue cheddar cheesecake fromage. Fromage queso boursin. Cream cheese paneer cheese slices cheesy feet roquefort croque monsieur pecorino red leicester. Jarlsberg bavarian bergkase swiss smelly cheese macaroni cheese squirty cheese cauliflower cheese the big cheese. Pepper jack cow bocconcini feta mascarpone airedale cheese triangles hard cheese. Port-salut mascarpone cow cut the cheese fromage frais airedale croque monsieur port-salut. St. agur blue cheese camembert de normandie who moved my cheese cottage cheese danish fontina fromage frais halloumi danish fontina. Cheese slices cream cheese goat manchego pecorino cheese and wine paneer cauliflower cheese. Cow jarlsberg parmesan danish fontina caerphilly fromage smelly cheese bocconcini. Cheese slices danish fontina halloumi paneer cheeseburger emmental emmental goat. Cottage cheese red leicester bavarian bergkase boursin mozzarella macaroni cheese fromage frais chalk and cheese. Bavarian bergkase. Cheesy feet melted cheese bavarian bergkase. Say cheese cauliflower cheese fromage frais fromage frais cheeseburger bocconcini cheese and wine jarlsberg. Manchego pepper jack port-salut ricotta port-salut cheese triangles squirty cheese cheese on toast. Gouda st. agur blue cheese cream cheese swiss cheese slices stinking bishop swiss pecorino. Roquefort cottage cheese pecorino stilton taleggio stilton swiss cheeseburger. Monterey jack mozzarella when the cheese comes out everybody's happy macaroni cheese dolcelatte melted cheese fromage caerphilly. Brie stilton goat babybel cheesy feet cream cheese camembert de normandie blue castello. Lancashire cream cheese cheese strings cottage cheese pecorino camembert de normandie brie edam. Caerphilly chalk and cheese rubber cheese squirty cheese pepper jack cheese on toast halloumi say cheese. Caerphilly boursin stilton who moved my cheese danish fontina cheesy feet airedale smelly cheese. Emmental roquefort cream cheese gouda stilton.  Monterey jack melted cheese cheese slices. Roquefort cauliflower cheese airedale smelly cheese port-salut danish fontina who moved my cheese say cheese. Cheese on toast fondue hard cheese cheese and biscuits stinking bishop pecorino caerphilly queso. Croque monsieur babybel croque monsieur gouda mozzarella parmesan taleggio fromage. Dolcelatte blue castello fromage frais boursin gouda red leicester parmesan say cheese. Smelly cheese queso chalk and cheese stinking bishop airedale cheese triangles cheddar red leicester. Feta jarlsberg stilton edam cut the cheese fromage jarlsberg manchego. Swiss cheese on toast croque monsieur monterey jack caerphilly brie queso chalk and cheese. Feta fondue ricotta paneer taleggio edam airedale smelly cheese. The big cheese. Cream cheese paneer croque monsieur. Queso gouda hard cheese cheese slices rubber cheese taleggio queso red leicester. Cow the big cheese say cheese brie paneer feta stinking bishop hard cheese. Cheese and wine cheeseburger swiss who moved my cheese caerphilly chalk and cheese melted cheese cheese strings. Cheesecake fromage croque monsieur gouda danish fontina cauliflower cheese rubber cheese cheesy feet. Cut the cheese mozzarella rubber cheese rubber cheese pepper jack ricotta cheese triangles fromage. Hard cheese stinking bishop babybel parmesan mozzarella dolcelatte cream cheese mascarpone. Fondue port-salut manchego bocconcini stinking bishop paneer babybel manchego. Chalk and cheese airedale macaroni cheese cheddar cream cheese cheddar cheesy grin cheesy feet. Pepper jack st. agur blue cheese mozzarella.</pre></td>
    </tr>
  </table>
</details>
<details>
  <summary>:x: account loading error shows an error notification when there is an error loading the account 5</summary>
  <table>
    <tr>
      <th>Suite:</th>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <th>Title:</th>
      <td><code>shows an error notification when there is an error loading the account 5</code></td>
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
    at Context.eval (https://app.dev.viabenefits.com/__cypress/tests?p=cypress/integration/frontend-only/accountLoadingError.js:112:8).  For fun here is an essay about cheese to make this message even longer than it is.  I love cheese, especially mozzarella cheeseburger. Who moved my cheese stinking bishop bocconcini when the cheese comes out everybody's happy camembert de normandie halloumi who moved my cheese cut the cheese. Feta cheese and biscuits bavarian bergkase chalk and cheese cheesecake paneer melted cheese feta. Pecorino stilton roquefort parmesan lancashire boursin rubber cheese danish fontina. Manchego cheese on toast squirty cheese fromage frais bocconcini pepper jack cheese strings cheesy feet. Gouda monterey jack taleggio say cheese cheese on toast airedale queso lancashire. Fondue everyone loves fromage frais when the cheese comes out everybody's happy parmesan st. agur blue cheese cheese slices cream cheese. Jarlsberg bocconcini cheese slices caerphilly monterey jack monterey jack emmental hard cheese. Manchego the big cheese swiss brie dolcelatte blue castello macaroni cheese fromage frais. Fromage swiss emmental fondue cheddar cheesecake fromage. Fromage queso boursin. Cream cheese paneer cheese slices cheesy feet roquefort croque monsieur pecorino red leicester. Jarlsberg bavarian bergkase swiss smelly cheese macaroni cheese squirty cheese cauliflower cheese the big cheese. Pepper jack cow bocconcini feta mascarpone airedale cheese triangles hard cheese. Port-salut mascarpone cow cut the cheese fromage frais airedale croque monsieur port-salut. St. agur blue cheese camembert de normandie who moved my cheese cottage cheese danish fontina fromage frais halloumi danish fontina. Cheese slices cream cheese goat manchego pecorino cheese and wine paneer cauliflower cheese. Cow jarlsberg parmesan danish fontina caerphilly fromage smelly cheese bocconcini. Cheese slices danish fontina halloumi paneer cheeseburger emmental emmental goat. Cottage cheese red leicester bavarian bergkase boursin mozzarella macaroni cheese fromage frais chalk and cheese. Bavarian bergkase. Cheesy feet melted cheese bavarian bergkase. Say cheese cauliflower cheese fromage frais fromage frais cheeseburger bocconcini cheese and wine jarlsberg. Manchego pepper jack port-salut ricotta port-salut cheese triangles squirty cheese cheese on toast. Gouda st. agur blue cheese cream cheese swiss cheese slices stinking bishop swiss pecorino. Roquefort cottage cheese pecorino stilton taleggio stilton swiss cheeseburger. Monterey jack mozzarella when the cheese comes out everybody's happy macaroni cheese dolcelatte melted cheese fromage caerphilly. Brie stilton goat babybel cheesy feet cream cheese camembert de normandie blue castello. Lancashire cream cheese cheese strings cottage cheese pecorino camembert de normandie brie edam. Caerphilly chalk and cheese rubber cheese squirty cheese pepper jack cheese on toast halloumi say cheese. Caerphilly boursin stilton who moved my cheese danish fontina cheesy feet airedale smelly cheese. Emmental roquefort cream cheese gouda stilton.  Monterey jack melted cheese cheese slices. Roquefort cauliflower cheese airedale smelly cheese port-salut danish fontina who moved my cheese say cheese. Cheese on toast fondue hard cheese cheese and biscuits stinking bishop pecorino caerphilly queso. Croque monsieur babybel croque monsieur gouda mozzarella parmesan taleggio fromage. Dolcelatte blue castello fromage frais boursin gouda red leicester parmesan say cheese. Smelly cheese queso chalk and cheese stinking bishop airedale cheese triangles cheddar red leicester. Feta jarlsberg stilton edam cut the cheese fromage jarlsberg manchego. Swiss cheese on toast croque monsieur monterey jack caerphilly brie queso chalk and cheese. Feta fondue ricotta paneer taleggio edam airedale smelly cheese. The big cheese. Cream cheese paneer croque monsieur. Queso gouda hard cheese cheese slices rubber cheese taleggio queso red leicester. Cow the big cheese say cheese brie paneer feta stinking bishop hard cheese. Cheese and wine cheeseburger swiss who moved my cheese caerphilly chalk and cheese melted cheese cheese strings. Cheesecake fromage croque monsieur gouda danish fontina cauliflower cheese rubber cheese cheesy feet. Cut the cheese mozzarella rubber cheese rubber cheese pepper jack ricotta cheese triangles fromage. Hard cheese stinking bishop babybel parmesan mozzarella dolcelatte cream cheese mascarpone. Fondue port-salut manchego bocconcini stinking bishop paneer babybel manchego. Chalk and cheese airedale macaroni cheese cheddar cream cheese cheddar cheesy grin cheesy feet. Pepper jack st. agur blue cheese mozzarella.</pre></td>
    </tr>
  </table>
</details>
<details>
  <summary>:x: account loading error shows an error notification when there is an error loading the account 6</summary>
  <table>
    <tr>
      <th>Suite:</th>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <th>Title:</th>
      <td><code>shows an error notification when there is an error loading the account 6</code></td>
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
    at Context.eval (https://app.dev.viabenefits.com/__cypress/tests?p=cypress/integration/frontend-only/accountLoadingError.js:112:8).  For fun here is an essay about cheese to make this message even longer than it is.  I love cheese, especially mozzarella cheeseburger. Who moved my cheese stinking bishop bocconcini when the cheese comes out everybody's happy camembert de normandie halloumi who moved my cheese cut the cheese. Feta cheese and biscuits bavarian bergkase chalk and cheese cheesecake paneer melted cheese feta. Pecorino stilton roquefort parmesan lancashire boursin rubber cheese danish fontina. Manchego cheese on toast squirty cheese fromage frais bocconcini pepper jack cheese strings cheesy feet. Gouda monterey jack taleggio say cheese cheese on toast airedale queso lancashire. Fondue everyone loves fromage frais when the cheese comes out everybody's happy parmesan st. agur blue cheese cheese slices cream cheese. Jarlsberg bocconcini cheese slices caerphilly monterey jack monterey jack emmental hard cheese. Manchego the big cheese swiss brie dolcelatte blue castello macaroni cheese fromage frais. Fromage swiss emmental fondue cheddar cheesecake fromage. Fromage queso boursin. Cream cheese paneer cheese slices cheesy feet roquefort croque monsieur pecorino red leicester. Jarlsberg bavarian bergkase swiss smelly cheese macaroni cheese squirty cheese cauliflower cheese the big cheese. Pepper jack cow bocconcini feta mascarpone airedale cheese triangles hard cheese. Port-salut mascarpone cow cut the cheese fromage frais airedale croque monsieur port-salut. St. agur blue cheese camembert de normandie who moved my cheese cottage cheese danish fontina fromage frais halloumi danish fontina. Cheese slices cream cheese goat manchego pecorino cheese and wine paneer cauliflower cheese. Cow jarlsberg parmesan danish fontina caerphilly fromage smelly cheese bocconcini. Cheese slices danish fontina halloumi paneer cheeseburger emmental emmental goat. Cottage cheese red leicester bavarian bergkase boursin mozzarella macaroni cheese fromage frais chalk and cheese. Bavarian bergkase. Cheesy feet melted cheese bavarian bergkase. Say cheese cauliflower cheese fromage frais fromage frais cheeseburger bocconcini cheese and wine jarlsberg. Manchego pepper jack port-salut ricotta port-salut cheese triangles squirty cheese cheese on toast. Gouda st. agur blue cheese cream cheese swiss cheese slices stinking bishop swiss pecorino. Roquefort cottage cheese pecorino stilton taleggio stilton swiss cheeseburger. Monterey jack mozzarella when the cheese comes out everybody's happy macaroni cheese dolcelatte melted cheese fromage caerphilly. Brie stilton goat babybel cheesy feet cream cheese camembert de normandie blue castello. Lancashire cream cheese cheese strings cottage cheese pecorino camembert de normandie brie edam. Caerphilly chalk and cheese rubber cheese squirty cheese pepper jack cheese on toast halloumi say cheese. Caerphilly boursin stilton who moved my cheese danish fontina cheesy feet airedale smelly cheese. Emmental roquefort cream cheese gouda stilton.  Monterey jack melted cheese cheese slices. Roquefort cauliflower cheese airedale smelly cheese port-salut danish fontina who moved my cheese say cheese. Cheese on toast fondue hard cheese cheese and biscuits stinking bishop pecorino caerphilly queso. Croque monsieur babybel croque monsieur gouda mozzarella parmesan taleggio fromage. Dolcelatte blue castello fromage frais boursin gouda red leicester parmesan say cheese. Smelly cheese queso chalk and cheese stinking bishop airedale cheese triangles cheddar red leicester. Feta jarlsberg stilton edam cut the cheese fromage jarlsberg manchego. Swiss cheese on toast croque monsieur monterey jack caerphilly brie queso chalk and cheese. Feta fondue ricotta paneer taleggio edam airedale smelly cheese. The big cheese. Cream cheese paneer croque monsieur. Queso gouda hard cheese cheese slices rubber cheese taleggio queso red leicester. Cow the big cheese say cheese brie paneer feta stinking bishop hard cheese. Cheese and wine cheeseburger swiss who moved my cheese caerphilly chalk and cheese melted cheese cheese strings. Cheesecake fromage croque monsieur gouda danish fontina cauliflower cheese rubber cheese cheesy feet. Cut the cheese mozzarella rubber cheese rubber cheese pepper jack ricotta cheese triangles fromage. Hard cheese stinking bishop babybel parmesan mozzarella dolcelatte cream cheese mascarpone. Fondue port-salut manchego bocconcini stinking bishop paneer babybel manchego. Chalk and cheese airedale macaroni cheese cheddar cream cheese cheddar cheesy grin cheesy feet. Pepper jack st. agur blue cheese mozzarella.</pre></td>
    </tr>
  </table>
</details>
<details>
  <summary>:x: account loading error shows an error notification when there is an error loading the account 7</summary>
  <table>
    <tr>
      <th>Suite:</th>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <th>Title:</th>
      <td><code>shows an error notification when there is an error loading the account 7</code></td>
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
    at Context.eval (https://app.dev.viabenefits.com/__cypress/tests?p=cypress/integration/frontend-only/accountLoadingError.js:112:8).  For fun here is an essay about cheese to make this message even longer than it is.  I love cheese, especially mozzarella cheeseburger. Who moved my cheese stinking bishop bocconcini when the cheese comes out everybody's happy camembert de normandie halloumi who moved my cheese cut the cheese. Feta cheese and biscuits bavarian bergkase chalk and cheese cheesecake paneer melted cheese feta. Pecorino stilton roquefort parmesan lancashire boursin rubber cheese danish fontina. Manchego cheese on toast squirty cheese fromage frais bocconcini pepper jack cheese strings cheesy feet. Gouda monterey jack taleggio say cheese cheese on toast airedale queso lancashire. Fondue everyone loves fromage frais when the cheese comes out everybody's happy parmesan st. agur blue cheese cheese slices cream cheese. Jarlsberg bocconcini cheese slices caerphilly monterey jack monterey jack emmental hard cheese. Manchego the big cheese swiss brie dolcelatte blue castello macaroni cheese fromage frais. Fromage swiss emmental fondue cheddar cheesecake fromage. Fromage queso boursin. Cream cheese paneer cheese slices cheesy feet roquefort croque monsieur pecorino red leicester. Jarlsberg bavarian bergkase swiss smelly cheese macaroni cheese squirty cheese cauliflower cheese the big cheese. Pepper jack cow bocconcini feta mascarpone airedale cheese triangles hard cheese. Port-salut mascarpone cow cut the cheese fromage frais airedale croque monsieur port-salut. St. agur blue cheese camembert de normandie who moved my cheese cottage cheese danish fontina fromage frais halloumi danish fontina. Cheese slices cream cheese goat manchego pecorino cheese and wine paneer cauliflower cheese. Cow jarlsberg parmesan danish fontina caerphilly fromage smelly cheese bocconcini. Cheese slices danish fontina halloumi paneer cheeseburger emmental emmental goat. Cottage cheese red leicester bavarian bergkase boursin mozzarella macaroni cheese fromage frais chalk and cheese. Bavarian bergkase. Cheesy feet melted cheese bavarian bergkase. Say cheese cauliflower cheese fromage frais fromage frais cheeseburger bocconcini cheese and wine jarlsberg. Manchego pepper jack port-salut ricotta port-salut cheese triangles squirty cheese cheese on toast. Gouda st. agur blue cheese cream cheese swiss cheese slices stinking bishop swiss pecorino. Roquefort cottage cheese pecorino stilton taleggio stilton swiss cheeseburger. Monterey jack mozzarella when the cheese comes out everybody's happy macaroni cheese dolcelatte melted cheese fromage caerphilly. Brie stilton goat babybel cheesy feet cream cheese camembert de normandie blue castello. Lancashire cream cheese cheese strings cottage cheese pecorino camembert de normandie brie edam. Caerphilly chalk and cheese rubber cheese squirty cheese pepper jack cheese on toast halloumi say cheese. Caerphilly boursin stilton who moved my cheese danish fontina cheesy feet airedale smelly cheese. Emmental roquefort cream cheese gouda stilton.  Monterey jack melted cheese cheese slices. Roquefort cauliflower cheese airedale smelly cheese port-salut danish fontina who moved my cheese say cheese. Cheese on toast fondue hard cheese cheese and biscuits stinking bishop pecorino caerphilly queso. Croque monsieur babybel croque monsieur gouda mozzarella parmesan taleggio fromage. Dolcelatte blue castello fromage frais boursin gouda red leicester parmesan say cheese. Smelly cheese queso chalk and cheese stinking bishop airedale cheese triangles cheddar red leicester. Feta jarlsberg stilton edam cut the cheese fromage jarlsberg manchego. Swiss cheese on toast croque monsieur monterey jack caerphilly brie queso chalk and cheese. Feta fondue ricotta paneer taleggio edam airedale smelly cheese. The big cheese. Cream cheese paneer croque monsieur. Queso gouda hard cheese cheese slices rubber cheese taleggio queso red leicester. Cow the big cheese say cheese brie paneer feta stinking bishop hard cheese. Cheese and wine cheeseburger swiss who moved my cheese caerphilly chalk and cheese melted cheese cheese strings. Cheesecake fromage croque monsieur gouda danish fontina cauliflower cheese rubber cheese cheesy feet. Cut the cheese mozzarella rubber cheese rubber cheese pepper jack ricotta cheese triangles fromage. Hard cheese stinking bishop babybel parmesan mozzarella dolcelatte cream cheese mascarpone. Fondue port-salut manchego bocconcini stinking bishop paneer babybel manchego. Chalk and cheese airedale macaroni cheese cheddar cream cheese cheddar cheesy grin cheesy feet. Pepper jack st. agur blue cheese mozzarella.</pre></td>
    </tr>
  </table>
</details>
<details>
  <summary>:x: account loading error shows an error notification when there is an error loading the account 8</summary>
  <table>
    <tr>
      <th>Suite:</th>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <th>Title:</th>
      <td><code>shows an error notification when there is an error loading the account 8</code></td>
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
    at Context.eval (https://app.dev.viabenefits.com/__cypress/tests?p=cypress/integration/frontend-only/accountLoadingError.js:112:8).  For fun here is an essay about cheese to make this message even longer than it is.  I love cheese, especially mozzarella cheeseburger. Who moved my cheese stinking bishop bocconcini when the cheese comes out everybody's happy camembert de normandie halloumi who moved my cheese cut the cheese. Feta cheese and biscuits bavarian bergkase chalk and cheese cheesecake paneer melted cheese feta. Pecorino stilton roquefort parmesan lancashire boursin rubber cheese danish fontina. Manchego cheese on toast squirty cheese fromage frais bocconcini pepper jack cheese strings cheesy feet. Gouda monterey jack taleggio say cheese cheese on toast airedale queso lancashire. Fondue everyone loves fromage frais when the cheese comes out everybody's happy parmesan st. agur blue cheese cheese slices cream cheese. Jarlsberg bocconcini cheese slices caerphilly monterey jack monterey jack emmental hard cheese. Manchego the big cheese swiss brie dolcelatte blue castello macaroni cheese fromage frais. Fromage swiss emmental fondue cheddar cheesecake fromage. Fromage queso boursin. Cream cheese paneer cheese slices cheesy feet roquefort croque monsieur pecorino red leicester. Jarlsberg bavarian bergkase swiss smelly cheese macaroni cheese squirty cheese cauliflower cheese the big cheese. Pepper jack cow bocconcini feta mascarpone airedale cheese triangles hard cheese. Port-salut mascarpone cow cut the cheese fromage frais airedale croque monsieur port-salut. St. agur blue cheese camembert de normandie who moved my cheese cottage cheese danish fontina fromage frais halloumi danish fontina. Cheese slices cream cheese goat manchego pecorino cheese and wine paneer cauliflower cheese. Cow jarlsberg parmesan danish fontina caerphilly fromage smelly cheese bocconcini. Cheese slices danish fontina halloumi paneer cheeseburger emmental emmental goat. Cottage cheese red leicester bavarian bergkase boursin mozzarella macaroni cheese fromage frais chalk and cheese. Bavarian bergkase. Cheesy feet melted cheese bavarian bergkase. Say cheese cauliflower cheese fromage frais fromage frais cheeseburger bocconcini cheese and wine jarlsberg. Manchego pepper jack port-salut ricotta port-salut cheese triangles squirty cheese cheese on toast. Gouda st. agur blue cheese cream cheese swiss cheese slices stinking bishop swiss pecorino. Roquefort cottage cheese pecorino stilton taleggio stilton swiss cheeseburger. Monterey jack mozzarella when the cheese comes out everybody's happy macaroni cheese dolcelatte melted cheese fromage caerphilly. Brie stilton goat babybel cheesy feet cream cheese camembert de normandie blue castello. Lancashire cream cheese cheese strings cottage cheese pecorino camembert de normandie brie edam. Caerphilly chalk and cheese rubber cheese squirty cheese pepper jack cheese on toast halloumi say cheese. Caerphilly boursin stilton who moved my cheese danish fontina cheesy feet airedale smelly cheese. Emmental roquefort cream cheese gouda stilton.  Monterey jack melted cheese cheese slices. Roquefort cauliflower cheese airedale smelly cheese port-salut danish fontina who moved my cheese say cheese. Cheese on toast fondue hard cheese cheese and biscuits stinking bishop pecorino caerphilly queso. Croque monsieur babybel croque monsieur gouda mozzarella parmesan taleggio fromage. Dolcelatte blue castello fromage frais boursin gouda red leicester parmesan say cheese. Smelly cheese queso chalk and cheese stinking bishop airedale cheese triangles cheddar red leicester. Feta jarlsberg stilton edam cut the cheese fromage jarlsberg manchego. Swiss cheese on toast croque monsieur monterey jack caerphilly brie queso chalk and cheese. Feta fondue ricotta paneer taleggio edam airedale smelly cheese. The big cheese. Cream cheese paneer croque monsieur. Queso gouda hard cheese cheese slices rubber cheese taleggio queso red leicester. Cow the big cheese say cheese brie paneer feta stinking bishop hard cheese. Cheese and wine cheeseburger swiss who moved my cheese caerphilly chalk and cheese melted cheese cheese strings. Cheesecake fromage croque monsieur gouda danish fontina cauliflower cheese rubber cheese cheesy feet. Cut the cheese mozzarella rubber cheese rubber cheese pepper jack ricotta cheese triangles fromage. Hard cheese stinking bishop babybel parmesan mozzarella dolcelatte cream cheese mascarpone. Fondue port-salut manchego bocconcini stinking bishop paneer babybel manchego. Chalk and cheese airedale macaroni cheese cheddar cream cheese cheddar cheesy grin cheesy feet. Pepper jack st. agur blue cheese mozzarella.</pre></td>
    </tr>
  </table>
</details>
<details>
  <summary>:x: account loading error shows an error notification when there is an error loading the account 9</summary>
  <table>
    <tr>
      <th>Suite:</th>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <th>Title:</th>
      <td><code>shows an error notification when there is an error loading the account 9</code></td>
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
    at Context.eval (https://app.dev.viabenefits.com/__cypress/tests?p=cypress/integration/frontend-only/accountLoadingError.js:112:8).  For fun here is an essay about cheese to make this message even longer than it is.  I love cheese, especially mozzarella cheeseburger. Who moved my cheese stinking bishop bocconcini when the cheese comes out everybody's happy camembert de normandie halloumi who moved my cheese cut the cheese. Feta cheese and biscuits bavarian bergkase chalk and cheese cheesecake paneer melted cheese feta. Pecorino stilton roquefort parmesan lancashire boursin rubber cheese danish fontina. Manchego cheese on toast squirty cheese fromage frais bocconcini pepper jack cheese strings cheesy feet. Gouda monterey jack taleggio say cheese cheese on toast airedale queso lancashire. Fondue everyone loves fromage frais when the cheese comes out everybody's happy parmesan st. agur blue cheese cheese slices cream cheese. Jarlsberg bocconcini cheese slices caerphilly monterey jack monterey jack emmental hard cheese. Manchego the big cheese swiss brie dolcelatte blue castello macaroni cheese fromage frais. Fromage swiss emmental fondue cheddar cheesecake fromage. Fromage queso boursin. Cream cheese paneer cheese slices cheesy feet roquefort croque monsieur pecorino red leicester. Jarlsberg bavarian bergkase swiss smelly cheese macaroni cheese squirty cheese cauliflower cheese the big cheese. Pepper jack cow bocconcini feta mascarpone airedale cheese triangles hard cheese. Port-salut mascarpone cow cut the cheese fromage frais airedale croque monsieur port-salut. St. agur blue cheese camembert de normandie who moved my cheese cottage cheese danish fontina fromage frais halloumi danish fontina. Cheese slices cream cheese goat manchego pecorino cheese and wine paneer cauliflower cheese. Cow jarlsberg parmesan danish fontina caerphilly fromage smelly cheese bocconcini. Cheese slices danish fontina halloumi paneer cheeseburger emmental emmental goat. Cottage cheese red leicester bavarian bergkase boursin mozzarella macaroni cheese fromage frais chalk and cheese. Bavarian bergkase. Cheesy feet melted cheese bavarian bergkase. Say cheese cauliflower cheese fromage frais fromage frais cheeseburger bocconcini cheese and wine jarlsberg. Manchego pepper jack port-salut ricotta port-salut cheese triangles squirty cheese cheese on toast. Gouda st. agur blue cheese cream cheese