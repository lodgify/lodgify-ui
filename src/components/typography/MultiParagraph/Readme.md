```jsx
const { content } = require("./mock-data/content");

<MultiParagraph content={content} />;
```

## Variations

### with HTML

```jsx
const { htmlContent } = require("./mock-data/content");

<MultiParagraph content={htmlContent} isHtml />;
```

### already opened

```jsx
const { content } = require("./mock-data/content");

<MultiParagraph content={content} isShowingAll={true} />;
```
