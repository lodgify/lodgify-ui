import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { CalendarMonth } from 'react-dates';
import { Card, Responsive } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Paragraph } from 'typography/Paragraph';
import { Heading } from 'typography/Heading';
import { Grid } from 'layout/Grid';
import { GridRow } from 'layout/GridRow';
import { GridColumn } from 'layout/GridColumn';
import { Icon } from 'elements/Icon';
import { Dropdown } from 'inputs/Dropdown';
import { VerticalGutters } from 'layout/VerticalGutters';

import { ComponentWithResponsive as Availability } from './component';

const props = {
  isUserOnMobile: false,
  roomsWithImages: [],
};

const getAvailability = () => shallow(<Availability {...props} />);
const getWrappedAvailability = (overrideProps = {}) => {
  const Child = getAvailability().prop('as');

  return shallow(<Child {...{ ...props, ...overrideProps }} />);
};

describe('<Availability />', () => {
  it('should be wrapped in a Semantic UI `Responsive` component', () => {
    const wrapper = getAvailability();

    expectComponentToBe(wrapper, Responsive);
  });

  describe('the `Child` of the `Availability` component', () => {
    it('should have `VerticalGutters` component as a wrapper', () => {
      const wrapper = getWrappedAvailability();

      expectComponentToBe(wrapper, VerticalGutters);
    });
  });

  describe('the `VerticalGutters` component', () => {
    it('should have `div` as its only children', () => {
      const wrapper = getWrappedAvailability();

      expectComponentToHaveChildren(wrapper, 'div');
    });
  });

  describe('the `div` element', () => {
    it('should have four children', () => {
      const wrapper = getWrappedAvailability().find('div');

      expectComponentToHaveChildren(wrapper, Heading, Grid, Card, Grid);
    });
  });

  describe('Interaction: handleClickNextMonth', () => {
    it('should persist the next startDate in component state', () => {
      const wrapper = getWrappedAvailability();
      const startDate = wrapper.state().startDate;

      wrapper.instance().handleClickNextMonth();
      const actual = wrapper.state();

      expect(actual).toEqual(
        expect.objectContaining({
          startDate: startDate.clone().add(4, 'months'),
        })
      );
    });
  });

  describe('Interaction: handleClickPreviousMonth', () => {
    it('should persist the next startDate in component state', () => {
      const wrapper = getWrappedAvailability();
      const startDate = wrapper.state().startDate;

      wrapper.instance().handleClickPreviousMonth();
      const actual = wrapper.state();

      expect(actual).toEqual(
        expect.objectContaining({
          startDate: startDate.clone().subtract(4, 'months'),
        })
      );
    });
  });

  describe('Render: renderCalendarDay', () => {
    it('should correctly render the day as blocked', () => {
      const todayMomentObject = moment();
      const component = getWrappedAvailability({
        getIsDayBlocked: currentDate => {
          return currentDate.isSame(todayMomentObject, 'date');
        },
      });
      const actual = component.instance().renderCalendarDay({
        day: todayMomentObject,
      });

      expect(actual.props.modifiers.has('blocked-calendar')).toBe(true);
    });

    it('should correctly use the default method of `getIsDayBlocked`', () => {
      const todayMomentObject = moment();
      const component = getWrappedAvailability();
      const actual = component.instance().renderCalendarDay({
        day: todayMomentObject,
      });

      expect(actual.props.modifiers.has('blocked-calendar')).toBe(false);
    });

    it('should correctly render the day as blocked', () => {
      const todayMomentObject = moment();
      const component = getWrappedAvailability({
        getIsDayBlocked: currentDate => {
          return currentDate.isSame(todayMomentObject, 'date');
        },
      });
      const actual = component.instance().renderCalendarDay({
        day: todayMomentObject.clone().add(1, 'day'),
      });

      expect(actual.props.modifiers.has('blocked-calendar')).toBe(false);
    });
  });

  describe('the first `Heading`', () => {
    it('should have the correct props', () => {
      const wrapper = getWrappedAvailability()
        .find(Heading)
        .at(0);

      expectComponentToHaveProps(wrapper, {
        size: 'small',
      });
    });
  });

  describe('the first `Grid`', () => {
    it('should have the correct children', () => {
      const wrapper = getWrappedAvailability()
        .find(Grid)
        .at(0);

      expectComponentToHaveChildren(wrapper, GridRow);
    });
  });

  describe('the first `GridColumn`', () => {
    const getGridColumn = () =>
      getWrappedAvailability()
        .find(GridColumn)
        .at(0);

    it('should have the correct props', () => {
      const wrapper = getGridColumn();

      expectComponentToHaveProps(wrapper, {
        computer: 7,
        mobile: 12,
        tablet: 6,
        verticalAlignContent: 'middle',
      });
    });

    it('should have the correct children', () => {
      const wrapper = getGridColumn();

      expectComponentToHaveChildren(wrapper, Grid);
    });
  });

  describe('the second `Grid`', () => {
    it('should have the correct children', () => {
      const wrapper = getWrappedAvailability()
        .find(Grid)
        .at(1);

      expectComponentToHaveChildren(wrapper, GridColumn, GridColumn);
    });
  });

  describe('the second `GridColumn`', () => {
    const getGridColumn = () =>
      getWrappedAvailability()
        .find(GridColumn)
        .at(1);

    it('should have the correct props', () => {
      const wrapper = getGridColumn();

      expectComponentToHaveProps(wrapper, {
        computer: 5,
        mobile: 5,
        tablet: 12,
        verticalAlignContent: 'middle',
      });
    });

    it('should have the correct children', () => {
      const wrapper = getGridColumn();

      expectComponentToHaveChildren(wrapper, Paragraph);
    });
  });

  describe('the first `Paragraph`', () => {
    it('should have the correct props', () => {
      const wrapper = getWrappedAvailability()
        .find(Paragraph)
        .at(0);

      expectComponentToHaveProps(wrapper, {
        size: 'tiny',
        weight: 'heavy',
      });
    });
  });

  describe('the third `GridColumn`', () => {
    const getGridColumn = () =>
      getWrappedAvailability()
        .find(GridColumn)
        .at(2);

    it('should have the correct props', () => {
      const wrapper = getGridColumn();

      expectComponentToHaveProps(wrapper, {
        computer: 7,
        mobile: 7,
        tablet: 12,
      });
    });

    it('should have the correct children', () => {
      const wrapper = getGridColumn();

      expectComponentToHaveChildren(wrapper, Dropdown);
    });
  });

  describe('the first `Dropdown`', () => {
    it('should have the correct props', () => {
      const wrapper = getWrappedAvailability()
        .find(Dropdown)
        .at(0);

      expectComponentToHaveProps(wrapper, {
        icon: 'map pin',
        label: 'Properties',
        options: props.roomsWithImages,
      });
    });

    describe('Interaction: onChange', () => {
      it('should correctly trigger the prop method and force update', () => {
        const onChangeRoomDropdown = jest.fn();
        const wrapper = getWrappedAvailability({
          onChangeRoomDropdown,
        })
          .find(Dropdown)
          .at(0);

        wrapper.simulate('change', {});
        expect(onChangeRoomDropdown).toBeCalled();
      });

      it('should have `Function.prototype` as the default value for `props.onChangeRoomDropdown`', () => {
        const wrapper = getWrappedAvailability();
        const props = wrapper.instance().props;

        expect(props.onChangeRoomDropdown).toBe(Function.prototype);
      });
    });
  });

  describe('the fourth `GridColumn`', () => {
    const getGridColumn = () =>
      getWrappedAvailability()
        .find(GridColumn)
        .at(3);

    it('should have the correct props', () => {
      const wrapper = getGridColumn();

      expectComponentToHaveProps(wrapper, {
        only: 'tablet computer',
        textAlign: 'right',
        verticalAlignContent: 'middle',
        width: 5,
      });
    });

    it('should have the correct children', () => {
      const wrapper = getGridColumn();

      expectComponentToHaveChildren(wrapper, Icon);
    });
  });

  describe('the first `Icon`', () => {
    it('should have the correct props', () => {
      const wrapper = getWrappedAvailability()
        .find(Icon)
        .at(0);

      expectComponentToHaveProps(wrapper, {
        color: 'light grey',
        isLabelLeft: true,
        labelText: 'Unavailable',
        name: 'square',
      });
    });
  });

  describe('the first `Card`', () => {
    const getCard = () =>
      getWrappedAvailability()
        .find(Card)
        .at(0);

    it('should have the correct props', () => {
      const wrapper = getCard();

      expectComponentToHaveProps(wrapper, {
        fluid: true,
      });
    });

    it('should have the correct children', () => {
      const wrapper = getCard();

      expectComponentToHaveChildren(wrapper, Grid);
    });
  });

  describe('the third `Grid`', () => {
    const getGrid = () =>
      getWrappedAvailability()
        .find(Grid)
        .at(2);

    it('should have the correct props', () => {
      const wrapper = getGrid();

      expectComponentToHaveProps(wrapper, {
        padded: true,
      });
    });

    it('should have the correct children', () => {
      const wrapper = getGrid();

      expectComponentToHaveChildren(wrapper, GridRow, GridRow);
    });
  });

  describe('the second `GridRow`', () => {
    const getGridRow = () =>
      getWrappedAvailability()
        .find(GridRow)
        .at(1);

    it('should have the correct children', () => {
      const wrapper = getGridRow();

      expectComponentToHaveChildren(
        wrapper,
        GridColumn,
        GridColumn,
        GridColumn,
        GridColumn
      );
    });

    it('should have four calendar months', () => {
      const wrapper = getGridRow();

      expect(wrapper.find(CalendarMonth)).toHaveLength(4);
    });
  });

  describe('the fifth `GridColumn`', () => {
    const getGridColumn = () =>
      getWrappedAvailability()
        .find(GridColumn)
        .at(4);

    it('should have the correct props', () => {
      const wrapper = getGridColumn();

      expectComponentToHaveProps(wrapper, {
        computer: 6,
        mobile: 12,
        tablet: 6,
      });
    });

    it('should have the correct children', () => {
      const wrapper = getGridColumn();

      expectComponentToHaveChildren(wrapper, CalendarMonth);
    });
  });

  describe('the first `CalendarMonth`', () => {
    it('should have the correct props', () => {
      const wrapper = getWrappedAvailability()
        .find(CalendarMonth)
        .at(0);

      expectComponentToHaveProps(wrapper, {
        isVisible: true,
      });
    });
  });

  describe('the third `GridRow`', () => {
    it('should have the correct children', () => {
      const wrapper = getWrappedAvailability()
        .find(GridRow)
        .at(2);

      expectComponentToHaveChildren(wrapper, GridColumn, GridColumn);
    });
  });

  describe('the ninth `GridColumn`', () => {
    const getGridColumn = () =>
      getWrappedAvailability()
        .find(GridColumn)
        .at(8);

    it('should have the correct props', () => {
      const wrapper = getGridColumn();

      expectComponentToHaveProps(wrapper, {
        width: 6,
      });
    });

    it('should have the correct children', () => {
      const wrapper = getGridColumn();

      expectComponentToHaveChildren(wrapper, Icon);
    });
  });

  describe('the second `Icon`', () => {
    it('should have the correct props', () => {
      const wrapper = getWrappedAvailability()
        .find(Icon)
        .at(1);

      expectComponentToHaveProps(wrapper, {
        labelText: 'Previous',
        name: 'arrow left',
      });
    });
  });

  describe('the third `Icon`', () => {
    it('should have the correct props', () => {
      const wrapper = getWrappedAvailability()
        .find(Icon)
        .at(2);

      expectComponentToHaveProps(wrapper, {
        labelText: 'Next',
        isLabelLeft: true,
        name: 'arrow right',
      });
    });
  });

  describe('the tenth `GridColumn`', () => {
    const getGridColumn = () =>
      getWrappedAvailability()
        .find(GridColumn)
        .at(9);

    it('should have the correct props', () => {
      const wrapper = getGridColumn();

      expectComponentToHaveProps(wrapper, {
        width: 6,
      });
    });

    it('should have the correct children', () => {
      const wrapper = getGridColumn();

      expectComponentToHaveChildren(wrapper, Icon);
    });
  });

  describe('the fourth `Icon`', () => {
    it('should have the correct props', () => {
      const wrapper = getWrappedAvailability()
        .find(Icon)
        .at(3);

      expectComponentToHaveProps(wrapper, {
        color: 'grey',
        isLabelLeft: true,
        labelText: 'Unavailable',
        name: 'square',
      });
    });
  });
});
