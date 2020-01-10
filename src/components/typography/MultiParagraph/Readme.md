```jsx
import { MultiParagraph } from '@lodgify/ui';
const { content } = require("./mock-data/content");

<MultiParagraph content={content} />;
```

## Variations

### with HTML

```jsx
import { MultiParagraph } from '@lodgify/ui';
const { htmlContent } = require("./mock-data/content");

<MultiParagraph content={htmlContent} isHtml />;
```

### already opened

```jsx
import { MultiParagraph } from '@lodgify/ui';
const { content } = require("./mock-data/content");

<MultiParagraph content={content} isShowingAll={true} />;
```
