import React from 'react';
import { shallow } from 'enzyme';
import { Segment, Rating } from 'semantic-ui-react';
import {
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Icon } from 'elements/Icon';

import { getNightPriceRatingAndLocationMarkup } from './getNightPriceRatingAndLocationMarkup';

const props = {
  ratingNumber: 90,
  nightPrice: '280$',
  locationName: 'someLocation',
};

const getMarkupAsRenderedComponent = () =>
  shallow(
    <div>
      {getNightPriceRatingAndLocationMarkup(
        props.ratingNumber,
        props.nightPrice,
        props.locationName
      )}
    </div>
  );

describe('getNightPriceRatingAndLocationMarkup', () => {
  it('should return the right children', () => {
    const wrapper = getMarkupAsRenderedComponent();

    expectComponentToHaveChildren(wrapper, Segment, Segment, Segment);
  });

  describe('the first `Segment` component', () => {
    it('should have the right children', () => {
      const wrapper = getMarkupAsRenderedComponent()
        .find(Segment)
        .at(0);

      expectComponentToHaveChildren(wrapper, props.locationName, Icon);
    });
  });

  describe('the second `Segment` component', () => {
    it('should have the right children', () => {
      const wrapper = getMarkupAsRenderedComponent()
        .find(Segment)
        .at(1);

      expectComponentToHaveChildren(
        wrapper,
        props.ratingNumber.toString(),
        Rating
      );
    });
  });

  describe('the `Rating` component', () => {
    it('should have the right props', () => {
      const wrapper = getMarkupAsRenderedComponent().find(Rating);

      expectComponentToHaveProps(wrapper, {
        disabled: true,
        maxRating: 5,
        rating: props.ratingNumber,
        size: 'tiny',
      });
    });
  });

  describe('the third `Segment` component', () => {
    it('should have the right children', () => {
      const wrapper = getMarkupAsRenderedComponent()
        .find(Segment)
        .at(2);

      expectComponentToHaveChildren(wrapper, 'span');
    });
  });
});
