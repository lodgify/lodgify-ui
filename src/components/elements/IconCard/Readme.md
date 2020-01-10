```jsx
import { IconCard } from '@lodgify/ui';

<IconCard name="fire" />
```

### States

#### Disabled

```jsx
import { IconCard } from '@lodgify/ui';

<IconCard isDisabled name="fire" />
```

### Variations

#### Labeled

```jsx
import { IconCard } from '@lodgify/ui';

<div>
  <IconCard label="Fireplace" name="fire" />
  <IconCard
    label={`
      Wow
      Multiline
    `}
    name="fire"
  />
  <IconCard isDisabled label="Fireplace" name="fire" />
</div>
```

#### Filled

```jsx
import { IconCard } from '@lodgify/ui';

<div>
  <IconCard isFilled label="Fireplace" name="fire" />
  <IconCard
    isDisabled
    isFilled
    label="Fireplace"
    name="fire"
  />
</div>
```

#### Left aligned

```jsx
import { IconCard } from '@lodgify/ui';

<div>
  <IconCard
    isLeftAligned
    label="Fireplace"
    name="fire"
  />
  <IconCard
    isDisabled
    isLeftAligned
    label="Fireplace"
    name="fire"
  />
</div>
```

#### Size

```jsx
import { IconCard } from '@lodgify/ui';

<div>
  <IconCard
    label="Fireplace"
    name="fire"
    size="medium"
  />
  <IconCard
    label="Fireplace"
    name="fire"
    size="large"
  />
</div>
```
