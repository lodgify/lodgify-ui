### Usage

#### No `imageUrl` specified

```jsx
<Image />
```

#### Standard Example

```jsx
<Image
  imageUrl="//li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=1140&mode=max"
  alternativeText='Seamlessly image loading amuses me'
/>
```

#### Responsive Example

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
