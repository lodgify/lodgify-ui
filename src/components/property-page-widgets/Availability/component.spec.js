import React from 'react';
import MockDate from 'mockdate';
import { shallow } from 'enzyme';
import moment from 'moment';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Dropdown } from 'inputs/Dropdown';

import { ComponentWithResponsive as Availability } from './component';

const props = {
  isUserOnMobile: false,
  roomsWithImages: [],
};

const roomOptionsWithImages = [
  {
    text: 'room 1',
    value: '1',
    image: { url: 'imageUrl1' },
  },
  {
    text: 'room 2',
    value: '2',
    image: { url: 'imageUrl1' },
  },
];

const getAvailability = () => shallow(<Availability {...props} />);
const getWrappedAvailability = (overrideProps = {}) => {
  const Child = getAvailability().prop('as');

  return shallow(<Child {...{ ...props, ...overrideProps }} />);
};

describe('<Availability />', () => {
  beforeEach(() => {
    MockDate.set(moment('2018-11-11').utcOffset('+00:00', true));
  });

  afterEach(() => {
    MockDate.reset();
  });

  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getAvailability();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `size(props.roomOptionsWithImages) > 0`', () => {
    it('should render the right structure', () => {
      const actual = getAvailability({ roomOptionsWithImages });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('the wrapped component', () => {
    describe('by default', () => {
      it('should render the right structure', () => {
        const actual = getWrappedAvailability();

        expect(actual).toMatchSnapshot();
      });
    });

    describe('if `size(props.roomOptionsWithImages) > 0`', () => {
      it('should render the right structure', () => {
        const actual = getWrappedAvailability({ roomOptionsWithImages });

        expect(actual).toMatchSnapshot();
      });
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
          getIsDayBlocked: currentDate =>
            currentDate.isSame(todayMomentObject, 'date'),
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
          getIsDayBlocked: currentDate =>
            currentDate.isSame(todayMomentObject, 'date'),
        });
        const actual = component.instance().renderCalendarDay({
          day: todayMomentObject.clone().add(1, 'day'),
        });

        expect(actual.props.modifiers.has('blocked-calendar')).toBe(false);
      });
    });

    describe('the `Dropdown`', () => {
      describe('Interaction: onChange', () => {
        it('should correctly trigger the prop method and force update', () => {
          const onChangeRoomDropdown = jest.fn();
          const wrapper = getWrappedAvailability({
            onChangeRoomDropdown,
            roomOptionsWithImages,
          })
            .find(Dropdown)
            .at(0);

          wrapper.simulate('change', {});
          expect(onChangeRoomDropdown).toBeCalled();
        });
      });
    });

    it('should have displayName `Availability`', () => {
      const component = getAvailability().prop('as');

      expectComponentToHaveDisplayName(component, 'Availability');
    });
  });
});
