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
  pricePerPeriod: '',
  propertyAmenities: ['', ''],
  propertyName: 'placeholder',
  propertyType: '',
  propertyUrl: '',
  ratingNumber: 0,
};

const NUMBER_OF_PLACEHOLDERS = 6;

export const PLACEHOLDERS = Array(NUMBER_OF_PLACEHOLDERS).fill(
  PLACEHOLDER_DATA
);

export const NUMBER_OF_PROPERTIES_PER_PAGE = 12;
