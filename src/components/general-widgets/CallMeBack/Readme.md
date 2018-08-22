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
  datePlaceholderText="The Date"
  emailInputLabel="Your email address"
  headingText="Can you call me back?"
  nameInputLabel="Your name"
  noteTextareaLabel="Some notes?"
  phoneInputLabel="Your phone number"
  propertyDropdownLabel="What property?"
  propertyOptions={[]}
  submitButtonText="Submit form"
  timeDropdownLabel="Choose an ideal time"
  timeOptions={[]}
  timezoneDropdownLabel="What is your time zone"
  timeZoneOptions={[]}
/>
```
