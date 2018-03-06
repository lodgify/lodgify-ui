```jsx
const { Form: SemanticForm } = require('semantic-ui-react');

<Form
  headingText="Welcome"
  onSubmit={console.log}
  primaryCTAText="Sign up"
>
  <SemanticForm.Group>
    <TextInput name="firstName" />
    <TextInput name="wotevs" />
  </SemanticForm.Group>
  <TextInput name="secondName" />
  <TextInput name="email" />
  <TextInput name="somethignElse" />
</Form>
```
