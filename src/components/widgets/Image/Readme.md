```jsx
<Image imageUrl="//li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=1024&mode=max" />
```

### Variations

#### Fluid by default

```jsx
<Image
  imageUrl="//li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=100&mode=max"
  alternativeText="Seamlessly fluid image loading amuses me"
/>
```

#### Not Fluid
```jsx
<Image
  imageUrl="//li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=100&mode=max"
  isFluid={false}
  alternativeText="Seamlessly non-fluid image loading amuses me"
/>
```

#### Responsive

```jsx
<Image
  imageUrl="//li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=640&mode=max"
  sources={[
    {
      srcset: '//si5.cdbcdn.com/oh/4efbc79e-34db-4447-b31a-24e77f33f4e9.jpg?w=2400&mode=max',
      media: '(min-width: 1200px)'
    },
    {
      srcset: '//si4.cdbcdn.com/oh/4efbc79e-34db-4447-b31a-24e77f33f4e9.jpg?w=1024&mode=max',
      media: '(min-width: 1024px)'
    }
  ]}
/>
```

#### No url

```jsx
<Image />
```
