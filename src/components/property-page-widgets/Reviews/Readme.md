```jsx
const ratingAverage = 4;
const reviews = [
  {
    ratingNumber: 4.5,
    reviewerCategory: 'Young people',
    reviewerLocation: 'Lithuania',
    reviewerName: 'Magellan',
    reviewerStayDate: '9/2015',
    reviewResponse: {
      dateTime: '10/14/2015 12:22:58 PM',
      source: 'The Owner',
      text:
        'You can also personally respond to each review: Thanks for you kind review, James! Hope to welcome you back soon!',
    },
    reviewText:
      'Beautifully located and well-kept villas in Santorini. Would certainly come back next year.',
    reviewTitle: 'Great accommodation! Honorable host.',
  },
  {
    ratingNumber: 3,
    reviewerCategory: 'Young people',
    reviewerLocation: 'Lithuania',
    reviewerName: 'Magellan',
    reviewerStayDate: '9/2015',
    reviewText:
      'Beautifully located and well-kept villas in Santorini. Would certainly come back next year.',
    reviewTitle: 'Great accommodation! Honorable host.',
  },
];

<Reviews ratingAverage={ratingAverage} reviews={reviews} />;
```
