```jsx
const { guestsOptions, locationOptions } = require('./mock-data/options');

<Footer
  guestsOptions={guestsOptions}
  locationOptions={locationOptions}
/>
```

### Variations

#### Custom Search Button

```jsx
const { Button } = require('../../elements/Button');
const { guestsOptions, locationOptions } = require('./mock-data/options');

<Footer
  guestsOptions={guestsOptions}
  locationOptions={locationOptions}
  searchButton={<Button>Search</Button>}
/>
```
