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

```jsx
<GoogleMap
  isShowingExactLocation
  latitude={41.387863}
  longitude={2.158105}
/>
```

#### Approximate location

```jsx
<GoogleMap
  isShowingApproximateLocation
  latitude={41.387863}
  longitude={2.158105}
/>
```
