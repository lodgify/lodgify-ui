```jsx
const { sleepingArrangements } = require('./mock-data/sleepingArrangements');

<Grid>
  <GridRow>
    <SleepingArrangements sleepingArrangements={sleepingArrangements} />
  </GridRow>
</Grid>
```

### Variations

#### Width

```jsx
const { sleepingArrangements } = require('./mock-data/sleepingArrangements');

<Grid>
  <GridRow>
    <SleepingArrangements sleepingArrangements={sleepingArrangements} />
  </GridRow>
  <Divider hasLine />
  <GridRow>
    <SleepingArrangements sleepingArrangements={sleepingArrangements} width={6} />
  </GridRow>
</Grid>
```
