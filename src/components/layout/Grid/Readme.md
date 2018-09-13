```jsx
<Grid>
 <GridRow>
   <GridColumn width={6}>
     🔴 🔴 ⚪️ ⚪️<br />
     🔴 🔴 ⚪️ ⚪️<br />
     ⚪️ ⚪️ ⚪️ ⚪️<br />
     ⚪️ ⚪️ ⚪️ ⚪️<br />
   </GridColumn>
   <GridColumn width={6}>
     ⚪️ ⚪️ 🔴 🔴<br />
     ⚪️ ⚪️ 🔴 🔴<br />
     ⚪️ ⚪️ ⚪️ ⚪️<br />
     ⚪️ ⚪️ ⚪️ ⚪️<br />
   </GridColumn>
 </GridRow>
 <GridRow>
   <GridColumn width={6}>
     ⚪️ ⚪️ ⚪️ ⚪️<br />
     ⚪️ ⚪️ ⚪️ ⚪️<br />
     🔴 🔴 ⚪️ ⚪️<br />
     🔴 🔴 ⚪️ ⚪️<br />
   </GridColumn>
   <GridColumn width={6}>
     ⚪️ ⚪️ ⚪️ ⚪️<br />
     ⚪️ ⚪️ ⚪️ ⚪️<br />
     ⚪️ ⚪️ 🔴 🔴<br />
     ⚪️ ⚪️ 🔴 🔴<br />
   </GridColumn>
 </GridRow>
</Grid>
```

### Variations

#### Columns have a fixed width

Using the prop `hasFixedWidth` will ensure the grid columns will remain their defined 
width and not expand to fill the extra whitespace

```jsx
// Change this value to see the impact of the `hasFixedWidth` prop
const hasFixedWidth = true;

<Grid hasFixedWidth={hasFixedWidth}>
  <GridColumn width={4}>
    🔴 🔴 ⚪️ ⚪️<br />
    🔴 🔴 ⚪️ ⚪️<br />
    ⚪️ ⚪️ ⚪️ ⚪️<br />
    ⚪️ ⚪️ ⚪️ ⚪️<br />
  </GridColumn>
  <GridColumn width={4}>
    ⚪️ ⚪️ 🔴 🔴<br />
    ⚪️ ⚪️ 🔴 🔴<br />
    ⚪️ ⚪️ ⚪️ ⚪️<br />
    ⚪️ ⚪️ ⚪️ ⚪️<br />
  </GridColumn>
  <GridColumn width={4}>
    ⚪️ ⚪️ ⚪️ ⚪️<br />
    ⚪️ ⚪️ ⚪️ ⚪️<br />
    🔴 🔴 ⚪️ ⚪️<br />
    🔴 🔴 ⚪️ ⚪️<br />
  </GridColumn>
  <GridColumn width={4}>
    ⚪️ ⚪️ ⚪️ ⚪️<br />
    ⚪️ ⚪️ ⚪️ ⚪️<br />
    🔴 🔴 ⚪️ ⚪️<br />
    🔴 🔴 ⚪️ ⚪️<br />
  </GridColumn>
  <GridColumn width={4}>
    ⚪️ ⚪️ ⚪️ ⚪️<br />
    ⚪️ ⚪️ ⚪️ ⚪️<br />
    ⚪️ ⚪️ 🔴 🔴<br />
    ⚪️ ⚪️ 🔴 🔴<br />
  </GridColumn>
</Grid>
```
