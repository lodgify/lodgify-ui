import React from 'react';
import { shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as PropertySearchResult } from './component';

const propertyAmenities = ['Pool', 'Wifi', 'Washer', 'Kitchen'];

const props = {
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
  pricePerPeriod: '$280',
  propertyAmenities,
  propertyName: 'The Cat House',
  propertyType: 'Bed and breakfast',
  propertyUrl: '/',
  ratingNumber: 4.7,
};

const getPropertySearchResult = extraProps =>
  shallow(<PropertySearchResult {...props} {...extraProps} />);

describe('<PropertySearchResult />', () => {
  it('should render the right structure', () => {
    const actual = getPropertySearchResult();

    expect(actual).toMatchSnapshot();
  });

  describe('if `periodText` is a truthy value', () => {
    it('should render the right structure', () => {
      const actual = getPropertySearchResult({ periodText: '(ºOº)' });

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have `displayName` `PropertySearchResult`', () => {
    expectComponentToHaveDisplayName(
      PropertySearchResult,
      'PropertySearchResult'
    );
  });

  describe('if `props.isShowingPlaceholder` is passed', () => {
    it('should return the right structure', () => {
      const actual = getPropertySearchResult({ isShowingPlaceholder: true });

      expect(actual).toMatchSnapshot();
    });
  });
});
