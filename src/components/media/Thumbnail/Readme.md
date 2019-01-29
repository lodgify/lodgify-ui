By default `Thumbnail` fills the width of its container.

```jsx
<div style={{ width: 100 }}>
  <Thumbnail imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=100" />
</div>
<Divider />
<div style={{ width: 300 }}>
  <Thumbnail imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=300" />
</div>
<Divider />
<Thumbnail imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=1000" />
```

### Variations

#### Size

```jsx
<div style={{ width: 100 }}>
  <Thumbnail
    imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=100"
    size="small"
  />
</div>
<Divider />
<div style={{ width: 100 }}>
  <Thumbnail
    imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=100"
    size="medium"
  />
</div>
<Divider />
<div style={{ width: 100 }}>
  <Thumbnail
    imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=100"
    size="large"
  />
</div>
<Divider />
<div style={{ width: 100 }}>
  <Thumbnail
    imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=100"
    size="huge"
  />
</div>
```

#### Rounded corners

```jsx
<div style={{ width: 100 }}>
  <Thumbnail
    hasRoundedCorners
    imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=100"
  />
</div>
```

#### Circular

```jsx
<Thumbnail
  imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=100"
  isCircular
/>
```

#### Square

```jsx
<Thumbnail
  imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=100"
  isSquare
/>
```

#### Labeled

```jsx
<Thumbnail
  imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=100"
  isSquare
  label="small"
  size="small"
/>
<Divider />
<Thumbnail
  imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=100"
  isSquare
  label="medium"
/>
<Divider />
<Thumbnail
  imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=100"
  isSquare
  label="large"
  size="large"
/>
<Divider />
<Thumbnail
  imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=100"
  isSquare
  label="huge"
  size="huge"
/>
```
