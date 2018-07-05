import { shallow } from 'enzyme';
import {
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';
import { Rating } from 'semantic-ui-react';

import { getRatingMarkup } from './getRatingMarkup';

const getRatingMarkupInstance = ratingNumber =>
  shallow(getRatingMarkup(ratingNumber));

describe('getRatingMarkup', () => {
  it('it should correctly return the rating component', () => {
    const ratingNumber = 3.2;
    const wrapper = getRatingMarkupInstance(ratingNumber);
    expectComponentToHaveChildren(wrapper, String(ratingNumber), Rating);
  });
});

describe('`Rating`', () => {
  it('should have the right props', () => {
    const ratingNumber = 3.2;
    const wrapper = getRatingMarkupInstance(ratingNumber).find(Rating);
    expectComponentToHaveProps(wrapper, {
      disabled: true,
      maxRating: 5,
      rating: Math.round(ratingNumber),
      size: 'tiny',
    });
  });
});
