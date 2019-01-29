import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Review } from './component';

const requiredProps = {
  ratingNumber: 4,
  reviewerCategory: 'someCategory',
  reviewerLocation: 'someLocation',
  reviewerName: 'someName',
  reviewerStayDate: 'someDate',
  reviewText: 'someText',
  reviewTitle: 'someTitle',
};

const getReview = additionalProps =>
  mount(<Review {...requiredProps} {...additionalProps} />);

describe('<Review />', () => {
  it('should render the right structure', () => {
    const wrapper = getReview();

    expect(wrapper).toMatchSnapshot();
  });

  describe('if `props.reviewResponse` is passed', () => {
    it('should render the right structure', () => {
      const wrapper = getReview({
        reviewResponse: {
          dateTime: 'someDate',
          source: 'someSource',
          text: 'someOtherText',
        },
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should have displayName `Review`', () => {
    expectComponentToHaveDisplayName(Review, 'Review');
  });
});
