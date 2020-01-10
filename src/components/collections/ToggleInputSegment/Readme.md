```jsx
import { ToggleInputSegment } from '@lodgify/ui';

<ToggleInputSegment 
  heading={"Instant Booking"}
/>
```

### Variations

#### Controlled

```jsx
import { ToggleInputSegment } from '@lodgify/ui';

class Controller extends React.Component {
  constructor() {
    super();
    this.state = { isChecked: true };
  };

  handleClick(event, isChecked) {
    console.log('Check yourself before you');
  };

  render() {
    return (
      <ToggleInputSegment 
        heading={"Instant Booking"}
        onClick={this.handleClick}
        isToggleChecked={this.state.isChecked}
      />
    );
  }
}

<Controller />
```

### Content

#### Description
```jsx
import { ToggleInputSegment } from '@lodgify/ui';

<ToggleInputSegment 
  description={"Properties that can be booked without approval of the owner"}
  heading={"Instant Booking"}
/>
```