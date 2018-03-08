## Lodgify UI

React components for building amazing websites with Lodgify. https://lodgify.github.io/lodgify-ui/

### Quick start

```bash
$ git clone git@github.com:lodgify/lodgify-ui.git
$ cd lodgify-ui
$ npm install
# Watch for changes to the styles files.
$ npm run semantic:watch
# Run the development server.
$ npm run styleguide:dev-server
```

Then go to http://localhost:6060/

### Prior art

Lodgify UI stands on the shoulders of Semantic UI. It follows [the same principles](https://semantic-ui.com/usage/theming.html) and consumes a lot of [its code](https://react.semantic-ui.com/introduction).

It is published using [React Styleguidist](https://react-styleguidist.js.org/).

### Development

#### React components

React components live in `src/components`

The basic directory structure is

```
/src
  /components
    /collections
      /Form
        component.js
        component.spec.js
        index.js
        Readme.md
```

##### Files

**index.js**

Defines the API for the component. It exports
everything which other modules need to access.

```js
export { Component as Form } from './component';
```

**component.js**

Contains the React component.

Rules:
- Default to stateless components.
- The export is a React component so should be in PascalCase i.e. `Component`.
- React Styleguidist consumes component and propTypes comments. These need to be complete and concise.

```js
import React from 'react';
import PropTypes from 'prop-types';

/**
 * A form displays a set of related user input fields in a structured way.
 * @returns {Object}
 */
export const Component = ({ heading }) => (
  ...
);

Component.displayName = 'Form';

Component.propTypes = {
    /** The heading for the form. */
    heading: PropTypes.string.isRequired,
};
```

**component.spec.js**

Contains unit tests for the component.

```js
import React from 'react';
import { shallow } from 'enzyme';

import { Component as Form } from './component';

describe('<Form />', () => {
  it('should render a nice `div`', () => {
    const form = shallow(<Form />);
    const actual = form.find('div');
    expect(actual).toHaveLength(1);
  });
});
```

**Readme.md**

Contains [React Styleguidist examples](https://react-styleguidist.js.org/docs/documenting.html#usage-examples-and-readme-files) for the component.

````md

```jsx
<Form />
```

### Variations

#### Heading

A form can have a heading.

```jsx
<Form heading="Lovely form" />
```

````

#### Styles

Styles live in `src/semantic/src/themes/livingstone`.

The organisation and format of the directory and files is prescribed by the [Semantic UI theming guide](https://semantic-ui.com/usage/theming.html). Give that a good read before writing any styles (Clue: write as little css as you can 😉).

### Contributing

Open a PR into the [production branch](https://github.com/lodgify/lodgify-ui/tree/production).

A PR cannot be merged if:
- It breaks [Wheaton's Law](http://www.wheatonslaw.com/)
- Any of the following commands fail when run by Jenkins
  - `npm run lint`
  - `npm run test`
  - `npm run semantic:build`
  - `npm run styleguide:build`
- It does not have at least one approval from a contributor

Avoid wasting time in PRs by creating these pre-commit git hooks...

```sh
# .git/hooks/pre-commit
npm run lint && \
npm run test && \
npm run semantic:build && \
npm run styleguide:build && \
```

### Deployment

When a commit is merged into production branch, Jenkins does the following tasks

- Builds fresh Semantic UI styles and assets
- Builds a fresh React Styleguidist styleguide
- Push the build files to [gh-pages branch](https://github.com/lodgify/lodgify-ui/tree/gh-pages)

You should be able to see the styleguide at https://lodgify.github.io/lodgify-ui/ shortly after the merge.
