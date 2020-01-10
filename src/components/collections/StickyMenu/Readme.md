```jsx
import { Heading, StickyMenu } from '@lodgify/ui';
const {menuItems, styles} = require('./mock-data/mock-data');

<div>
  <StickyMenu
    stickyMenuItems={menuItems}
  />

  <div id="availability" style={styles}>
    <Heading size="huge">Availability</Heading>
  </div>
  <div id="rates" style={styles}>
    <Heading size="huge">Rates</Heading>
  </div>
  <div id="reviews" style={styles}>
    <Heading size="huge">Reviews</Heading>
  </div>
  <div id="description" style={styles}>
    <Heading size="huge">Description</Heading>
  </div>
</div>
```