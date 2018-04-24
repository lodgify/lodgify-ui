```jsx
const { guestsOptions, locationOptions } = require('./mock-data/options');

<div style={{ height: 500 }}>
  <PropertyFooter
    guestsOptions={guestsOptions}
    locationOptions={locationOptions}
    isRelativeSticky
  />
</div>
```

### Variations

#### Fixed Sticky

```jsx
const { Button } = require('../../elements/Button');
const { guestsOptions, locationOptions } = require('./mock-data/options');

initialState = { isRelativeSticky: true };
<div>
  <div style={{ height: 40, width: '100%' }}>
    <Button onClick={() => {
      setState((prevState) => ({ isRelativeSticky: !state.isRelativeSticky }))
    }}>Toggle Relative Stacking</Button>
  </div>
  <div style={{ height: 200 }}>
    <PropertyFooter
      guestsOptions={guestsOptions}
      locationOptions={locationOptions}
      searchButton={<Button>Search</Button>}
      isRelativeSticky={state.isRelativeSticky}
    />
  </div>
</div>
```


#### Custom Search Button

```jsx
const { Button } = require('../../elements/Button');
const { guestsOptions, locationOptions } = require('./mock-data/options');

<div style={{ height: 100 }}>
  <PropertyFooter
    guestsOptions={guestsOptions}
    locationOptions={locationOptions}
    searchButton={<Button>🔍</Button>}
    isRelativeSticky
  />
</div>
```
