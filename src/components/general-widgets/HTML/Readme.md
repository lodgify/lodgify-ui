```jsx
const { headings } = require('./mock-data/examples');

<HTML htmlString={headings} />;
```

### Table

```jsx
const tableText = `
  <table>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
    <tr>
      <td>Content 1</th>
      <td>Content 2</th>
    </tr>
  </table>
`;

<HTML htmlString={tableText} />;
```

### Variations

#### Nesting

```jsx
<HTML htmlString="<h2>Inception Level 0 😱</h2><br />">
  <HTML htmlString="<h3>Inception Level 1 😱</h3><br />">
    <HTML htmlString="<h4>Inception Level 2 😱</h4><br />">
      <a
        href="https://en.wikipedia.org/wiki/Playtest_(Black_Mirror)"
        target="_blank"
      >
        Headexplode!
      </a>
    </HTML>
  </HTML>
</HTML>
```

#### Image Nesting

```jsx
const {
  image,
  nestedImage,
  flexWrappedImage,
} = require('./mock-data/examples');

<HTML htmlString={image}>
  <HTML htmlString={nestedImage}>
    <HTML htmlString={flexWrappedImage}></HTML>
  </HTML>
</HTML>;
```
