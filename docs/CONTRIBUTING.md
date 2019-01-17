### Contributing

#### Quick start

```bash
$ git clone git@github.com:lodgify/lodgify-ui.git
$ cd lodgify-ui
$ npm install
$ npm run install:peers
$ npm start
```

Then go to http://localhost:6060/


#### Pull requests

- Open a PR into the [master branch](https://github.com/lodgify/lodgify-ui/tree/master).
- The PR Opener adds contributors as Reviewers *and* Assignees.
- Each Reviewer completes a review. Reviewer removes themself as Assignee.
- If action is required, Reviewer adds Opener as Assignee.
- If no action is required and all checks pass, any Reviewer or Opener merges the PR.

A PR cannot be merged if:
- It breaks [Wheaton's Law](http://www.wheatonslaw.com/)
- It doesn't follow project [code conventions](https://github.com/lodgify/lodgify-ui/blob/master/docs/CONVENTIONS.md)
- Any of the following commands fail when run by Travis
  - `npm run lint`
  - `npm run test`
  - `npm run build`
  - `npm run styleguide:build`
- It does not have at least one approval from a contributor

Avoid wasting time in PRs by creating this pre-commit git hook...

```sh
# .git/hooks/pre-commit
npm run pre-commit
```

### Deployment

When a commit is merged into master branch, Travis does the following tasks

- Builds a fresh React Styleguidist styleguide
- Pushes the build files to [gh-pages branch](https://github.com/lodgify/lodgify-ui/tree/gh-pages)

You should be able to see the styleguide at https://lodgify.github.io/lodgify-ui/ shortly after the merge.
