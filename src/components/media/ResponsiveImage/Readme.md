```jsx
<ResponsiveImage
  imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=1024&mode=max"
 />
```

### Variations

#### Fluid

```jsx
<ResponsiveImage
  alternativeText="Seamlessly fluid image loading amuses me"
  imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=100&mode=max"
  isFluid
/>
```

#### Not Fluid
```jsx
<ResponsiveImage
  imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=100&mode=max"
  alternativeText="Seamlessly non-fluid image loading amuses me"
  imageWidth={100}
  imageHeight={67}
/>
```

#### Responsive

```jsx
const getSrc = width => `https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=${width}`;

<ResponsiveImage
  imageUrl={getSrc(1200)}
  sizes="(max-width: 800px) 500px, (max-width: 1000px) 800px, 100vw"
  srcSet={`${getSrc(500)} 500w, ${getSrc(800)} 800w, ${getSrc(1200)} 1200w`}
/>
```

#### With graceful loading

```jsx
<ResponsiveImage
  placeholderImageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=20&mode=max"
  imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=1024&mode=max"
  imageWidth={1024}
  imageHeight={683}
 />
```

#### Labeled

```jsx
<div>
  <ResponsiveImage
    imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=100&mode=max"
    imageHeight={100}
    imageWidth={67}
    label="Two cats"
  />
  <Divider />
  <ResponsiveImage
    imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=100&mode=max"
    imageHeight={100}
    imageWidth={67}
    label="Two more"
  />
</div>
```

#### Rounded corners

```jsx
<ResponsiveImage
  imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=600&mode=max"
  hasRoundedCorners
/>
```

#### Circular

```jsx
<ResponsiveImage
  imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=600&mode=max"
  isCircular
/>
```

#### No url

```jsx
<ResponsiveImage />
```

### Content

#### Strings
```jsx
<ResponsiveImage imageNotFoundLabelText="Where did it go?" />
```
