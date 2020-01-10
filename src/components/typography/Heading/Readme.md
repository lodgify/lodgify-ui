```jsx
import { Heading } from '@lodgify/ui';

<Heading>The quick brown fox jumps</Heading>
```

### Variations

#### Size

```jsx
import { Heading } from '@lodgify/ui';

<div>
  <Heading size="huge">The quick brown fox jumps</Heading>
  <Heading size="large">The quick brown fox jumps</Heading>
  <Heading size="medium">The quick brown fox jumps</Heading>
  <Heading size="small">The quick brown fox jumps</Heading>
</div>
```

#### Color inverted

```jsx
import { Heading } from '@lodgify/ui';

<div style={{ backgroundColor: 'grey' }}>
  <Heading isColorInverted>
    The quick brown fox jumps
  </Heading>
</div>
```

#### Margin

```jsx
import { Heading, Divider } from '@lodgify/ui';

<div>
  <Heading>We</Heading>
  <Heading>have</Heading>
  <Heading>margin</Heading>
  <Divider />
  <Heading hasMargin={false}>But</Heading>
  <Heading hasMargin={false}>we</Heading>
  <Heading hasMargin={false}>don't</Heading>
</div>
```
