export const propertySearchResults = [
  {
    bathsNumber: 2,
    bathsText: 'baths',
    bedroomsNumber: 2,
    bedroomsText: 'bedrooms',
    bedsNumber: 2,
    bedsText: 'beds',
    guestsNumber: 2,
    guestsText: 'guests',
    imageUrl:
      'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    priceLabelPricePerPeriod: '$28000',
    priceLabelPeriodText: 'per month',
    priceLabelPricePerPeriodPrefix: 'from',
    propertyAmenities: ['Pool', 'Wifi', 'Washer', 'Kitchen'],
    propertyName: 'The Cat House',
    propertyType: 'Bed and breakfast',
    propertyUrl: '/',
    ratingNumber: 4.7,
  },
  {
    bathsNumber: 1,
    bathsText: 'baths',
    bedroomsNumber: 2,
    bedroomsText: 'bedrooms',
    bedsNumber: 3,
    bedsText: 'beds',
    guestsNumber: 4,
    guestsText: 'guests',
    imageUrl:
      'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    priceLabelPricePerPeriod: '$1280',
    propertyAmenities: ['Pool', 'Wifi', 'Washer', 'Kitchen'],
    propertyName: 'Space Hub A-675',
    propertyType: 'Space Station',
    propertyUrl: '/',
    ratingNumber: 4.7,
  },
];

export const moreThan12PropertySearchResults = new Array(13).fill(
  propertySearchResults[0]
);
