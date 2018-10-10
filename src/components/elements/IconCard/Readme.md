```jsx
<IconCard name="fire" />
```

### States

#### Disabled

```jsx
<IconCard isDisabled name="fire" />
```

### Variations

#### Labeled

```jsx
<IconCard label="Fireplace" name="fire" />
<IconCard
  label={`
    Wow
    Multiline
  `}
  name="fire"
/>
<IconCard isDisabled label="Fireplace" name="fire" />
```

#### Filled

```jsx
<IconCard isFilled label="Fireplace" name="fire" />
<IconCard
  isDisabled
  isFilled
  label="Fireplace"
  name="fire"
/>
```

#### Left aligned

```jsx
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
```

#### Size

```jsx
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
```
