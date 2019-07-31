```jsx
<GoogleMap
  latitude={41.387863}
  longitude={2.158105}
/>
```

### Variations

#### Height

```jsx
<GoogleMap
  height="100px"
  latitude={41.387863}
  longitude={2.158105}
/>
<Divider />
<GoogleMap
  height="200px"
  latitude={41.387863}
  longitude={2.158105}
/>
<Divider />
<GoogleMap
  height="300px"
  latitude={41.387863}
  longitude={2.158105}
/>
```

#### Default styles

```jsx
<GoogleMap
  hasDefaultStyles
  latitude={41.387863}
  longitude={2.158105}
/>
```

#### Fluid

A fluid map appears on a card filling the width and height of its container. It is always dynamic.

```jsx
<div style={{ height: '80vh' }}>
  <GoogleMap
    isFluid
    latitude={41.387863}
    longitude={2.158105}
  />
</div>
```

#### Full bleed

A full bleed map appears with no card and fills the width and height of its container. It is always dynamic.

```jsx
<div style={{ height: '80vh' }}>
  <GoogleMap
    isFullBleed
    latitude={41.387863}
    longitude={2.158105}
  />
</div>
```

### Usage

#### Exact location

An exact marker at the center of the map. Shows on both the static and dynamic map.

```jsx
<GoogleMap
  isShowingExactLocation
  latitude={41.387863}
  longitude={2.158105}
/>
```

#### Approximate location

An approximate marker at the center of the map. Shows on both the static and dynamic map.

```jsx
<GoogleMap
  isShowingApproximateLocation
  latitude={41.387863}
  longitude={2.158105}
/>
```

#### Multiple markers

Multiple markers show on the dynamic map only.

```jsx
<div style={{ height: '400px' }}>
  <GoogleMap
    isFluid
    latitude={41.387863}
    longitude={2.158105}
    markers={[
      { component: <Marker />, latitude: 41.38, longitude: 2.15 },
      { component: <Marker />, latitude: 41.375, longitude: 2.16 },
      { component: <Marker />, latitude: 41.39, longitude: 2.18 },
      { component: <Marker />, latitude: 41.388, longitude: 2.13 },
      { component: <Marker />, latitude: 41.395, longitude: 2.145 },
      { component: <Marker />, latitude: 41.398, longitude: 2.155 }
    ]}
  />
</div>
```

#### Offset markers

Markers can be offset for more precision.

```jsx
<div style={{ height: '400px' }}>
  <GoogleMap
    isFluid
    latitude={41}
    longitude={2}
    markers={[
      { component: <Marker />, latitude: 41, longitude: 2 },
      {
        component: <Marker />,
        getOffset: (markerPixelWidth, markerPixelHeight) =>
          ({ x: markerPixelWidth , y: 0 }),
        latitude: 41,
        longitude: 2,
      },
      {
        component: <Marker />,
        getOffset: (markerPixelWidth, markerPixelHeight) =>
          ({ x: 0 , y: markerPixelHeight }),
        latitude: 41,
        longitude: 2,
      },
      {
        component: <Marker />,
        getOffset: (markerPixelWidth, markerPixelHeight) =>
          ({ x: -markerPixelWidth , y: 0 }),
        latitude: 41,
        longitude: 2,
      },
      {
        component: <Marker />,
        getOffset: (markerPixelWidth, markerPixelHeight) =>
          ({ x: 0 , y: -markerPixelHeight }),
        latitude: 41,
        longitude: 2,
      },
    ]}
  />
</div>
```

#### Bounds

The bounds of the map can be controlled.

```jsx
const boundsOne = {
  east: 2.18,
  north: 41.38,
  south: 41.37,
  west: 2.15
};

const boundsTwo = {
  east: 2.83,
  north: 41.98,
  south: 41.97,
  west: 2.8
};

class Controller extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ height: 400, marginBottom: 20 }}>
          <GoogleMap
            bounds={this.state.isBoundsOne ? boundsOne : boundsTwo}
            isFluid
            onBoundsChange={console.log}
          />
        </div>
        <Button
          onClick={() => this.setState({ isBoundsOne: !this.state.isBoundsOne})}
        >
          Change bounds
        </Button>
      </React.Fragment>
    )
  }
}

<Controller />
```
