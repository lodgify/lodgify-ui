```jsx
<Button>Submit</Button>
```

### States

#### Loading

```jsx
<Button isLoading>
  Submit
</Button>
```


#### Disabled

```jsx
<Button isDisabled>
  Submit
</Button>
```

### Variations

#### Secondary

```jsx
<Button isSecondary>
  Submit
</Button>
```

#### Icon

```jsx
<div>
  <Button icon="world">
    Submit
  </Button>
  <Button icon={<span>🌐</span>}>
    Submit
  </Button>
</div>
```

#### Rounded

```jsx
<Button isRounded>
  Submit
</Button>
```

#### Shadow

```jsx
<Button hasShadow>
  Submit
</Button>
```

#### Size

```jsx
<Grid>
    <GridRow>
      <GridColumn width={12}>
        <Button size="massive">Massive</Button>
        <Button size="huge">Huge</Button>
        <Button size="big">Big</Button>
      </GridColumn>
      <GridColumn width={12}>
        <Divider />
      </GridColumn>
      <GridColumn width={12}>
        <Button size="large">Large</Button>
        <Button size="medium">Medium</Button>
        <Button size="small">Small</Button>
      </GridColumn>
      <GridColumn width={12}>
        <Divider />
      </GridColumn>
      <GridColumn width={12}>
        <Button size="mini">Mini</Button>
        <Button size="tiny">Tiny</Button>
      </GridColumn>
  </GridRow>
</Grid>
```
