```jsx
import { RoomTypes } from '@lodgify/ui';
const { roomTypes } = require('./mock-data/roomTypes');

<RoomTypes
  roomTypes={roomTypes}
/>
```

### States

#### Showing placeholder

```jsx
import { RoomTypes } from '@lodgify/ui';

<RoomTypes
  isShowingPlaceholder
  roomTypes={[]}
/>
```
