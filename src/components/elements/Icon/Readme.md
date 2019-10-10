```jsx
<Icon name="search" />
```

### Content

An icon can display a named svg from the Lodgify UI icon library or any valid svg path description.

```jsx
<Icon labelText="Using props.name" name="search" />
<Divider />
<Icon
  labelText="Using props.path"
  path="M9.67,13.55V12.49c0-2.11,3.48-3,3.48-4.66a1.73,1.73,0,0,0-1.89-1.48c-1.76,0-2.24,1.58-2.87,1L6.85,5.87a.45.45,0,0,1,0-.65A7.07,7.07,0,0,1,12,3c2.66,0,5.13,1.86,5.13,4.41,0,3.32-3.77,3.42-3.77,6.14a.48.48,0,0,1-.48.48h-2.7A.48.48,0,0,1,9.67,13.55Zm1.82,2.79a2.45,2.45,0,0,1,2.41,2.42,2.39,2.39,0,1,1-2.41-2.42Z"
/>
```

Library icons

```jsx
<Heading size="small">Arrows</Heading>

<Icon labelText="arrow down" name="arrow down" />
<Icon labelText="arrow left" name="arrow left" />
<Icon labelText="arrow right" name="arrow right" />
<Icon labelText="arrow up" name="arrow up" />
<Divider />
<Icon labelText="caret down" name="caret down" />
<Icon labelText="caret left" name="caret left" />
<Icon labelText="caret right" name="caret right" />
<Icon labelText="caret up" name="caret up" />
<Divider />
<Icon labelText="chevron right" name="chevron right" />
<Icon labelText="chevron left" name="chevron left" />
<Divider />

<Heading size="small">Interface actions</Heading>

<Icon labelText="bars" name="bars" />
<Divider />
<Icon labelText="checkmark" name="checkmark" />
<Divider />
<Icon labelText="checkmark circle" name="checkmark circle" />
<Divider />
<Icon labelText="close" name="close" />
<Divider />
<Icon labelText="info" name="info" />
<Divider />
<Icon labelText="list" name="list" />
<Divider />
<Icon labelText="minus" name="minus" />
<Divider />
<Icon labelText="placeholder" name="placeholder" />
<Divider />
<Icon labelText="plus" name="plus" />
<Divider />
<Icon labelText="question mark" name="question mark" />
<Divider />
<Icon labelText="search" name="search" />
<Divider />
<Icon labelText="spinner" name="spinner" />
<Divider />
<Icon labelText="square" name="square" />
<Divider />
<Icon labelText="star" name="star" />
<Divider />
<Icon labelText="users" name="users" />
<Divider />


<Heading size="small">Directions and transport</Heading>

<Icon labelText="bus" name="bus" />
<Divider />
<Icon labelText="location" name="location" />
<Divider />
<Icon labelText="map pin" name="map pin" />
<Divider />
<Icon labelText="plane" name="plane" />
<Divider />
<Icon labelText="road" name="road" />
<Divider />
<Icon labelText="train" name="train" />
<Divider />
<Icon labelText="underground" name="underground" />
<Divider />

<Heading size="small">Property features</Heading>

<Icon labelText="bathroom" name="bathroom" />
<Divider />
<Icon labelText="baby crib" name="baby crib" />
<Divider />
<Icon labelText="bedroom door" name="bedroom door" />
<Divider />
<Icon labelText="bed linen" name="bed linen" />
<Divider />
<Icon labelText="check in" name="check in" />
<Divider />
<Icon labelText="check out" name="check out" />
<Divider />
<Icon labelText="coffee" name="coffee" />
<Divider />
<Icon labelText="cooking" name="cooking" />
<Divider />
<Icon labelText="couch" name="couch" />
<Divider />
<Icon labelText="credit card" name="credit card" />
<Divider />
<Icon labelText="double bed" name="double bed" />
<Divider />
<Icon labelText="entertainment" name="entertainment" />
<Divider />
<Icon labelText="fire" name="fire" />
<Divider />
<Icon labelText="heating" name="heating" />
<Divider />
<Icon labelText="home" name="home" />
<Divider />
<Icon labelText="laundry" name="laundry" />
<Divider />
<Icon labelText="leaf" name="leaf" />
<Divider />
<Icon labelText="loft bed" name="loft bed" />
<Divider />
<Icon labelText="no children" name="no children" />
<Divider />
<Icon labelText="parking" name="parking" />
<Divider />
<Icon labelText="paw" name="paw" />
<Divider />
<Icon labelText="phone" name="phone" />
<Divider />
<Icon labelText="port" name="port" />
<Divider />
<Icon labelText="single bed" name="single bed" />
<Divider />
<Icon labelText="sun" name="sun" />
<Divider />
<Icon labelText="wheelchair" name="wheelchair" />
<Divider />
<Icon labelText="wifi" name="wifi" />
<Divider />

<Heading size="small">Scheduling</Heading>

<Icon labelText="calendar" name="calendar" />
<Divider />
<Icon labelText="clock" name="clock" />
<Divider />
<Icon labelText="guests" name="guests" />
<Divider />
<Icon labelText="phone" name="phone" />
<Divider />

<Heading size="small">Social media</Heading>

<Icon labelText="blog" name="blog" />
<Divider />
<Icon labelText="linkedin" name="linkedin" />
<Divider />
<Icon labelText="facebook" name="facebook" />
<Divider />
<Icon labelText="filter" name="filter" />
<Divider />
<Icon labelText="further info" name="further info" />
<Divider />
<Icon labelText="google plus" name="google plus" />
<Divider />
<Icon labelText="instagram" name="instagram" />
<Divider />
<Icon labelText="pinterest" name="pinterest" />
<Divider />
<Icon labelText="twitter" name="twitter" />
<Divider />
<Icon labelText="youtube" name="youtube" />
<Divider />
```

