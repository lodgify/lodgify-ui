```jsx
const images = [
  {
    alternativeText: 'Two cats',
    url: '//li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    title: 'Two cats',
  },
  {
    alternativeText: 'Two more cats',
    url: '//li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    title: 'Two more cats',
  },
  {
    alternativeText: 'Much cats',
    url: '//li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    title: 'Much cats',
  },
];

<MultiRoomType
  bathroomsNumber={2}
  bedsNumber={3}
  guestsNumber={3}
  nightPrice="$280"
  name="The Cat House"
  ratingNumber={4.8}
  slideShowImages={images}
  checkAvailability={console.log}
/>
```
