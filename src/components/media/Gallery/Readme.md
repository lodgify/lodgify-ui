```jsx
const images = [
  {
    url: "https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg",
    descriptionText: "Two cats"
  },
  {
    url: "https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg",
    descriptionText: "Two more cats"
  },
  {
    url: "https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg",
    descriptionText: "Much cats"
  }
];

<Gallery
  slideShowImages={images}
  thumbnails={images}
  trigger={<Button>Punch It!</Button>}
/>;
```

### Single Image

```jsx
const images = [
  {
    url: "https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg",
    descriptionText: "Two cats"
  }
];

<Gallery
  slideShowImages={images}
  thumbnails={images}
  trigger={<Button>Punch It!</Button>}
/>;
```
