```jsx
import { HorizontalMenu } from '@lodgify/ui';
const { items } = require("./mock/items");

<HorizontalMenu items={items} />;
```

### Is displayed as Header

```jsx
import { HorizontalMenu } from '@lodgify/ui';
const { subItems } = require("./mock/items");

<HorizontalMenu isHeader items={subItems} />;
```