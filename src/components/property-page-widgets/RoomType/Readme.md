```jsx
const availableAmenities = [
  { iconName: 'wheelchair', name: 'Elevator' },
  { iconName: 'coffee', name: 'Free Coffee', isDisabled: true, },
  { iconName: 'bus', name: 'Bus Routes' },
  { iconName: 'sun', name: 'Sunny Terrace' },
  { iconName: 'leaf', name: 'Tea Cutlery' },
  { iconName: 'paw', name: 'Pets Allowed' },
  { iconName: 'users', name: 'Family Friendly' },
  { iconName: 'placeholder', name: 'Great View' },
  { iconName: 'plane', name: 'Airport Pickup' },
];

const description = "There are not many cities that have experienced such social and political extremes in recent history as Amsterdam. In the 20th century alone, Amsterdam faced the atrocities of war for the first time in 400 years, became the radical center of 1960s social movements and witnessed a complete about-face in its core economy.";

const images = [
  { 
    alternativeText: 'Two cats',
    url: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    title: 'Two cats' 
  },
  { 
    alternativeText: 'Two more cats',
    url: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    title: 'Two more cats' 
  },
  { 
    alternativeText: 'Much cats',
    url: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    title: 'Much cats'
  },
];

const extraRoomTypeFeatures = [
  { labelText: '1 Dining-Room' },
  { labelText: '1 Terrace' },
];

const roomTypeFeatures = [
  { iconName: 'double bed',  labelText: '1 Bedroom' },
  { iconName: 'guests',  labelText: '2 Guests' },
  { iconName: 'bathroom',  labelText: '1 Bathroom' }, 
];

<RoomType
  bathroomsNumber={2}
  bedsNumber={3}
  description={description}
  guestsNumber={3}
  nightPrice="$280"
  name="The Cat House"
  ratingNumber={3.4}
  onClickCheckAvailability={console.log}
  ratingNumber={4.8}
  features={roomTypeFeatures}
  extraFeatures={extraRoomTypeFeatures}
  slideShowImages={images}
  checkAvailability={console.log}
  amenities={availableAmenities}
/>
```
