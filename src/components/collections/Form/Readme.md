```jsx
const { InputGroup } = require('../InputGroup');

<Form
  headingText="Welcome"
  primaryCTAText="Sign up"
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
    primaryCTAText="Sign up"
  >
    <TextInput label="Name" name="name" />
  </Form>
  <Form
    headingText="Join us"
    primaryCTAText="Sign up"
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
  primaryCTAText="Sign up"
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

#### Primary call to action text

```jsx
<div>
  <Form
    primaryCTAText="Sign up"
  >
    <TextInput label="Name" name="name" />
  </Form>
  <Form
    primaryCTAText="Come on in"
  >
    <TextInput label="Name" name="name" />
  </Form>
</div>
```

#### Secondary call to action

A form can show an optional secondary call to action.

```jsx
<div>
  <Form
    headingText="Log in"
    primaryCTAText="Submit"
    secondaryCTA={{
      onClick: () => console.log('Clicked the secondary call to action'),
      text: 'Forgot password'
    }}
  >
    <TextInput label="Name" name="name" />
    <TextInput label="Password" name="password" />
  </Form>
</div>
```
