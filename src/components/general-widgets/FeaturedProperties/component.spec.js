import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import { getArrayOfLengthOfItem } from 'utils/get-array-of-length-of-item';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { FeaturedProperty } from 'general-widgets/FeaturedProperty';
import { Heading } from 'typography/Heading';
import { VerticalGutters } from 'layout/VerticalGutters';

import { Component as FeaturedProperties } from './component';

const featuredProperties = [
  {
    bedroomsNumber: 3,
    guestsNumber: 3,
    imageUrl:
      'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    locationName: 'Catania',
    nightPrice: '$280',
    propertyName: 'The Cat House',
    propertyType: 'Bed and breakfast',
    propertyUrl: '/',
    ratingNumber: 4.8,
  },
  {
    bedroomsNumber: 3,
    guestsNumber: 3,
    imageUrl:
      'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    locationName: 'Catania',
    nightPrice: '$280',
    propertyName: 'The Cat House',
    propertyType: 'Bed and breakfast',
    propertyUrl: '/',
    ratingNumber: 4.8,
  },
];

const getFeaturedProperties = otherProps =>
  shallow(
    <FeaturedProperties
      featuredProperties={featuredProperties}
      {...otherProps}
    />
  );

describe('<FeaturedProperties />', () => {
  it('should have `VerticalGutters` component as a wrapper', () => {
    const wrapper = getFeaturedProperties();

    expectComponentToBe(wrapper, VerticalGutters);
  });

  describe('the `VerticalGutters` component', () => {
    it('should have `Grid` as its only children', () => {
      const wrapper = getFeaturedProperties();

      expectComponentToHaveChildren(wrapper, Grid);
    });
  });

  describe('if `props.headingText` is not passed', () => {
    describe('the `Grid` component', () => {
      it('should render the right children', () => {
        const wrapper = getFeaturedProperties().find(Grid);

        expectComponentToHaveChildren(
          wrapper,
          ...getArrayOfLengthOfItem(2, GridColumn)
        );
      });
    });

    describe('each of the array of  `GridColumns`', () => {
      const getFirstGridColumn = () =>
        getFeaturedProperties()
          .find(GridColumn)
          .first();

      it('should have the right right props', () => {
        const wrapper = getFirstGridColumn();

        expectComponentToHaveProps(wrapper, {
          computer: 4,
          mobile: 12,
          tablet: 6,
        });
      });

      it('should render the right children', () => {
        const wrapper = getFirstGridColumn();

        expectComponentToHaveChildren(wrapper, FeaturedProperty);
      });
    });
  });

  describe('if `props.headingText` is passed', () => {
    const headingText = 'My god I love Cliff Richard';

    describe('the `Grid` component', () => {
      it('should render the right children', () => {
        const wrapper = getFeaturedProperties({ headingText }).find(Grid);

        expectComponentToHaveChildren(
          wrapper,
          ...getArrayOfLengthOfItem(3, GridColumn)
        );
      });
    });

    describe('the heading `GridColumn` component', () => {
      const getFirstGridColumn = () =>
        getFeaturedProperties({ headingText })
          .find(GridColumn)
          .first();

      it('should have the right right props', () => {
        const wrapper = getFirstGridColumn();

        expectComponentToHaveProps(wrapper, {
          width: 12,
        });
      });

      it('should render the right children', () => {
        const wrapper = getFirstGridColumn();

        expectComponentToHaveChildren(wrapper, Heading);
      });
    });

    describe('the `Heading` component', () => {
      it('should render the right children', () => {
        const wrapper = getFeaturedProperties({ headingText }).find(Heading);

        expectComponentToHaveChildren(wrapper, headingText);
      });
    });
  });

  it('should have `displayName` `FeaturedProperties`', () => {
    expectComponentToHaveDisplayName(FeaturedProperties, 'FeaturedProperties');
  });
});
