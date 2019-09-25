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

#### With value

```jsx
<PhoneInput value="123456789" label="Label" initialCountryValue="IT" />
```