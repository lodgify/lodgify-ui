```jsx
const propertyOptions = [
  { text: 'La Casa Viva', value: 'casaViva' },
  { text: 'La Casa Muerta', value: 'casaMuerta' },
  { text: 'The White Lodge', value: 'whiteLodge' },
  { text: 'The Black Lodge', value: 'blackLodge' },
];

const timeOptions = [
  { text: '10 am', value: '1000' },
  { text: '11 am', value: '1100' },
  { text: '12 noon', value: '1200' },
  { text: '1 pm', value: '1300' },
  { text: '2 pm', value: '1400' },
  { text: '3 pm', value: '1500' },
];

const timeZoneOptions = [
  { text: 'CET', value: 'cet' },
  { text: 'GMT', value: 'gmt' },
  { text: 'EST', value: 'est' },
];


<CallMeBack
  propertyOptions={propertyOptions}
  timeOptions={timeOptions}
  timeZoneOptions={timeZoneOptions}
/>
```

### Content

#### Strings

```jsx
<CallMeBack
  dateInputPlaceholder="The Date"
  emailInputLabel="Your email address"
  headingText="Can you call me back?"
  nameInputLabel="Your name"
  notesInputLabel="Some notes?"
  phoneInputLabel="Your phone number"
  propertyInputLabel="What property?"
  propertyOptions={[]}
  submitButtonText="Submit form"
  timeInputLabel="Choose an ideal time"
  timeOptions={[]}
  timeZoneInputLabel="What is your time zone"
  timeZoneOptions={[]}
/>
```

### Usage

#### Validation

```jsx
const propertyOptions = [{
  text: 'With error',
  value: 'error'
}, {
  text: 'Is valid',
  value: 'valid'
}];

const validation = {
  date: { isRequired: true },
  email: { isRequired: true },
  name: { isRequired: true },
  notes: { isRequired: true },
  phone: { isRequired: true },
  property: {
    isRequired: true,
    invalidMessage: 'A property is required',
    getIsValid: value => value !== 'error'
  },
  time: { isRequired: true },
  timeZone: { isRequired: true }
};

<CallMeBack
  propertyOptions={propertyOptions}
  timeOptions={[]}
  timeZoneOptions={[]}
  validation={validation}
/>
```

### States

#### Success

```jsx
<CallMeBack
  successMessage="The call me back form has been successfully submitted"
  propertyOptions={[]}
  timeOptions={[]}
  timeZoneOptions={[]}
/>
```

#### Error

```jsx
<CallMeBack
  errorMessage="Request Failed. Please try again."
  propertyOptions={[]}
  timeOptions={[]}
  timeZoneOptions={[]}
/>
```
