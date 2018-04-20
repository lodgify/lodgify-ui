```jsx
<Grid>
  <GridRow>
    <GridColumn width={6}>I'll always show</GridColumn>
    <ShowOnMobile parent={GridColumn} parentProps={{ width: 6 }}>
      I only show on mobile devices
    </ShowOnMobile>
  </GridRow>
</Grid>
```
