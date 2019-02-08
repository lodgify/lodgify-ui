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

#### Wrong HTML

```jsx
const {
  malformedTable,
  malformedQuotes,
  malformedAttack,
} = require('./mock-data/examples');

<div>
  {/* <TABLE><tr><td>Malformed Table 😱😱😱😱😱😱</tr></TABL> */}
  <HTML htmlString={malformedTable} />
  {/*
    <UL style="list-style-type: none;margin: 0;padding: 0;">
      <li>
        <A HREF=//lodgify.com>Malformed Link 😱😱😱😱😱😱
    </UL>
  */}
  <HTML htmlString={malformedQuotes} />
  {/* <p>Mal<iframe/\/src=jAva&Tab;script:alert(3)>formed text */}
  <HTML htmlString={malformedAttack} />
</div>
```
