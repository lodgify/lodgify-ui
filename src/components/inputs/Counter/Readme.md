```jsx
<Counter />
```

### Variations

#### Max value

```jsx
<Counter max={1} />
```

### Content

#### Value

```jsx
<Counter
  renderValue={value => `${value}+`}
/>
<Divider />
<Divider />
<Counter
  max={3}
  renderValue={value => ([
    'zero',
    'one',
    'two',
    'three',
  ][value])}
/>
```
