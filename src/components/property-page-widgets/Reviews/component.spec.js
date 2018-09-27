import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Heading } from 'typography/Heading';
import { Rating } from 'elements/Rating';
import { Grid } from 'layout/Grid';
import { GridRow } from 'layout/GridRow';
import { GridColumn } from 'layout/GridColumn';
import { Button } from 'elements/Button';
import { Divider } from 'elements/Divider';
import { Review } from 'general-widgets/Review';

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
  shallow(<Reviews {...requiredProps} {...additionalProps} />);

describe('<Reviews />', () => {
  it('should have `Grid` component as a wrapper', () => {
    const wrapper = getReviews();

    expectComponentToBe(wrapper, Grid);
  });

  describe('the first `GridRow` component', () => {
    describe('the first `GridColumn` component', () => {
      it('should have the right props', () => {
        const wrapper = getReviews()
          .find(GridRow)
          .at(0)
          .find(GridColumn)
          .at(0);

        expectComponentToHaveProps(wrapper, {
          width: 12,
        });
      });

      it('should render the right children', () => {
        const wrapper = getReviews()
          .find(GridRow)
          .at(0)
          .find(GridColumn)
          .at(0);

        expectComponentToHaveChildren(wrapper, Heading);
      });
    });
  });

  describe('the second `GridRow` component', () => {
    it('should have the right props', () => {
      const wrapper = getReviews()
        .find(GridRow)
        .at(1);

      expectComponentToHaveProps(wrapper, {
        verticalAlign: 'middle',
      });
    });

    it('should render the right children', () => {
      const wrapper = getReviews()
        .find(GridRow)
        .at(1);

      expectComponentToHaveChildren(wrapper, GridColumn, GridColumn);
    });

    describe('the first `GridColumn` children', () => {
      it('should have the right props', () => {
        const wrapper = getReviews()
          .find(GridRow)
          .at(1)
          .find(GridColumn)
          .at(0);

        expectComponentToHaveProps(wrapper, {
          mobile: 5,
          tablet: 5,
          computer: 6,
          textAlign: 'left',
          verticalAlign: 'middle',
          floated: 'left',
        });
      });

      it('should render the right children', () => {
        const wrapper = getReviews()
          .find(GridColumn)
          .at(1);

        expectComponentToHaveChildren(wrapper, Rating);
      });
    });

    describe('the second `GridColumn` children', () => {
      it('should have the right props', () => {
        const wrapper = getReviews()
          .find(GridRow)
          .at(1)
          .find(GridColumn)
          .at(1);

        expectComponentToHaveProps(wrapper, {
          mobile: 7,
          tablet: 7,
          computer: 6,
          verticalAlign: 'middle',
          floated: 'right',
        });
      });

      it('should render the right children', () => {
        const wrapper = getReviews()
          .find(GridColumn)
          .at(2);

        expectComponentToHaveChildren(wrapper, Button);
      });
    });
  });

  describe('the rest of `GridRows` components - Review Rows', () => {
    const nonReviewsRowsQuantity = 2;
    const wrapper = getReviews().find(GridRow);

    it('should count `reviews.length`', () => {
      expect(wrapper).toHaveLength(reviews.length + nonReviewsRowsQuantity);
    });

    describe('each one of the rest of `GridRows` - Review Rows', () => {
      const eachRowShouldRenderTheRightChildren = node => {
        expect(node.exists()).toBeTruthy();
        expect(node.find(GridColumn)).toHaveLength(1);
        expect(node.find(Review)).toHaveLength(1);
        expect(node.find(Divider)).toHaveLength(1);
      };

      const eachRowShouldRenderTheRightGridColumnProps = node =>
        expectComponentToHaveProps(node, {
          width: 12,
        });

      const eachRowShouldRenderTheRightReviewProps = (node, index) =>
        expectComponentToHaveProps(node, {
          ratingNumber: reviews[index].ratingNumber,
          reviewerCategory: reviews[index].reviewerCategory,
          reviewerLocation: reviews[index].reviewerLocation,
          reviewerName: reviews[index].reviewerName,
          reviewResponse: reviews[index].reviewResponse,
          reviewerStayDate: reviews[index].reviewerStayDate,
          reviewText: reviews[index].reviewText,
          reviewTitle: reviews[index].reviewTitle,
        });

      wrapper.forEach((node, index) => {
        if (index > nonReviewsRowsQuantity - 1) {
          eachRowShouldRenderTheRightChildren(node);
          eachRowShouldRenderTheRightGridColumnProps(node.find(GridColumn));
          eachRowShouldRenderTheRightReviewProps(
            node.find(Review),
            index - nonReviewsRowsQuantity
          );
        }
      });
    });
  });

  describe('the `Button` component', () => {
    it('should have the right props', () => {
      const wrapper = getReviews()
        .find(Button)
        .at(0);

      expectComponentToHaveProps(wrapper, {
        isCompact: true,
        size: 'medium',
        isPositionedRight: true,
        isRounded: true,
      });
    });
  });

  describe('the `Rating` component', () => {
    it('should have the right props', () => {
      const wrapper = getReviews()
        .find(Rating)
        .at(0);

      expectComponentToHaveProps(wrapper, {
        ratingNumber: requiredProps.ratingAverage,
      });
    });
  });

  it('should have displayName `Reviews`', () => {
    expectComponentToHaveDisplayName(Reviews, 'Reviews');
  });
});
