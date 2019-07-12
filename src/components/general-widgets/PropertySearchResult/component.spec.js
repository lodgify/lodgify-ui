import React from 'react';
import { shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { getToggledIsActiveState } from 'utils/get-toggled-is-active-state';

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
  priceLabelPeriodText: 'some priceLabelPeriodText',
  priceLabelPricePerPeriod: 'some priceLabelPricePerPeriod',
  priceLabelPricePerPeriodPrefix: 'some priceLabelPricePerPeriodPrefix',
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

  describe('componentDidUpdate', () => {
    describe('if `state.isActive` has not changed', () => {
      it('should not call `props.onChange`', () => {
        const onChange = jest.fn();
        const wrapper = getPropertySearchResult({ onChange });

        wrapper.instance().componentDidUpdate({}, { isActive: false });

        expect(onChange).not.toHaveBeenCalled();
      });
    });

    describe('if `state.isActive` has changed', () => {
      it('should call `props.onChange` with the right arguments', () => {
        const name = 'Bill';
        const onChange = jest.fn();
        const wrapper = getPropertySearchResult({ name, onChange });

        wrapper.instance().componentDidUpdate({}, { isActive: true });

        expect(onChange).toHaveBeenCalledWith(name, false);
      });
    });
  });

  describe('toggleActive', () => {
    it('should call `setState` with the right arguments', () => {
      const wrapper = getPropertySearchResult();

      wrapper.instance().setState = jest.fn();
      wrapper.update();
      wrapper.instance().toggleActive();

      expect(wrapper.instance().setState).toHaveBeenCalledWith(
        getToggledIsActiveState
      );
    });
  });

  describe('if `props.isCompact` is passed', () => {
    it('should return the right structure', () => {
      const actual = getPropertySearchResult({ isCompact: true });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.isShowingPlaceholder` is passed', () => {
    it('should return the right structure', () => {
      const actual = getPropertySearchResult({ isShowingPlaceholder: true });

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have `displayName` `PropertySearchResult`', () => {
    expectComponentToHaveDisplayName(
      PropertySearchResult,
      'PropertySearchResult'
    );
  });
});
