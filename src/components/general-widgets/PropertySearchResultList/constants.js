const PLACEHOLDER_DATA = {
  bathsNumber: 0,
  bathsText: '',
  bedroomsNumber: 0,
  bedroomsText: '',
  bedsNumber: 0,
  bedsText: '',
  guestsNumber: 0,
  guestsText: '',
  imageUrl: '',
  placeholderName: 'placeholder',
  pricePerPeriod: '',
  propertyAmenities: ['', ''],
  propertyName: '',
  propertyType: '',
  propertyUrl: '',
  ratingNumber: 0,
};

const NUMBER_OF_PLACEHOLDERS = 6;

export const PLACEHOLDERS = Array(NUMBER_OF_PLACEHOLDERS).fill(
  PLACEHOLDER_DATA
);
