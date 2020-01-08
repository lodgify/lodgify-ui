```jsx
const { items } = require("./mock/items");

<HorizontalMenu items={items} />;
```

### Is displayed as Header

```jsx
const { subItems } = require("./mock/items");

<HorizontalMenu isHeader items={subItems} />;
```