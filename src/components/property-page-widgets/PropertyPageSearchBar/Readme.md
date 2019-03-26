```jsx
const { guestsOptions } = require('./mock-data/options');

class Controller extends React.Component {
  constructor() {
    this.state = {
      isShowing: false
    };
  }

  render() {
    const { isShowing } = this.state;

    return (
      <React.Fragment>
        <Button onClick={() => this.setState({ isShowing: !this.state.isShowing })}>
          {isShowing ? 'Hide' : 'Show'} search bar
        </Button>
        {isShowing && (
          <PropertyPageSearchBar
            guestsOptions={guestsOptions}
            searchButton={<Button isCompact isRounded>Check Availability</Button>}
            summaryElement={<div>Property Information</div>}
            modalTrigger={<Button isPositionedRight isRounded isCompact>Check Availability</Button>}
            modalSummaryElement={<div>Property information for mobile modal</div>}
            summaryLocationName="Barcelona"
            summaryPricePerPeriod="$200"
            summaryPropertyName="Property"
            summaryRatingNumber={2.3}
          />
        )}
      </React.Fragment>
    )
  }
}

<Controller />
```

### States

#### Showing placeholders

```jsx
const { guestsOptions } = require('./mock-data/options');

class Controller extends React.Component {
  constructor() {
    this.state = {
      isShowing: false
    };
  }

  render() {
    const { isShowing } = this.state;

    return (
      <React.Fragment>
        <Button onClick={() => this.setState({ isShowing: !this.state.isShowing })}>
          {isShowing ? 'Hide' : 'Show'} search bar
        </Button>
        {isShowing && (
          <PropertyPageSearchBar
            guestsOptions={guestsOptions}
            searchButton={<Button isCompact isRounded>Check Availability</Button>}
            summaryElement={<div>Property Information</div>}
            modalTrigger={<Button isPositionedRight isRounded isCompact>Check Availability</Button>}
            modalSummaryElement={<div>Property information for mobile modal</div>}
            summaryLocationName="Barcelona"
            summaryPropertyName="Property"
            isShowingPlaceholder
          />
        )}
      </React.Fragment>
    )
  }
}

<Controller />
```
