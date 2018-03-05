```jsx
<Pagination totalPages={5} />
```

### Usage

#### Starting page

```jsx
<div>
  <div>
    <Pagination startingPage={1} totalPages={5} />
  </div>
  <div>
    <Pagination startingPage={3} totalPages={5} />
  </div>
  <div>
    <Pagination startingPage={5} totalPages={5} />
  </div>
</div>
```

#### Total pages

```jsx
<div>
  <div>
    <Pagination totalPages={5} />
  </div>
  <div>
    <Pagination totalPages={10} />
  </div>
  <div>
    <Pagination totalPages={15} />
  </div>
</div>
```

#### On page change

```jsx
const handlePageChange = (event, props) =>
  console.log(`Changed to page number ${props.activePage}`);

<Pagination onPageChange={handlePageChange} totalPages={5} />
```
