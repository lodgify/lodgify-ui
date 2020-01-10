```jsx
import { PhoneInput } from '@lodgify/ui';

<PhoneInput />
```

### States

#### Error

```jsx
import { PhoneInput, Divider } from '@lodgify/ui';

<div>
  <PhoneInput error />
  <Divider />
  <Divider />
  <PhoneInput error="Something's not right" />
</div>
```

#### Valid

```jsx
import { PhoneInput } from '@lodgify/ui';

<PhoneInput isValid />
```

### Variations

#### Labeled

```jsx
import { PhoneInput } from '@lodgify/ui';

<PhoneInput label="Phone" />
```

### Content

#### Country names

```jsx
import { PhoneInput } from '@lodgify/ui';

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
import { PhoneInput } from '@lodgify/ui';

<PhoneInput
  initialCountryValue="JP"
/>
```

#### With value

```jsx
import { PhoneInput } from '@lodgify/ui';

<PhoneInput value="123456789" label="Label" initialCountryValue="IT" />
```