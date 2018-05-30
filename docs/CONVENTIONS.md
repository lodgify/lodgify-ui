### Development conventions

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

Contains unit tests for the component. Use [lodgify's expect helpers](https://www.npmjs.com/package/@lodgify/enzyme-jest-expect-helpers) when possible.

```js
import React from 'react';
import { shallow } from 'enzyme';
import { expectComponentToBe } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Form } from './component';

const getForm = () => shallow(<Form />);

describe('<Form />', () => {
  it('should render a nice `div`', () => {
    const wrapper = getForm();
    expectComponentToBe(actual, 'div')
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

Styles live in `src/styles/semantic/themes/livingstone`.

The organisation and format of the directory and files is prescribed by the [Semantic UI theming guide](https://semantic-ui.com/usage/theming.html). Give that a good read before writing any styles (Clue: write as little css as you can 😉).

If you add a new `*.overrides` or `*.variables` file in the livingstone theme directory, you need to:

1. add an `@import` statement for the component to  [semantic.less](https://github.com/lodgify/lodgify-ui/blob/production/src/styles/semantic/semantic.less).
1. change the value of the component entry in [src/styles/semantic/theme.config](https://github.com/lodgify/lodgify-ui/blob/production/src/styles/semantic/theme.config) from `'default'` to `'livingstone'`.
1. follow the comment structure used in the default theme variables file for that component.
