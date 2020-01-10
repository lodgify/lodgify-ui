```jsx
import { Button } from '@lodgify/ui';

<Button>Submit</Button>
```

### States

#### Loading

```jsx
import { Button } from '@lodgify/ui';

<Button isLoading>
  Submit
</Button>
```


#### Disabled

```jsx
import { Button } from '@lodgify/ui';

<Button isDisabled>
  Submit
</Button>
```

### Variations

#### Secondary

```jsx
import { Button } from '@lodgify/ui';

<div style={{ backgroundColor: '#333', display: 'flex', padding: '1rem' }}>
  <Button isSecondary>Submit</Button>
</div>
```

#### Icon

```jsx
import { Button } from '@lodgify/ui';

<div>
  <Button icon="search">
    Submit
  </Button>
</div>
```

#### Outlined

```jsx
import { Button } from '@lodgify/ui';

<Button isOutlined>Submit</Button>
```

#### Rounded

```jsx
import { Button } from '@lodgify/ui';

<Button isRounded>
  Submit
</Button>
```

#### Shadow

```jsx
import { Button } from '@lodgify/ui';

<Button hasShadow>
  Submit
</Button>
```

#### Size

```jsx
import { 
  Button, 
  Grid, 
  GridRow, 
  GridColumn,
  Divider
} from '@lodgify/ui';

<Grid>
    <GridRow>
      <GridColumn width={12}>
        <Button size="massive">Massive</Button>
        <Button size="huge">Huge</Button>
        <Button size="big">Big</Button>
      </GridColumn>
      <GridColumn width={12}>
        <Divider />
      </GridColumn>
      <GridColumn width={12}>
        <Button size="large">Large</Button>
        <Button size="medium">Medium</Button>
        <Button size="small">Small</Button>
      </GridColumn>
      <GridColumn width={12}>
        <Divider />
      </GridColumn>
      <GridColumn width={12}>
        <Button size="mini">Mini</Button>
        <Button size="tiny">Tiny</Button>
      </GridColumn>
  </GridRow>
</Grid>
```
 
#### Fluid

A fluid button fills the width of its container.

```jsx
import { Button } from '@lodgify/ui';

<Button isFluid>
  Submit
</Button>
```
