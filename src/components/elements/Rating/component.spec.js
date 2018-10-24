import React from 'react';
import { shallow } from 'enzyme';
import { default as SemanticRating } from 'semantic-ui-react/dist/commonjs/modules/Rating';
import {
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Rating } from './component';

const ratingNumber = 3.4;

const getRating = props =>
  shallow(<Rating ratingNumber={ratingNumber} {...props} />);

describe('<Rating />', () => {
  it('should render the right children', () => {
    const wrapper = getRating();

    expectComponentToHaveChildren(
      wrapper,
      ratingNumber.toString(),
      SemanticRating
    );
  });

  describe('if `props.isShowingNumeral` is `false`', () => {
    it('should render the right children', () => {
      const wrapper = getRating({ isShowingNumeral: false });

      expectComponentToHaveChildren(wrapper, SemanticRating);
    });
  });

  describe('the Semantic UI `Rating`', () => {
    const getSemanticRating = props => getRating(props).find(SemanticRating);

    it('should get the right props', () => {
      const wrapper = getSemanticRating();

      expectComponentToHaveProps(wrapper, {
        disabled: true,
        maxRating: 5,
        rating: Math.round(ratingNumber),
        size: 'small',
      });
    });

    describe('if `props.iconSize` is `tiny`', () => {
      it('should get the right props', () => {
        const TINY = 'tiny';
        const wrapper = getSemanticRating({ iconSize: TINY });

        expectComponentToHaveProps(wrapper, {
          disabled: true,
          maxRating: 5,
          rating: Math.round(ratingNumber),
          size: TINY,
        });
      });
    });
  });

  it('should have `displayName` Rating', () => {
    expectComponentToHaveDisplayName(Rating, 'Rating');
  });
});
