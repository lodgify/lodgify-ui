```jsx
const { sleepingArrangements } = require('./mock-data/sleepingArrangements');

<SleepingArrangements sleepingArrangements={sleepingArrangements} />
```

### Variations

#### Width

```jsx
const { sleepingArrangements } = require('./mock-data/sleepingArrangements');

<Grid>
  <GridRow>
    <GridColumn>
      <SleepingArrangements sleepingArrangements={sleepingArrangements} />
    </GridColumn>
  </GridRow>
  <Divider hasLine />
  <GridRow>
    <GridColumn>
      <SleepingArrangements sleepingArrangements={sleepingArrangements} width={6} />
    </GridColumn>
  </GridRow>
</Grid>
```
