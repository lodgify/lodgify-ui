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
<ResponsiveImage
  imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=640&mode=max"
  sources={[
    {
      srcset: 'https://si5.cdbcdn.com/oh/4efbc79e-34db-4447-b31a-24e77f33f4e9.jpg?w=2400&mode=max',
      media: '(min-width: 1200px)'
    },
    {
      srcset: 'https://si4.cdbcdn.com/oh/4efbc79e-34db-4447-b31a-24e77f33f4e9.jpg?w=1024&mode=max',
      media: '(min-width: 1024px)'
    }
  ]}
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