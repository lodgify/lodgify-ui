```jsx
import { TextArea } from '@lodgify/ui';

<TextArea />
```

### States

#### Error

```jsx
import { TextArea, Divider } from '@lodgify/ui';

<div>
  <TextArea error />
  <Divider />
  <Divider />
  <TextArea error="Something's not right" />
</div>
```

#### Valid

```jsx
import { TextArea } from '@lodgify/ui';

<TextArea isValid />
```

### Variations

#### Labeled

```jsx
import { TextArea } from '@lodgify/ui';

<TextArea label="Search" />
```

#### Controlled

```jsx
import { TextArea } from '@lodgify/ui';

const Controller = () => {
  const [value, setValue] = React.useState(null);
  return <TextArea value={value} onChange={setValue} />;
};
<Controller />;
```
