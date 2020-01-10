```jsx
import { Video } from '@lodgify/ui';

<Video videoSource="https://www.youtube.com/watch?v=SOcixRXr0vs" />
```

### Variations

#### Responsive

```jsx
import { Video } from '@lodgify/ui';

<Video isResponsive videoSource="https://www.youtube.com/watch?v=SOcixRXr0vs" />
```

#### Responsive with a different aspect ratio

```jsx
import { Video } from '@lodgify/ui';

<Video isResponsive width="300" height="220" videoSource="https://www.youtube.com/watch?v=SOcixRXr0vs" />
```

#### HTML

```jsx
import { Video } from '@lodgify/ui';

const embeddableLodgifyVideo = `
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/SOcixRXr0vs"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
    style="border: none">
  </iframe>
`;

<Video videoSource={embeddableLodgifyVideo} />
```

#### Vimeo

```jsx
import { Video } from '@lodgify/ui';

const embeddableLodgifyVideo = `
  <iframe
    src="https://player.vimeo.com/video/90509568"
    width="640"
    height="272"
    frameborder="0"
    webkitallowfullscreen
    mozallowfullscreen
    allowfullscreen
    style="border: none">
  </iframe>
`;

<Video videoSource={embeddableLodgifyVideo} />
```
