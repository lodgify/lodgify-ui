```jsx
<LazyLoader 
  lazyComponent={ResponsiveImage}
  componentProps={{
    placeholderImageUrl:"https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=20&mode=max",
    imageUrl:"https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=1024&mode=max",
    imageWidth: 1024,
    imageHeight: 683
  }}
/>
```

### Variations

#### Lazy props
```jsx
<LazyLoader 
  lazyComponent={ResponsiveImage}
  componentProps={{
    placeholderImageUrl:"https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=20&mode=max",
    imageWidth: 1024,
    imageHeight: 683
  }}
  lazyProps={{ 
    imageUrl:"https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=920&mode=max"
  }}
/>
```