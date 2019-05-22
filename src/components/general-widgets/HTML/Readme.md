```jsx
const {
  headings,
} = require('./mock-data/examples');

<HTML htmlString={headings} />
```

### Variations

#### Nesting

```jsx
<HTML htmlString="<h2>Inception Level 0 😱</h2><br />">
  <HTML htmlString="<h3>Inception Level 1 😱</h3><br />">
    <HTML htmlString="<h4>Inception Level 2 😱</h4><br />">
      <a href="https://en.wikipedia.org/wiki/Playtest_(Black_Mirror)" target="_blank">Headexplode!</a>
    </HTML>
  </HTML>
</HTML>
```

#### Image Nesting

```jsx
const { image, nestedImage, flexWrappedImage } = require('./mock-data/examples');

<HTML htmlString={image}>
  <HTML htmlString={nestedImage}>
    <HTML htmlString={flexWrappedImage}>
    </HTML>
  </HTML>
</HTML>
```
