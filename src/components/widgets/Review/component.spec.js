import React from 'react';
import { shallow } from 'enzyme';
import { Card, Rating } from 'semantic-ui-react';

import {
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from 'lib/expect-helpers';
import { Grid } from 'layout/Grid';
import { GridRow } from 'layout/GridRow';
import { GridColumn } from 'layout/GridColumn';
import { Divider } from 'elements/Divider';
import { Quote } from 'elements/Quote';
import { Paragraph } from 'typography/Paragraph';

import * as props from './mock-data/props';
import { getReviewerNameAndLocationString } from './utils/getReviewerNameAndLocationString';
import { getReviewerCategoryAndStayDateString } from './utils/getReviewerCategoryAndStayDateString';
import { Component as Review } from './component';

const { reviewResponse, ...requiredProps } = props;

const getReview = additionalProps =>
  shallow(<Review {...requiredProps} {...additionalProps} />);

describe('<Review />', () => {
  it('should render a single Semantic UI `Card` component', () => {
    const wrapper = getReview();
    const actual = wrapper.is(Card);
    expect(actual).toBe(true);
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

    it('should render the right props', () => {
      const wrapper = getFirstGridColumn();
      expectComponentToHaveProps(wrapper, {
        width: 6,
        floated: 'left',
      });
    });

    it('should render the right children', () => {
      const wrapper = getFirstGridColumn();
      expectComponentToHaveChildren(wrapper, Paragraph);
    });
  });

  describe('the first `Paragraph` component', () => {
    const getFirstParagraph = () =>
      getReview()
        .find(Paragraph)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getFirstParagraph();
      expectComponentToHaveProps(wrapper, {
        size: 'tiny',
      });
    });

    it('should have the right children', () => {
      const wrapper = getFirstParagraph();
      expectComponentToHaveChildren(
        wrapper,
        getReviewerNameAndLocationString(
          props.reviewerName,
          props.reviewerLocation
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
        width: 6,
        floated: 'right',
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
        rating: Math.round(props.ratingNumber),
        size: 'small',
      });
    });
  });

  describe('the `Card.Header` component', () => {
    it('should have the right children', () => {
      const wrapper = getReview()
        .find(Card.Header)
        .at(0);
      expectComponentToHaveChildren(wrapper, props.reviewTitle);
    });
  });

  describe('the first `Card.Description` component', () => {
    it('should have the right children', () => {
      const wrapper = getReview()
        .find(Card.Description)
        .at(0);
      expectComponentToHaveChildren(wrapper, props.reviewText);
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
          props.reviewerCategory,
          props.reviewerStayDate
        )
      );
    });
  });

  it('should have displayName `Review`', () => {
    const actual = Review.displayName;
    expect(actual).toBe('Review');
  });
});
