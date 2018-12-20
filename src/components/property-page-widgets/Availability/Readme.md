```jsx
const isDayBlocked = (moment) => moment.format('dddd') === 'Friday';

<Availability
  getIsDayBlocked={isDayBlocked}
/>
```

### Variations

#### With multiple room types

```jsx
const { roomOptionsWithImages } = require('./mock-data/options');

const state ={
  currentRoomSelection: roomOptionsWithImages[0].value
};

const isDayBlocked = (moment) => moment.format('dddd') === 'Friday' && state.currentRoomSelection === 'all';

<Availability
  roomOptionsWithImages={roomOptionsWithImages}
  getIsDayBlocked={isDayBlocked}
  onChangeRoomDropdown={(evt, currentRoomValue) => state.currentRoomSelection = currentRoomValue}
/>
```

### Content

#### Strings

```jsx
<Availability
  roomOptionsWithImages={[{}]}
  headingText="Unavailability"
  legendLabel="Available"
  nextMonthsButtonLabel="Next months"
  previousMonthsButtonLabel="Previous months"
  propertyDropdownLabel="Houses"
  propertyDropdownPlaceholderLabel="View different house"
/>
```