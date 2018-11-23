```jsx
const { 
  guestTypeOptions, 
  monthOptions, 
  propertyOptions,
  yearOptions, 
  } = require('./mock-data/options');
const ratingAverage = 4.4;
const reviews = [
  {
    ratingNumber: 3,
    reviewerCategory: 'Young people',
    reviewerLocation: 'Lithuania',
    reviewerName: 'Magellan',
    reviewerStayDate: '9/2015',
    reviewText:
      'Beautifully located and well-kept villas in Santorini. Would certainly come back next year.',
    reviewTitle: 'Great accommodation! Honorable host.',
    reviewResponse: {
      dateTime: '10/14/2015 12:22:58 PM',
      source: 'The Owner',
      text:
        'You can also personally respond to each review: Thanks for you kind review, James! Hope to welcome you back soon!',
    },
  },
];

<Reviews 
  guestTypeOptions={guestTypeOptions}
  monthOptions={monthOptions}
  propertyOptions={propertyOptions}
  ratingAverage={ratingAverage} 
  reviews={reviews}
  yearOptions={yearOptions}
/>;
```

### Content

#### Strings

```jsx
const { 
  guestTypeOptions,
  monthOptions,
  propertyOptions,
  yearOptions,
  } = require('./mock-data/options');
const ratingAverage = 4.4;
const reviews = [
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

<Reviews
  apartmentInputLabel="appartment"
  commentInputLabel="How did it go?"
  emailInputLabel="email"
  formHeadingText="Tell us"
  guestTypeInputLabel="guest" 
  guestTypeOptions={guestTypeOptions}
  headingText="Write your review" 
  locationInputLabel="loaction"
  monthInputLabel="month"
  monthOptions={monthOptions}
  nameInputLabel="name"
  propertyOptions={propertyOptions}
  ratingAverage={ratingAverage}
  ratingInputLabel="Input your rating"
  reviews={reviews}
  submitButtonText="Submit"
  titleInputLabel="title"
  yearInputLabel="year"
  yearOptions={yearOptions}
/>;
```

### Usage

#### Validation

```jsx
const { 
  guestTypeOptions,
  monthOptions,
  propertyOptions,
  yearOptions,
  } = require('./mock-data/options');
const ratingAverage = 4.4;
const reviews = [
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
const validation = {
  comments: { isRequired: true },
  name: { isRequired: true },
  rating: { isRequired: true },
  title: { isRequired: true },
};

<Reviews 
  guestTypeOptions={guestTypeOptions}
  monthOptions={monthOptions}
  propertyOptions={propertyOptions}
  ratingAverage={ratingAverage}
  reviews={reviews}
  validation={validation}
  yearOptions={yearOptions}
/>;
```

### States

#### Success

```jsx
const { 
  guestTypeOptions,
  monthOptions,
  propertyOptions,
  yearOptions,
  } = require('./mock-data/options');
const ratingAverage = 4.4;
const reviews = [
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

<Reviews 
  guestTypeOptions={guestTypeOptions}
  monthOptions={monthOptions}
  propertyOptions={propertyOptions}
  ratingAverage={ratingAverage} 
  reviews={reviews}
  successMessage="The contact form has been submitted."
  yearOptions={yearOptions}
/>;
```

#### Error

```jsx
const { 
  guestTypeOptions,
  monthOptions,
  propertyOptions,
  yearOptions,
  } = require('./mock-data/options');
const ratingAverage = 4.4;
const reviews = [
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

<Reviews
  errorMessage="Request Failed. Please try again."
  guestTypeOptions={guestTypeOptions}
  monthOptions={monthOptions}
  propertyOptions={propertyOptions}
  ratingAverage={ratingAverage} 
  reviews={reviews}
  yearOptions={yearOptions}
/>;
```
