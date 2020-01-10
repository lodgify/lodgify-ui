```jsx
import { Form } from '@lodgify/ui';

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
import { Form, TextInput, Divider } from '@lodgify/ui';

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
import { Form, InputGroup, TextInput, Dropdown } from '@lodgify/ui';

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
import { Form, TextInput, InputGroup } from '@lodgify/ui';

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
import { Form, TextInput, Divider } from '@lodgify/ui';

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
import { Form, TextInput } from '@lodgify/ui';

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

### Usage

#### Validation

```jsx
import { Form, DateRangePicker, Dropdown, TextInput } from '@lodgify/ui';

const dropdownOptions = [{
  text: 'With error',
  value: 'error'
}, {
  text: 'Is valid',
  value: 'valid'
}, {
  text: 'Is empty string',
  value: ''
}];

<Form
  submitButtonText="Submit"
  validation={{
    'naive-email': {
      getIsValid: value => !!value && value.includes('@'),
    },
    'invalid-message': {
      getIsValid: value => !!value && value.includes('@'),
      invalidMessage: `Must contain the character '@'`,
    },
    required: {
      isRequired: true,
    },
    'is-required-message': {
      isRequired: true,
      isRequiredMessage: `This field can't be empty`,
    },
    'custom-get-is-empty': {
      isRequired: true,
      getIsEmpty: value => !value || [value.startDate, value.endDate].includes(null),
    },
    'is-required-dropdown': {
      isRequired: true,
      getIsValid: value => value !== 'error',
      invalidMessage: 'This dropdown is required'
    }
  }}
>
  <TextInput label="Naive email" name="naive-email" />
  <TextInput label="With invalidMessage" name="invalid-message"/>
  <TextInput label="Required" name="required" />
  <TextInput label="With isRequiredMessage" name="is-required-message" />
  <Dropdown label="Dropdown required" name="is-required-dropdown" options={dropdownOptions} />
  <DateRangePicker
    startDatePlaceholderText="Custom"
    endDatePlaceholderText="getIsEmpty"
    name="custom-get-is-empty"
  />
</Form>
```

### States

#### Success

```jsx
import { Form, TextInput } from '@lodgify/ui';

<Form
  headingText="Welcome"
  submitButtonText="Sign up"
  successMessage="An email has been sent to your account to complete the signup process"
>
  <TextInput label="Name" name="name" />
  <TextInput label="Password" name="password" type="password"/>
</Form>
```

#### Error

```jsx
import { Form, TextInput } from '@lodgify/ui';

<Form
  headingText="Welcome"
  submitButtonText="Sign up"
  errorMessage="Request Failed. Please try again."
>
  <TextInput label="Name" name="name" />
  <TextInput label="Password" name="password" type="password"/>
</Form>
```
