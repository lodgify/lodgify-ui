```jsx
const { items } = require('./mock-data/items');
// [
//  { text: 'France', href: '#france' },
//  { text: 'Spain', href: '#espanya' },
//  { text: 'Germany', href: '#deutschland' },
//  { text: 'United Kingdom', href: '#unitedkingdom' },
// ]

<Submenu items={items}>Western Europe</Submenu>
```

### Variations

#### Searchable

```jsx
const items = [
 { text: 'France', value: 'france' },
 { text: 'Spain', value: 'espanya' },
 { text: 'Germany', value: 'deutschland' },
 { text: 'United Kingdom', value: 'unitedkingdom' },
];

class Controller extends React.Component {

  constructor () {
    super();
    this.state = { value: 'france' }
  }

  render () {
    return (
      <Submenu
        isSearchable
        items={items}
        noResultsText="Nothing found"
        onChange={({ value }) => this.setState({ value })}
        value={this.state.value}
      />
    );
  }
}

<Controller />
```

#### Label

```jsx
const items = [
  { text: 'EUR', value: 'eur', label: 'Euro' },
  { text: 'GBP', value: 'gbp', label: 'British Pound' },
  { text: 'USD', value: 'usd', label: 'US Dollar' },
  { text: 'ZAR', value: 'zar', label: 'South African Rand' },
];

<Submenu items={items}>EUR</Submenu>
```

