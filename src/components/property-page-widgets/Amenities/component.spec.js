import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Grid } from 'layout/Grid';
import { VerticalGutters } from 'layout/VerticalGutters';

import { twoAmenities } from './mock-data/amenities';
import { Component as Amenities } from './component';

const getAmenities = (props = {}) =>
  shallow(
    <Amenities
      amenities={props.amenities || twoAmenities}
      hasExtraItemsInModal
      isStacked
      isUserOnMobile
      {...props}
    />
  );

describe('<Amenities />', () => {
  it('should have `VerticalGutters` component as a wrapper', () => {
    const wrapper = getAmenities();

    expectComponentToBe(wrapper, VerticalGutters);
  });

  it('should not have `VerticalGutters` component as a wrapper', () => {
    const wrapper = getAmenities({
      isNested: true,
    });

    expectComponentToBe(wrapper, Grid);
  });

  describe('the `VerticalGutters` component', () => {
    it('should have `Grid` as its only children', () => {
      const wrapper = getAmenities();

      expectComponentToHaveChildren(wrapper, Grid);
    });
  });
});
