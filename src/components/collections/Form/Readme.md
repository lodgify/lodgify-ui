```jsx
const { InputGroup } = require('../InputGroup');

<Form
  headingText="Welcome"
  submitButtonText="Sign up"
>
  <InputGroup>
    <TextInput label="First name" name="firstName" />
    <TextInput label="Last name" name="lastName" />
  </InputGroup>
  <Dropdown
    label="Location"
    name="location"
    options={[
      { text: 'France', value: 'fr' },
      { text: 'Spain', value: 'es' }
    ]}
  />
  <TextArea
    label="Tell us a little about yourself" name="description"
  />
</Form>
```

### Content

#### Heading

```jsx
<div>
  <Form
    headingText="Welcome"
    submitButtonText="Sign up"
  >
    <TextInput label="Name" name="name" />
  </Form>
  <Divider />
  <Form
    headingText="Join us"
    submitButtonText="Sign up"
  >
    <TextInput label="Name" name="name" />
  </Form>
</div>
```

#### Input group

A set of fields can appear grouped together.

```jsx
const { InputGroup } = require('../InputGroup');

<Form
  headingText="Welcome"
  submitButtonText="Sign up"
>
  <InputGroup>
    <TextInput label="Name" name="name" />
    <Dropdown
      label="Location"
      options={[
        { text: 'France', value: 'fr' },
        { text: 'Spain', value: 'es' }
      ]}
    />
  </InputGroup>
</Form>
```

#### Submit button text

```jsx
<div>
  <Form
    submitButtonText="Sign up"
  >
    <TextInput label="Name" name="name" />
  </Form>
  <Divider />
  <Form
    submitButtonText="Come on in"
  >
    <TextInput label="Name" name="name" />
  </Form>
</div>
```

#### Action link

```jsx
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
```
