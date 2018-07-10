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
import { FeaturedRoomType } from 'general-widgets/FeaturedRoomType';
import { Heading } from 'typography/Heading';

import { Component as FeaturedRoomTypes } from './component';

const featuredRoomTypes = [
  {
    bedsNumber: 3,
    guestsNumber: 3,
    imageUrl:
      'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    locationName: 'Catania',
    nightPrice: '$280',
    ratingNumber: 4.8,
    roomTypeName: 'The Cat House',
    roomTypeUrl: '/',
  },
  {
    bedsNumber: 3,
    guestsNumber: 3,
    imageUrl:
      'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    locationName: 'Catania',
    nightPrice: '$280',
    ratingNumber: 4.8,
    roomTypeName: 'The Cat House',
    roomTypeUrl: '/',
  },
];

const getFeaturedRoomTypes = otherProps =>
  shallow(
    <FeaturedRoomTypes featuredRoomTypes={featuredRoomTypes} {...otherProps} />
  );

describe('<FeaturedRoomTypes />', () => {
  it('should be a Lodgify UI `Grid`', () => {
    const wrapper = getFeaturedRoomTypes();
    expectComponentToBe(wrapper, Grid);
  });

  describe('if `props.headingText` is not passed', () => {
    describe('the `Grid` component', () => {
      it('should render the right children', () => {
        const wrapper = getFeaturedRoomTypes();
        expectComponentToHaveChildren(
          wrapper,
          ...getArrayOfLengthOfItem(2, GridColumn)
        );
      });
    });

    describe('each of the array of  `GridColumns`', () => {
      const getFirstGridColumn = () =>
        getFeaturedRoomTypes()
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
        expectComponentToHaveChildren(wrapper, FeaturedRoomType);
      });
    });
  });

  describe('if `props.headingText` is passed', () => {
    const headingText = 'My god I love Elton John';
    describe('the `Grid` component', () => {
      it('should render the right children', () => {
        const wrapper = getFeaturedRoomTypes({ headingText });
        expectComponentToHaveChildren(
          wrapper,
          ...getArrayOfLengthOfItem(3, GridColumn)
        );
      });
    });

    describe('the heading `GridColumn` component', () => {
      const getFirstGridColumn = () =>
        getFeaturedRoomTypes({ headingText })
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
        const wrapper = getFeaturedRoomTypes({ headingText }).find(Heading);
        expectComponentToHaveChildren(wrapper, headingText);
      });
    });
  });

  it('should have `displayName` `FeaturedRoomTypes`', () => {
    expectComponentToHaveDisplayName(FeaturedRoomTypes, 'FeaturedRoomTypes');
  });
});
