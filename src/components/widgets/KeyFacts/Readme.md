```jsx
const { keyFacts } = require('./mock-data/keyFacts');

<Grid>
  <GridRow>
    <KeyFacts keyFacts={keyFacts} />
  </GridRow>
</Grid>
```

### Variations

#### Width

```jsx
const { keyFacts } = require('./mock-data/keyFacts');

<Grid>
  <GridRow>
    <KeyFacts keyFacts={keyFacts} />
  </GridRow>
  <Divider hasLine />
  <GridRow>
    <KeyFacts keyFacts={keyFacts} width={6} />
  </GridRow>
</Grid>
```
