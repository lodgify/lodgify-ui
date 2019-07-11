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
