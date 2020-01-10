```jsx
import { Pagination } from '@lodgify/ui';

<Pagination totalPages={5} />
```

### Variations

#### Page numbers

```jsx
import { Pagination } from '@lodgify/ui';

<Pagination isShowingPageNumbers totalPages={7} />
```

### Content

#### Starting page

```jsx
import { Pagination, Divider } from '@lodgify/ui';

<div>
  <Pagination startingPage={1} totalPages={5} />
  <Divider />
  <Pagination startingPage={3} totalPages={5} />
  <Divider />
  <Pagination startingPage={5} totalPages={5} />
</div>
```

#### Total pages

```jsx
import { Pagination, Divider } from '@lodgify/ui';

<div>
  <Pagination totalPages={5} />
  <Divider />
  <Pagination totalPages={10} />
  <Divider />
  <Pagination totalPages={15} />
</div>
```
