```jsx
<Grid>
  <GridRow>
    <GridColumn width={6}>I'll always show</GridColumn>
    <ShowOnDesktop parent={GridColumn} parentProps={{ width: 6 }}>
      I only show on large screens
    </ShowOnDesktop>
  </GridRow>
</Grid>
```
