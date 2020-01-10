```jsx
import { Rating } from '@lodgify/ui';

<Rating ratingNumber={4.8} />
```

### Content

### Numeral

```jsx
import { Rating, Divider} from '@lodgify/ui';

<div>
  <Rating ratingNumber={4.8} />
  <Divider />
  <Rating isShowingNumeral={false} ratingNumber={4.8} />
</div>
```

### Variations

#### Icon size

```jsx
import { Rating, Divider } from '@lodgify/ui';

<div>
  <Rating ratingNumber={4.8} iconSize="small" />
  <Divider />
  <Rating ratingNumber={4.8} iconSize="tiny" />
</div>
```
