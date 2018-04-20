import React from 'react';
import { shallow } from 'enzyme';

import {
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from 'lib/expect-helpers';
import { getArrayOfLengthOfItem } from 'lib/get-array-of-length-of-item';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { Link } from 'elements/Link';
import { Icon } from 'elements/Icon';
import { Modal } from 'elements/Modal';

import { sixAmenities, twelveAmenities } from './mock-data/amenities';
import { Component as Amenities } from './component';

const getAmenities = (props = {}) =>
  shallow(<Amenities amenities={props.amenities || sixAmenities} />);

describe('<Amenities />', () => {
  it('should render a single Lodgify UI `Grid` component', () => {
    const wrapper = getAmenities();
    const actual = wrapper.is(Grid);
    expect(actual).toBe(true);
  });

  describe('the `Grid` component', () => {
    it('should render the right children', () => {
      const wrapper = getAmenities();
      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(7, GridColumn)
      );
    });
  });

  describe('the first `GridColumn` component', () => {
    const getFirstGridColumn = () =>
      getAmenities()
        .find(GridColumn)
        .first();

    it('should have the right right props', () => {
      const wrapper = getFirstGridColumn();
      expectComponentToHaveProps(wrapper, { width: 12 });
    });

    it('should render the right children', () => {
      const wrapper = getFirstGridColumn();
      expectComponentToHaveChildren(wrapper, Heading);
    });
  });

  describe('the `Heading` component', () => {
    it('should render the right children', () => {
      const wrapper = getAmenities().find(Heading);
      expectComponentToHaveChildren(wrapper, 'Amenities');
    });
  });

  describe('each of the array of `GridColumn`s', () => {
    const getGridColumnInArray = () =>
      getAmenities()
        .find(GridColumn)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getGridColumnInArray();
      expectComponentToHaveProps(wrapper, { width: 4 });
    });

    it('should render the right children', () => {
      const wrapper = getGridColumnInArray();
      expectComponentToHaveChildren(wrapper, Icon);
    });
  });

  describe('each of the `Icon`s in the array of `GridColumn`s', () => {
    it('should have the right props', () => {
      const wrapper = getAmenities()
        .find(Icon)
        .at(0);
      const { isDisabled, label, iconName: name } = sixAmenities[0];
      expectComponentToHaveProps(wrapper, {
        isDisabled: !!isDisabled,
        label,
        name,
      });
    });
  });

  describe('if more than nine amenities are passed', () => {
    const getAmenitiesWithTwelveAmenities = () =>
      getAmenities({ amenities: twelveAmenities });

    describe('the `Grid` component', () => {
      it('should render another `GridColumn`', () => {
        const wrapper = getAmenitiesWithTwelveAmenities()
          .find(Grid)
          .at(0);
        expectComponentToHaveChildren(
          wrapper,
          ...getArrayOfLengthOfItem(11, GridColumn)
        );
      });
    });

    describe('the conditional `GridColumn` component', () => {
      const getConditionalGridColumn = () =>
        getAmenitiesWithTwelveAmenities()
          .find(GridColumn)
          .at(10);

      it('should have the right props', () => {
        const wrapper = getConditionalGridColumn();
        expectComponentToHaveProps(wrapper, { width: 12 });
      });

      it('should render the right children', () => {
        const wrapper = getConditionalGridColumn();
        expectComponentToHaveChildren(wrapper, Modal);
      });
    });

    describe('the `Modal` component', () => {
      it('should have the right props', () => {
        const wrapper = getAmenitiesWithTwelveAmenities().find(Modal);
        expectComponentToHaveProps(wrapper, {
          children: expect.any(Array),
          trigger: <Link>View more</Link>,
        });
      });
    });
  });

  it('should have `displayName` `Amenities`', () => {
    const actual = Amenities.displayName;
    expect(actual).toBe('Amenities');
  });
});
