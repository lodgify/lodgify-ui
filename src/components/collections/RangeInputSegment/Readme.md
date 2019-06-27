```jsx
<RangeInputSegment
  description="Only show properties with prices between:"
  heading="Price Range"
  initialValue={[0, 500]}
  domain={[0, 700]}
  renderValue={value => `€${value}`}
/>
```