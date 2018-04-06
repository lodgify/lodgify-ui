import React from 'react';
import { shallow } from 'enzyme';

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
  it('should render a single Lodgify UI `GridColumn` component', () => {
    const wrapper = getAmenities();
    const actual = wrapper.is(GridColumn);
    expect(actual).toBe(true);
  });

  describe('the first `GridColumn` component', () => {
    it('should have the right props', () => {
      const wrapper = getAmenities();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          width: 12,
        })
      );
    });

    it('should render the right children', () => {
      const children = ['Heading', 'Grid'];
      const wrapper = getAmenities();
      children.forEach((child, index) => {
        const actual = wrapper.childAt(index).name();
        expect(actual).toBe(child);
      });
    });
  });

  describe('the `Heading` component', () => {
    const getHeading = () => getAmenities().find(Heading);

    it('should have the right props', () => {
      const wrapper = getHeading();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          size: 'tiny',
        })
      );
    });

    it('should render the right children', () => {
      const wrapper = getHeading();
      const actual = wrapper.prop('children');
      expect(actual).toBe('Amenities');
    });
  });

  describe('the first `Grid` component', () => {
    it('should render the right children', () => {
      const wrapper = getAmenities().find(Grid);
      const actual = wrapper.children(GridColumn);
      expect(actual).toHaveLength(6);
    });
  });

  describe('each of the `GridColumn`s in the `Grid` component', () => {
    const getGridColumnInGrid = () =>
      getAmenities()
        .find(GridColumn)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getGridColumnInGrid();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          width: 4,
        })
      );
    });

    it('should render the right children', () => {
      const wrapper = getGridColumnInGrid();
      const actual = wrapper.children(Icon);
      expect(actual).toHaveLength(1);
    });
  });

  describe('each of the `Icon`s in the `Grid` component', () => {
    it('should have the right props', () => {
      const wrapper = getAmenities()
        .find(Icon)
        .at(0);
      const actual = wrapper.props();
      const { isDisabled, label, iconName: name } = sixAmenities[0];
      expect(actual).toEqual(
        expect.objectContaining({
          isDisabled: !!isDisabled,
          label,
          name,
        })
      );
    });
  });

  describe('if more than nine amenities are passed', () => {
    describe('the `Grid` component', () => {
      it('should render another `GridColumn`', () => {
        const wrapper = getAmenities({ amenities: twelveAmenities })
          .find(Grid)
          .at(0);
        const actual = wrapper.children(GridColumn);
        expect(actual).toHaveLength(10);
      });
    });

    describe('the conditional `GridColumn` component', () => {
      const getConditionalGridColumn = () =>
        getAmenities({ amenities: twelveAmenities })
          .find(GridColumn)
          .at(10);

      it('should have the right props', () => {
        const wrapper = getConditionalGridColumn();
        const actual = wrapper.props();
        expect(actual).toEqual(
          expect.objectContaining({
            width: 12,
          })
        );
      });

      it('should render the right children', () => {
        const wrapper = getConditionalGridColumn();
        const actual = wrapper.children(Modal);
        expect(actual).toHaveLength(1);
      });
    });

    describe('the `Modal` component', () => {
      it('should have the right props', () => {
        const wrapper = getAmenities({ amenities: twelveAmenities }).find(
          Modal
        );
        const actual = wrapper.props();
        expect(actual).toEqual(
          expect.objectContaining({
            children: expect.any(Array),
            trigger: <Link>View more</Link>,
          })
        );
      });
    });
  });

  it('should have `displayName` `Amenities`', () => {
    const actual = Amenities.displayName;
    expect(actual).toBe('Amenities');
  });
});
