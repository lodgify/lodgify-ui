<div align="center">
  <a href="https://lodgify.github.io/lodgify-ui/">
    <img src="https://li5.cdbcdn.com/oh/a84645c0-0a35-4735-bda5-e5c425c2ffdc.png" width="150" />
  </a>  

  **React components for building amazing websites with Lodgify.**  

  ![Travis](https://img.shields.io/travis/lodgify/lodgify-ui.svg?style=flat-square)
  ![David](https://img.shields.io/david/lodgify/lodgify-ui.svg?style=flat-square)
  ![]()
  ![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)  

  https://lodgify.github.io/lodgify-ui/  

  <img src="https://li5.cdbcdn.com/oh/1c5d629f-450d-4ffe-aab0-80895284abf9.png" width="699" />  
</div>


### Prior art

Lodgify UI stands on the shoulders of Semantic UI. It follows [the same principles](https://semantic-ui.com/usage/theming.html) and consumes a lot of [its code](https://react.semantic-ui.com/introduction).

### Usage

```jsx
import { Form, TextInput } from '@lodgify/ui';

import '@lodgify/ui/lib/styles/lodgify-ui.css';

export const Component = () => (
  <Form
    actionLink={{
      onClick: () => console.log('Clicked the action link'),
      text: 'Forgot password?'
    }}
    headingText="Log in"
    submitButtonText="Submit"
  >
    <TextInput label="Name" name="name" />
    <TextInput label="Password" name="password" type="password"/>
  </Form>
)
```

See more at https://lodgify.github.io/lodgify-ui/

### Get started

#### Install

```bash
$ npm install @lodgify/ui
```

#### Import components

```jsx
import { Heading } from '@lodgify/ui';
```

#### Import styles

```jsx
import '@lodgify/ui/lib/styles/lodgify-ui.css';
```

### Contributing

See  [contributing](https://github.com/lodgify/lodgify-ui/blob/master/docs/CONTRIBUTING.md).
