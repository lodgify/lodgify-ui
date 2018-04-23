```jsx
<Thumbnail imageUrl="//li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=1024&mode=max" />
```

### Variations

#### Labeled

```jsx
<div>
  <Thumbnail
    imageUrl="//li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=100&mode=max"
    isFluid={false}
    label="Two more"
  />
</div>
```

#### Circular

Perfectly circular images require a square image file.

```jsx
const image = require('./mock-data/cat.png');

<Thumbnail
  imageUrl={image}
  isCircular
  size="small"
/>
```

#### Square

```jsx
const image = require('./mock-data/cat.png');

<Thumbnail
  imageUrl="//li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=100&mode=max"
  size="large"
  isSquare
/>
```
