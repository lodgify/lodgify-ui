```jsx
<Grid>
  <GridRow>
    <GridColumn width={6}>
      <Paragraph>I'll always show 📯</Paragraph>
      <Button isRounded>Submit Button</Button>
    </GridColumn>
  </GridRow>
  <GridRow>
    <GridColumn>
      <Paragraph>I'll show on Mobile</Paragraph>
      <ShowOn parent={GridColumn} parentProps={{ width: 6 }} mobile>
        <Button isRounded>Mobile Only</Button>
      </ShowOn>
    </GridColumn>
  </GridRow>
  <GridRow>
    <GridColumn>
      <Paragraph>I'll show on Mobile and Widescreen</Paragraph>
      <ShowOn parent={GridColumn} parentProps={{ width: 6 }} mobile widescreen>
        <Button isRounded>Mobile & Widescreen</Button>
      </ShowOn>
    </GridColumn>
  </GridRow>
    <GridColumn>
      <Paragraph>I'll show on computer and Mobile</Paragraph>
      <ShowOn parent={GridColumn} parentProps={{ width: 6 }} computer mobile>
        <Button isRounded>Computer & Mobile</Button>
      </ShowOn>
    </GridColumn>
  <GridRow>
    <GridColumn>
      <Paragraph>I'll show on Tablet, computer and Widescreen</Paragraph>
      <ShowOn parent={GridColumn} parentProps={{ width: 6 }} tablet computer widescreen>
        <Button isRounded>Tablet & Computer & Widescreen</Button>
      </ShowOn>
    </GridColumn>
  </GridRow>
  <GridRow>
    <GridColumn>
      <Paragraph>I'll show on Mobile, Tablet and Widescreen</Paragraph>
      <ShowOn parent={GridColumn} parentProps={{ width: 6 }} mobile tablet widescreen>
        <Button isRounded>Mobile & Tablet & Widescreen</Button>
      </ShowOn>
    </GridColumn>
  </GridRow>
</Grid>
```