### States

#### Disabled

```jsx
<Icon isDisabled name="search" />
```

### Variations

#### Color

```jsx
<Icon color='black' />
<Icon color='black' isColorInverted />
<Icon color='grey' />
<Icon color='grey' isColorInverted />
<Icon color='light grey' />
<Icon color='light grey' isColorInverted />
<Divider />
<Icon color='red' />
<Icon color='red' isColorInverted />
<Icon color='orange' />
<Icon color='orange' isColorInverted />
<Icon color='yellow' />
<Icon color='yellow' isColorInverted />
<Divider />
<Icon color='olive' />
<Icon color='olive' isColorInverted />
<Icon color='green' />
<Icon color='green' isColorInverted />
<Icon color='teal' />
<Icon color='teal' isColorInverted />
<Divider />
<Icon color='blue' />
<Icon color='blue' isColorInverted />
<Icon color='violet' />
<Icon color='violet' isColorInverted />
<Icon color='purple' />
<Icon color='purple' isColorInverted />
<Divider />
<Icon color='pink' />
<Icon color='pink' isColorInverted />
<Icon color='brown' />
<Icon color='brown' isColorInverted />
```

#### Circular

```jsx
<Icon color='black' isCircular />
<Icon color='black' isCircular isColorInverted />
<Icon color='grey' isCircular />
<Icon color='grey' isCircular isColorInverted />
<Icon color='light grey' isCircular />
<Icon color='light grey' isCircular isColorInverted />
<Divider />
<Icon color='red' isCircular />
<Icon color='red' isCircular isColorInverted />
<Icon color='orange' isCircular />
<Icon color='orange' isCircular isColorInverted />
<Icon color='yellow' isCircular />
<Icon color='yellow' isCircular isColorInverted />
<Divider />
<Icon color='olive' isCircular />
<Icon color='olive' isCircular isColorInverted />
<Icon color='green' isCircular />
<Icon color='green' isCircular isColorInverted />
<Icon color='teal' isCircular />
<Icon color='teal' isCircular isColorInverted />
<Divider />
<Icon color='blue' isCircular />
<Icon color='blue' isCircular isColorInverted />
<Icon color='violet' isCircular />
<Icon color='violet' isCircular isColorInverted />
<Icon color='purple' isCircular />
<Icon color='purple' isCircular isColorInverted />
<Divider />
<Icon color='pink' isCircular />
<Icon color='pink' isCircular isColorInverted />
<Icon color='brown' isCircular />
<Icon color='brown' isCircular isColorInverted />
```

#### Bordered

```jsx
<Icon hasBorder name="credit card" labelText="Credit card" />
```

#### Labeled

```jsx
<Icon labelText="Search" name="search" />
<Divider />
<Icon isDisabled labelText="Search" name="search" />
<Divider />
<Icon isLabelLeft labelText="Search" name="search" />
```

#### Size

```jsx
<Icon labelText="Mini" size="mini" />
<Divider />
<Icon labelText="Tiny" size="tiny" />
<Divider />
<Icon labelText="Small" size="small" />
<Divider />
<Icon labelText="Default" />
<Divider />
<Icon labelText="Large" size="large" />
<Divider />
<Icon labelText="Big" size="big" />
<Divider />
<Icon labelText="Huge" size="huge" />
<Divider />
<Icon labelText="Massive" size="massive" />
```
