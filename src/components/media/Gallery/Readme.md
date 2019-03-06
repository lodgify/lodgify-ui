```jsx
const images = [
  {
    imageUrl: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=1024&mode=max',
    label: 'Two Cats',
  },
  {
    imageUrl: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=1024&mode=max',
    label: 'The Roof',
  },
  {
    imageUrl: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=1024&mode=max',
    label: 'The Church',
  },
];

<Gallery
  images={images}
  trigger={<Button>See gallery</Button>}
/>
```

### Content

#### Heading

```jsx
const images = [
  {
    imageUrl: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=1024&mode=max',
    label: 'Two Cats',
  },
  {
    imageUrl: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=1024&mode=max',
    label: 'The Roof',
  },
  {
    imageUrl: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=1024&mode=max',
    label: 'The Church',
  },
];

<Gallery
  headingText={<Heading>Gallery</Heading>}
  images={images}
  trigger={<Button>See gallery</Button>}
/>
```

#### Categories

```jsx
const images = [
  {
    categoryText: 'Fauna',
  },
  {
    imageUrl: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=1024&mode=max',
    label: 'Two Cats',
  },
  {
    categoryText: 'Buildings',
  },
  {
    imageUrl: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=1024&mode=max',
    label: 'The Roof',
  },
  {
    imageUrl: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=1024&mode=max',
    label: 'The Church',
  },
];

<Gallery
  images={images}
  trigger={<Button>See gallery</Button>}
/>
```
