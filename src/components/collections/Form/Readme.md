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

#### Input width

Inputs in forms can take up different widths.

```jsx
const { InputGroup } = require('../InputGroup');

<Form>
  <TextInput label="Three" width="three" />
  <TextInput label="Five" width="five" />
  <TextInput label="Seven" width="seven" />
  <TextInput label="Nine" width="nine" />
  <InputGroup>
    <TextInput label="Groups default"/>
    <TextInput label="to equal"/>
  </InputGroup>
  <InputGroup>
    <TextInput label="Two" width="two" />
    <TextInput label="Ten" width="ten" />
  </InputGroup>
  <InputGroup>
    <TextInput label="Four" width="four" />
    <TextInput label="Eight" width="eight" />
  </InputGroup>
  <InputGroup>
    <TextInput label="Six" width="six" />
    <TextInput label="Six" width="six" />
  </InputGroup>
  <InputGroup>
    <TextInput label="Two" width="two" />
    <TextInput label="Eight" width="eight" />
    <TextInput label="Two" width="two" />
  </InputGroup>
  <InputGroup>
    <TextInput label="Three" width="three" />
    <TextInput label="Six" width="six" />
    <TextInput label="Three" width="three" />
  </InputGroup>
  <InputGroup>
    <TextInput label="Four" width="four" />
    <TextInput label="Four" width="four" />
    <TextInput label="Four" width="four" />
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
