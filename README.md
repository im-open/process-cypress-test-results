# process-cypress-test-results

This action works in conjunction with another step that runs `cypress run --reporter mochawesome`. This action takes the generated results json file and creates a Status Check or PR Comment depending on the flags set with the test outcome.

This action does not run the Cypress tests itself and it can only process one results file at a time.

## Index <!-- omit in toc -->

- [process-cypress-test-results](#process-cypress-test-results)
  - [Failures](#failures)
  - [Limitations](#limitations)
  - [Action Outputs](#action-outputs)
    - [Pull Request Comment](#pull-request-comment)
    - [Pull Request Status Check](#pull-request-status-check)
    - [Workflow Run](#workflow-run)
    - [Failed Test Details](#failed-test-details)
  - [Inputs](#inputs)
  - [Outputs](#outputs)
  - [Usage Examples](#usage-examples)
    - [npm setup](#npm-setup)
    - [Workflow](#workflow)
  - [Breaking Changes](#breaking-changes)
    - [2.3.0 to 3.0.0](#230-to-300)
  - [Contributing](#contributing)
    - [Incrementing the Version](#incrementing-the-version)
    - [Source Code Changes](#source-code-changes)
    - [Recompiling Manually](#recompiling-manually)
    - [Updating the README.md](#updating-the-readmemd)
  - [Code of Conduct](#code-of-conduct)
  - [License](#license)

## Failures

The test status & action's conclusion can be viewed in multiple places:

- In the body of a PR comment this action generates
- Next to the name of one of the status checks under the `Checks` section of a PR
- Next to the name of one of the status checks under the `Jobs` section of the workflow run
- In the body of a status check listed on the workflow run

If the test results contain failures, the status check's conclusion will be set to `failure`. If the status check is required and its conclusion is `failure` the PR cannot be merged.  If this required status check behavior is not desired, the `ignore-test-failures` input can be set and the conclusion will be marked as `neutral` if test failures are detected. The status badge that is shown in the comment or status check body will still indicate it was a `failure` though.

## Limitations

GitHub does have a size limitation of 65535 characters for a Status Check body or a PR Comment. This action will fail if the test results exceed the GitHub [limit]. To mitigate this size issue only failed tests are included in the output.

If you have multiple workflows triggered by the same `pull_request` or `push` event, GitHub creates one checksuite for that commit. The checksuite gets assigned to one of the workflows randomly and all status checks for that commit are reported to that checksuite. That means if there are multiple workflows with the same trigger, your status checks may show on a different workflow run than the run that created them.

## Action Outputs

### Pull Request Comment

This is shown on the pull request when the `create-pr-comment` is set to `true` and there is a PR associated with the commit.
<kbd><img src="./docs/pr_comment.png"></img></kbd>

### Pull Request Status Check

This is shown on the pull request when the `create-status-check` is set to `true` and there is a PR associated with the commit.
<kbd><img src="./docs/pr_status_check.png"></img></kbd>

### Workflow Run

This is shown on the workflow run when the `create-status-check` is set to `true`.
<kbd><img src="./docs/workflow_status_check.png"></img></kbd>

### Failed Test Details

For failed test runs you can expand each failed test and view more details about the failure
<kbd><img src="./docs/failed_tests.png"></img></kbd>

## Inputs

| Parameter                      | Is Required | Default                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|--------------------------------|-------------|--------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `github-token`                 | true        | N/A                                              | Used for the GitHub Checks API. Value is generally: `secrets.GITHUB_TOKEN`.                                                                                                                                                                                                                                                                                                                                                                                               |
| `results-file`                 | true        | N/A                                              | The json results file generated by cypress & mochawesome reporter.                                                                                                                                                                                                                                                                                                                                                                                                      |
| `report-name`                  | false       | `Cypress Test Results`                           | The desired name of the report that is shown on the PR Comment and inside the Status Check.                                                                                                                                                                                                                                                                                                                                                                             |
| `create-status-check`          | false       | `true`                                           | Flag indicating whether a status check with cypress test results should be generated.                                                                                                                                                                                                                                                                                                                                                                                   |
| `ignore-test-failures`         | false       | `false`                                          | If there are test failures, the check's conclusion is set to `neutral` so it will not block pull requests.<br/><br/>*Only applicable when `create-status-check` is true.*                                                                                                                                                                                                                                                                                               |
| `create-pr-comment`            | false       | `true`                                           | Flag indicating whether a PR comment with cypress test results should be generated.  When `true` the default behavior is to update an existing comment if one exists.                                                                                                                                                                                                                                                                                                   |
| `update-comment-if-one-exists` | false       | `true`                                           | This flag determines whether a new comment is created or if the action updates an existing comment (*if one is found*).<br/><br/>*Only applicable when `create-pr-comment` is true.*                                                                                                                                                                                                                                                                                    |
| `comment-identifier`           | false       | `${{ env.GITHUB-JOB }}_${{ env.GITHUB-ACTION }}` | A unique identifier which will be added to the generated markdown as a comment (*it will not be visible in the PR comment*).<br/><br/>This identifier enables creating then updating separate results comments on the PR if more than one instance of this action is included in a single job. This can be helpful when there are multiple test projects that run separately but are part of the same job.<br/><br/>*Only applicable when `create-pr-comment` is true.* |
| `timezone`                     | false       | `UTC`                                            | IANA time zone name (e.g. America/Denver) to display dates in.                                                                                                                                                                                                                                                                                                                                                                                                          |

## Outputs

| Output                   | Description                                                                                                                                                                                                                                            |
|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `test-outcome`           | Test outcome based on presence of failing tests: *Failed,Passed*<br/>If exceptions are thrown or if it exits early because of argument errors, this is set to Failed.                                                                                  |
| `test-results-truncated` | Flag indicating whether test results were truncated due to markdown exceeding character limit of 65535.                                                                                                                                                |
| `test-results-file-path` | File path for the file that contains the pre-truncated test results in markdown format.  This is the same output that is posted in the PR comment.                                                                                                     |
| `status-check-id`        | The ID of the Status Check that was created.  This is only set if `create-status-check` is `true` and a status check was created successfully.                                                                                                         |
| `pr-comment-id`          | The ID of the PR comment that was created.  This is only set if `create-pr-comment` is `true` and a PR was created successfully.                                                                                                                       |

## Usage Examples

### npm setup

1. These examples require a few npm packages to be installed, generally as dev dependencies:
   - mochawesome
   - mochawesome-merge
   - mochawesome-report-generator
2. Some npm scripts have also been added to the project

   ```json
   "scripts": {
     "precypressrun": "rm -rf mochawesome-report/",
     "cypressrun": "cypress run --project ./ --reporter mochawesome --reporter-options overwrite=false,html=false,json=true",
     "cypressreport": "mochawesome-merge mochawesome-report/*.json > raw-results.json && marge --reportDir cypress-results raw-results.json"
   }
   ```

   - `cypressrun`:
     - `overwrite=false`: This flag is set to false so a separate json file is created per test/suite. If not set, each test overwrites the previous test results so a comprehensive report cannot be generated.
     - `html=false`: This tells *mochawesome* not to generate an html report since we'll be doing that after the test run.
     - `json=true`: This tells *mochawesome* to generate json result files which we will be merged together in the `cypressreport` script.
   - `precypressrun`:
     - Since the `overwrite` flag is false, we need a way to remove results between test runs which is what this script does. By default *mochawesome* puts the results in the `mochawesome-report` directory.
   - `cypressreport`:
     - `mochawesome-merge mochawesome-report/*.json > raw-results.json`: merges all json files into one
     - `marge --reportDir cypress-results raw-results.json`: Generates the html report from the merged json file and puts it in the `cyress-results` directory

A step by step tutorial that sets up *mochawesome* can be found on [Test reporting with Cypress and Mochawesome].

### Workflow

```yml
jobs:
  advanced-cypress:
    runs-on: [windows-2019]
    permissions:
      contents: read
      checks: write
      statuses: write
      pull-requests: write

    env:
      APP_DIR: './src/MyProject/FrontEnd'

    defaults:
      run:
        shell: bash
        working-directory: ${{ env.APP_DIR }}

    steps:
      - uses: actions/checkout@v4

      - name: Restore npm packages
        run: npm install

      - name: dotnet build & run the app
        working-directory: ./
        run: |
          dotnet build DemoApp15.sln
          dotnet run

      - name: Run cypress
        id: cypress
        continue-on-error: true
        run: npm run cypressrun

      # This creates the json file needed for this action
      - name: Merge results into a single json and create html report
        run: npm run cypressreport

      - name: Create Status check based on merged cypress results
        if: always()
        id: process-cypress
        # You may also reference just the major or major.minor version
        uses: im-open/process-cypress-test-results@v3.0.1
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
          results-file: '${{ env.APP_DIR }}/raw-results.json' # Name set up in npm script `cypressreport`
          report-name: 'Cypress ${{ github.run_number }}' # Default: Cypress Test Results
          create-status-check: true # Default: true
          create-pr-comment: false # Default: true
          update-comment-if-one-exists: false # Default: true
          ignore-test-failures: true # Default: false
          timezone: 'america/denver' # Default: UTC

      - name: Annotate Test Outcome
        if: steps.process-cypress.outputs.test-outcome-truncated == 'true'
        run: cat ${{ steps.process-cypress.outputs.test-outcome-file-path }} > $GITHUB_STEP_SUMMARY

      # Optional
      - name: Upload Outcome as artifact if character limit reached
        if: steps.process-cypress.outputs.test-outcome-truncated == 'true'
        uses: actions/upload-artifact@v4
        with:
          name: Cypress-Results
          path: |
            ${{ steps.process-cypress.outputs.test-outcome-file-path }}
          retention-days: 7

      - name: Fail if there were errors in the cypress tests
        if: steps.process-cypress.outputs.test-outcome == 'Failed'
        run: |
          echo "There were cypress test failures."
          exit 1
```

## Breaking Changes

### 2.3.0 to 3.0.0

- The `test-outcome-truncated` output was renamed to `test-results-truncated`
- The `test-outcome-file-path` output was renamed to `test-results-file-path`

## Contributing

When creating PRs, please review the following guidelines:

- [ ] The action code does not contain sensitive information.
- [ ] At least one of the commit messages contains the appropriate `+semver:` keywords listed under [Incrementing the Version] for major and minor increments.
- [ ] The action has been recompiled. See [Recompiling Manually] for details.
- [ ] The README.md has been updated with the latest version of the action. See [Updating the README.md] for details.

### Incrementing the Version

This repo uses [git-version-lite] in its workflows to examine commit messages to determine whether to perform a major, minor or patch increment on merge if [source code] changes have been made. The following table provides the fragment that should be included in a commit message to active different increment strategies.

| Increment Type | Commit Message Fragment                     |
|----------------|---------------------------------------------|
| major          | +semver:breaking                            |
| major          | +semver:major                               |
| minor          | +semver:feature                             |
| minor          | +semver:minor                               |
| patch          | *default increment type, no comment needed* |

### Source Code Changes

The files and directories that are considered source code are listed in the `files-with-code` and `dirs-with-code` arguments in both the [build-and-review-pr] and [increment-version-on-merge] workflows.

If a PR contains source code changes, the README.md should be updated with the latest action version and the action should be recompiled. The [build-and-review-pr] workflow will ensure these steps are performed when they are required. The workflow will provide instructions for completing these steps if the PR Author does not initially complete them.

If a PR consists solely of non-source code changes like changes to the `README.md` or workflows under `./.github/workflows`, version updates and recompiles do not need to be performed.

### Recompiling Manually

This command utilizes [esbuild] to bundle the action and its dependencies into a single file located in the `dist` folder. If changes are made to the action's [source code], the action must be recompiled by running the following command:

```sh
# Installs dependencies and bundles the code
npm run build
```

### Updating the README.md

If changes are made to the action's [source code], the [usage examples] section of this file should be updated with the next version of the action. Each instance of this action should be updated. This helps users know what the latest tag is without having to navigate to the Tags page of the repository. See [Incrementing the Version] for details on how to determine what the next version will be or consult the first workflow run for the PR which will also calculate the next version.

## Code of Conduct

This project has adopted the [im-open's Code of Conduct](https://github.com/im-open/.github/blob/main/CODE_OF_CONDUCT.md).

## License

Copyright &copy; 2024, Extend Health, LLC. Code released under the [MIT license](LICENSE).

<!-- Links -->

[Incrementing the Version]: #incrementing-the-version
[Recompiling Manually]: #recompiling-manually
[Updating the README.md]: #updating-the-readmemd
[source code]: #source-code-changes
[usage examples]: #usage-examples
[build-and-review-pr]: ./.github/workflows/build-and-review-pr.yml
[increment-version-on-merge]: ./.github/workflows/increment-version-on-merge.yml
[esbuild]: https://esbuild.github.io/getting-started/#bundling-for-node
[git-version-lite]: https://github.com/im-open/git-version-lite
[limit]: https://github.com/github/docs/issues/3765
[test reporting with cypress and mochawesome]: https://www.mariedrake.com/post/test-reporting-with-cypress-and-mochawesome
