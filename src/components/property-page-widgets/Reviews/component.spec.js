import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Reviews } from './component';

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
    reviewResponse: null,
    reviewText:
      'Beautifully located and well-kept villas in Santorini. Would certainly come back next year.',
    reviewTitle: 'Great accommodation! Honorable host.',
  },
];
const requiredProps = {
  ratingAverage,
  reviews,
};

const getReviews = additionalProps =>
  mount(<Reviews {...requiredProps} {...additionalProps} />);

describe('<Reviews />', () => {
  it('should render the right structure', () => {
    const wrapper = getReviews();

    expect(wrapper).toMatchSnapshot();
  });

  describe('if `props.isShowingPlaceholder` is `true`', () => {
    it('should render the right structure', () => {
      const wrapper = getReviews({ isShowingPlaceholder: true });

      expect(wrapper).toMatchSnapshot();
    });

    describe('if `props.reviews` has length `0`', () => {
      it('should render the right structure', () => {
        const wrapper = getReviews({ isShowingPlaceholder: true, reviews: [] });

        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  it('should have displayName `Reviews`', () => {
    expectComponentToHaveDisplayName(Reviews, 'Reviews');
  });
});
