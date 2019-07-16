```jsx
<SearchBar />
```

### Variations

#### Dropdowns open above

```jsx
<SearchBar
  willLocationDropdownOpenAbove={true}
/>
```

#### Fixed

```jsx
class Controller extends React.Component {

  constructor() {
    super()
    this.state = { isShowing: false }
  }

  render() {
    return (
      <React.Fragment>
        <Button
          isRounded
          onClick={
            () => this.setState({ isShowing: true})
          }
        >
          Show fixed search bar
        </Button>
        {this.state.isShowing && (
          <SearchBar
            isFixed={true}
          />
        )}
      </React.Fragment>
    )
  }
}

<Controller />
```

#### Modal

```jsx
<SearchBar
  isDisplayedAsModal
/>
```

#### Stackable

```jsx
const { locationOptions } = require('./mock-data/options');

<SearchBar
  isStackable
  locationOptions={locationOptions}
/>
```

### Content

#### Location dropdown

```jsx
const { locationOptions } = require('./mock-data/options');

<SearchBar
  locationOptions={locationOptions}
/>
```

#### Search button

```jsx
const { Button } = require('../../elements/Button');

<SearchBar
  searchButton={<Button>Custom!</Button>}
/>
```

#### Summary content

```jsx
class Controller extends React.Component {

  constructor() {
    super()
    this.state = { isShowing: false }
  }

  render() {
    return (
      <React.Fragment>
        <Button
          isRounded
          onClick={
            () => this.setState({ isShowing: true})
          }
        >
          Show fixed search bar
        </Button>
        {this.state.isShowing && (
          <SearchBar
            isFixed={true}
            summaryElement={
              <div>Property information</div>
            }
          />
        )}
      </React.Fragment>
    )
  }
}

<Controller />
```

#### Summary content in modal

```jsx
<SearchBar
  isDisplayedAsModal
  modalSummaryElement={
    <div>Property information</div>
  }
/>
```

#### Strings

```jsx
const { locationOptions } = require('./mock-data/options');

<SearchBar
  locationOptions={locationOptions}
  locationInputLabel="Places"
  guestsInputLabel="People"
  datesCheckInLabel="Arrival"
  datesCheckOutLabel="Departure"
/>
```
