```jsx
<Thumbnail imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg" />
```

### Variations

#### Rounded corners

```jsx
<Thumbnail
  imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg"
  hasRoundedCorners
/>
```

#### Circular

```jsx
<Thumbnail
  imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg"
  isCircular
/>
```

#### Square

```jsx
<Thumbnail
  imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg"
  isSquare
/>
```

#### Labeled

```jsx
<Grid columns={3}>
  <GridColumn>
    <Thumbnail
      imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg"
      isSquare
      label="small"
      size="small"
    />
  </GridColumn>
  <GridColumn>
    <Thumbnail
      imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg"
      isSquare
      label="medium"
    />
  </GridColumn>
  <GridColumn>
    <Thumbnail
      imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg"
      isSquare
      label="large"
      size="large"
    />
  </GridColumn>
</Grid>
```
