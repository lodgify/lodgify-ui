```jsx
import { Modal, Heading, Paragraph, Button } from '@lodgify/ui';

<Modal trigger={<Button>See more</Button>}>
  <Heading>The quick brown fox jumps</Heading>
  <Paragraph>
    The preservation of human life is the ultimate value, a pillar of ethics and the foundation of all morality. This held true in most cultures
  </Paragraph>
</Modal>
```

### Variations

#### Header

```jsx
import { Modal, Heading, Paragraph, Button } from '@lodgify/ui';

<Modal header={<Heading>The quick brown fox jumps</Heading>} trigger={<Button>Modal with header</Button>}>
  <Paragraph>
    The preservation of human life is the ultimate value, a pillar of ethics and the foundation of all morality. This held true in most cultures
  </Paragraph>
</Modal>
```

#### Full screen

```jsx
import { Modal, Heading, Paragraph, Button } from '@lodgify/ui';

<Modal isFullscreen trigger={<Button>Fill the screen</Button>}>
  <Heading>The quick brown fox jumps</Heading>
  <Paragraph>
    The preservation of human life is the ultimate value, a pillar of ethics and the foundation of all morality. This held true in most cultures
  </Paragraph>
</Modal>
```
