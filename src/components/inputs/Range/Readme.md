```jsx
import { Range } from '@lodgify/ui';

<Range />
```

### Variations

#### Domain

```jsx
import { Range } from '@lodgify/ui';

<Range domain={[1,5]} />
```

#### Step

```jsx
import { Range } from '@lodgify/ui';

<Range step={10} />
```

#### Multiple handles

```jsx
import { Range, Divider } from '@lodgify/ui';

<div>
  <Range initialValue={[10,90]} />
  <Divider />
  <Range initialValue={[20,40,60]} />
</div>
```

#### Track display

```jsx
import { Range, Divider } from '@lodgify/ui';

<div>
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
</div>
```

### Content

#### Value

```jsx
import { Range, Divider, Icon } from '@lodgify/ui';

<div>
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
</div>
```
