```jsx
const ratingNumber = 4;
const reviewerCategory = 'Young couple';
const reviewerLocation = 'Portugal';
const reviewerName = 'Magellan';
const reviewerStayDate = '9/2015';
const reviewResponse = {
  dateTime: '10/14/2015 12:22:58 PM',
  source: 'The Owner',
  text:
    'You can also personally respond to each review: Thanks for you kind review, James! Hope to welcome you back soon!',
};
const reviewText =
  'Beautifully located and well-kept villas in Santorini. Would certainly come back next year.';
const reviewTitle = 'Great accommodation! Honorable host.';

<Review
  ratingNumber={ratingNumber}
  reviewerCategory={reviewerCategory}
  reviewerLocation={reviewerLocation}
  reviewerName={reviewerName}
  reviewerStayDate={reviewerStayDate}
  reviewResponse={reviewResponse}
  reviewText={reviewText}
  reviewTitle={reviewTitle}
/>;
```

### States

#### Showing placeholder

```jsx
<Review
  isShowingPlaceholder
  ratingNumber={0}
  reviewerCategory=""
  reviewerLocation=""
  reviewerName=""
  reviewerStayDate=""
  reviewText=""
  reviewTitle=""
/>
```
