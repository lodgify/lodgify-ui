```jsx
import { SearchBar } from '@lodgify/ui';

<SearchBar />
```

### Variations

#### Dropdowns open above

```jsx
import { SearchBar } from '@lodgify/ui';

<SearchBar willLocationDropdownOpenAbove={true} />
```

#### Fixed

```jsx
import { SearchBar, Button } from '@lodgify/ui';

class Controller extends React.Component {
  constructor() {
    super();
    this.state = { isShowing: false };
  }

  render() {
    return (
      <React.Fragment>
        <Button isRounded onClick={() => this.setState({ isShowing: true })}>
          Show fixed search bar
        </Button>
        {this.state.isShowing && <SearchBar isFixed={true} />}
      </React.Fragment>
    );
  }
}

<Controller />;
```

#### Modal

```jsx
import { SearchBar } from '@lodgify/ui';

<SearchBar isDisplayedAsModal />
```

#### Stackable

```jsx
import { SearchBar } from '@lodgify/ui';

const { locationOptions } = require('./mock-data/options');

<SearchBar
  isStackable
  onChangeInput={console.log}
  locationOptions={locationOptions}
/>;
```

### Content

#### Location dropdown

```jsx
import { SearchBar } from '@lodgify/ui';

const { locationOptions } = require('./mock-data/options');

<SearchBar locationOptions={locationOptions} />;
```

#### Search button

```jsx
import { SearchBar, Button } from '@lodgify/ui';

<SearchBar searchButton={<Button>Custom!</Button>} />;
```

#### Summary content

```jsx
import { SearchBar, Button } from '@lodgify/ui';

class Controller extends React.Component {
  constructor() {
    super();
    this.state = { isShowing: false };
  }

  render() {
    return (
      <React.Fragment>
        <Button isRounded onClick={() => this.setState({ isShowing: true })}>
          Show fixed search bar
        </Button>
        {this.state.isShowing && (
          <SearchBar
            isFixed={true}
            summaryElement={<div>Property information</div>}
          />
        )}
      </React.Fragment>
    );
  }
}

<Controller />;
```

#### Summary content in modal

```jsx
import { SearchBar } from '@lodgify/ui';

<SearchBar
  isDisplayedAsModal
  modalSummaryElement={<div>Property information</div>}
/>
```

#### Strings

```jsx
import { SearchBar } from '@lodgify/ui';

const { locationOptions } = require('./mock-data/options');

<SearchBar
  locationOptions={locationOptions}
  locationInputLabel="Places"
  guestsInputLabel="People"
  datesCheckInLabel="Arrival"
  datesCheckOutLabel="Departure"
/>;
```
