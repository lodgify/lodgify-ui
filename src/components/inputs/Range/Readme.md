```jsx
<Range />
```

### Variations

#### Domain

```jsx
<Range domain={[1,5]} />
```

#### Step

```jsx
<Range step={10} />
```

#### Multiple handles

```jsx
<Range initialValue={[10,90]} />
<Divider />
<Range initialValue={[20,40,60]} />
```

#### Track display

```jsx
<Range
  initialValue={[50]}
/>
<Divider />
<Range
  initialValue={[50]}
  isShowingTrackOutsideLeft={false}
/>
<Divider />
<Range
  initialValue={[50]}
  isShowingTrackOutsideRight={true}
/>
<Divider />
<Range
  initialValue={[50]}
  isShowingTrackOutsideLeft={false}
  isShowingTrackOutsideRight={true}
/>
```

### Content

#### Value

```jsx
<Range renderValue={value => `€${value}`} />
<Divider />
<Range
  renderValue={value => ([
    <Icon
      name="star"
      size="small"
    />,
    value
  ])}
/>
<Divider />
<Range
  domain={[0,5]}
  renderValue={value => ([
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
  ][value])}
/>
```
