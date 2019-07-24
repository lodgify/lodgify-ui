```jsx
<PhoneInput />
```

### States

#### Error

```jsx
<div>
  <PhoneInput error />
  <Divider />
  <Divider />
  <PhoneInput error="Something's not right" />
</div>
```

#### Valid

```jsx
<PhoneInput isValid />
```

### Variations

#### Labeled

```jsx
<PhoneInput label="Phone" />
```

### Content

#### Country names

```jsx
<PhoneInput
  countryNames={{
    US: 'Dagobah',
    GB: 'Naboo',
  }}
/>
```


### Usage

#### Initial country value

```jsx
<PhoneInput
  initialCountryValue="JP"
/>
```
