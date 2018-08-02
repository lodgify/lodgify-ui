import React from 'react';
import { shallow } from 'enzyme';
import { Card, Rating } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Divider } from 'elements/Divider';
import { Grid } from 'layout/Grid';
import { GridRow } from 'layout/GridRow';
import { GridColumn } from 'layout/GridColumn';
import { Quote } from 'elements/Quote';
import { Subheading } from 'typography/Subheading';

import { getReviewerNameAndLocationString } from './utils/getReviewerNameAndLocationString';
import { getReviewerCategoryAndStayDateString } from './utils/getReviewerCategoryAndStayDateString';
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

const reviewResponse = {
  dateTime: 'someDate',
  source: 'someSource',
  text: 'someOtherText',
};

const getReview = additionalProps =>
  shallow(<Review {...requiredProps} {...additionalProps} />);

describe('<Review />', () => {
  it('should render a single Semantic UI `Card` component', () => {
    const wrapper = getReview();

    expectComponentToBe(wrapper, Card);
  });

  describe('the first `Card` component', () => {
    it('should have the right props', () => {
      const wrapper = getReview();

      expectComponentToHaveProps(wrapper, {
        fluid: true,
      });
    });

    it('should render the right children', () => {
      const wrapper = getReview();

      expectComponentToHaveChildren(wrapper, Card.Content);
    });
  });

  describe('the first `Card.Content` child of `Card` component', () => {
    describe('if `props.reviewResponse` are not present', () => {
      it('should render the right children', () => {
        const wrapper = getReview()
          .find(Card.Content)
          .at(0);

        expectComponentToHaveChildren(
          wrapper,
          Card.Meta,
          Divider,
          Card.Header,
          Card.Description,
          Divider,
          Card.Description
        );
      });
    });

    describe('if `props.reviewResponse` is present', () => {
      it('should render the right children', () => {
        const wrapper = getReview({
          reviewResponse,
        })
          .find(Card.Content)
          .at(0);

        expectComponentToHaveChildren(
          wrapper,
          Card.Meta,
          Divider,
          Card.Header,
          Card.Description,
          Divider,
          'div',
          Card.Description
        );
      });
    });
  });

  describe('the `Card.Meta` component', () => {
    it('should render the right children', () => {
      const wrapper = getReview()
        .find(Card.Meta)
        .at(0);

      expectComponentToHaveChildren(wrapper, Grid);
    });
  });

  describe('the `Grid` component', () => {
    it('should render the right children', () => {
      const wrapper = getReview()
        .find(Grid)
        .at(0);

      expectComponentToHaveChildren(wrapper, GridRow);
    });
  });

  describe('the `GridRow` component', () => {
    const getGridRow = () =>
      getReview()
        .find(GridRow)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getGridRow();

      expectComponentToHaveProps(wrapper, {
        verticalAlign: 'middle',
      });
    });

    it('should render the right children', () => {
      const wrapper = getGridRow();

      expectComponentToHaveChildren(wrapper, GridColumn, GridColumn);
    });
  });

  describe('the first `GridColumn` component', () => {
    const getFirstGridColumn = () =>
      getReview()
        .find(GridColumn)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getFirstGridColumn();

      expectComponentToHaveProps(wrapper, {
        computer: 6,
        mobile: 12,
        tablet: 7,
      });
    });

    it('should render the right children', () => {
      const wrapper = getFirstGridColumn();

      expectComponentToHaveChildren(wrapper, Subheading);
    });
  });

  describe('the `Paragraph` component', () => {
    it('should have the right children', () => {
      const wrapper = getReview().find(Subheading);

      expectComponentToHaveChildren(
        wrapper,
        getReviewerNameAndLocationString(
          requiredProps.reviewerName,
          requiredProps.reviewerLocation
        )
      );
    });
  });

  describe('the second `GridColumn` component', () => {
    const getSecondGridColumn = () =>
      getReview()
        .find(GridColumn)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getSecondGridColumn();

      expectComponentToHaveProps(wrapper, {
        computer: 6,
        mobile: 12,
        tablet: 5,
        textAlign: 'right',
        verticalAlign: 'middle',
      });
    });

    it('should have the right children', () => {
      const wrapper = getSecondGridColumn();

      expectComponentToHaveChildren(wrapper, Rating);
    });
  });

  describe('the `Rating` component', () => {
    it('should have the right props', () => {
      const wrapper = getReview()
        .find(Rating)
        .at(0);

      expectComponentToHaveProps(wrapper, {
        disabled: true,
        maxRating: 5,
        rating: Math.round(requiredProps.ratingNumber),
        size: 'small',
      });
    });
  });

  describe('the `Card.Header` component', () => {
    it('should have the right children', () => {
      const wrapper = getReview()
        .find(Card.Header)
        .at(0);

      expectComponentToHaveChildren(wrapper, requiredProps.reviewTitle);
    });
  });

  describe('the first `Card.Description` component', () => {
    it('should have the right children', () => {
      const wrapper = getReview()
        .find(Card.Description)
        .at(0);

      expectComponentToHaveChildren(wrapper, requiredProps.reviewText);
    });
  });

  describe('the `div` element', () => {
    it('should have the right children', () => {
      const wrapper = getReview({
        reviewResponse,
      })
        .find('div')
        .at(0);

      expectComponentToHaveChildren(wrapper, Quote, Divider);
    });
  });

  describe('the `Quote` component', () => {
    it('should have the right props', () => {
      const wrapper = getReview({
        reviewResponse,
      })
        .find(Quote)
        .at(0);

      expectComponentToHaveProps(wrapper, {
        quoteDateTime: reviewResponse.dateTime,
        quoteText: reviewResponse.text,
        quoteSource: reviewResponse.source,
      });
    });
  });

  describe('the second `Card.Description` component', () => {
    const getSecondCardDescription = () =>
      getReview()
        .find(Card.Description)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getSecondCardDescription();

      expectComponentToHaveProps(wrapper, {
        textAlign: 'right',
      });
    });

    it('should have the right children', () => {
      const wrapper = getSecondCardDescription();

      expectComponentToHaveChildren(
        wrapper,
        getReviewerCategoryAndStayDateString(
          requiredProps.reviewerCategory,
          requiredProps.reviewerStayDate
        )
      );
    });
  });

  it('should have displayName `Review`', () => {
    expectComponentToHaveDisplayName(Review, 'Review');
  });
});
