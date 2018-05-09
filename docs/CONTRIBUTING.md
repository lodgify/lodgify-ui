### Contributing

#### Quick start

```bash
$ git clone git@github.com:lodgify/lodgify-ui.git
$ cd lodgify-ui
$ npm install
$ npm start
```

Then go to http://localhost:6060/


#### Pull requests

- Open a PR into the [production branch](https://github.com/lodgify/lodgify-ui/tree/production).
- The PR Opener adds contributors as Reviewers *and* Assignees.
- Each Reviewer completes a review. Reviewer removes themself as Assignee.
- If action is required, Reviewer adds Opener as Assignee.
- If no action is required and all checks pass, any Reviewer or Opener merges the PR.

A PR cannot be merged if:
- It breaks [Wheaton's Law](http://www.wheatonslaw.com/)
- Any of the following commands fail when run by Jenkins
  - `npm run lint`
  - `npm run test`
  - `npm run styleguide:build`
- It does not have at least one approval from a contributor

Avoid wasting time in PRs by taking a look at [our development conventions](https://github.com/lodgify/lodgify-ui/docs/CONVENTIONS.md) and creating this pre-commit git hook...

```sh
# .git/hooks/pre-commit
npm run integration:pr
```

### Deployment

When a commit is merged into production branch, Jenkins does the following tasks

- Builds a fresh React Styleguidist styleguide
- Pushes the build files to [gh-pages branch](https://github.com/lodgify/lodgify-ui/tree/gh-pages)

You should be able to see the styleguide at https://lodgify.github.io/lodgify-ui/ shortly after the merge.
