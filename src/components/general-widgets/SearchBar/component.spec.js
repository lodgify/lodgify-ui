jest.mock('uniqid');
jest.mock('react-dates', () => {
  const { Component } = require('react');

  class DateRangePicker extends Component {
    render() {
      return <div />;
    }
  }

  return { DateRangePicker };
});
jest.mock('debounce');
jest.mock('./utils/getInitialValue');
jest.mock('./utils/getWillLocationDropdownOpenAbove');

import React from 'react';
import { mount, shallow } from 'enzyme';
import { Form } from 'semantic-ui-react';
import { debounce } from 'debounce';
import moment from 'moment';

import { Dropdown } from 'inputs/Dropdown';
import { GridColumn } from 'layout/GridColumn';

import { Component as SearchBar } from './component';
import { locationOptions } from './mock-data/options';
import { getWillLocationDropdownOpenAbove } from './utils/getWillLocationDropdownOpenAbove';

const INITIAL_VALUE = 'some value';
const DATE_INITIAL_VALUE = {
  startDate: moment(0),
  endDtate: moment(0),
};
const GUEST_INITIAL_VALUE = 1;
const WILL_THEY_OPEN_ABOVE = false;

global.document.addEventListener = jest.fn();
debounce.mockImplementation(func => func);
getWillLocationDropdownOpenAbove.mockReturnValue(WILL_THEY_OPEN_ABOVE);

const props = {
  dateRangePickerLocaleCode: 'ko',
  locationOptions,
  datesInputValue: DATE_INITIAL_VALUE,
  guestsInputValue: GUEST_INITIAL_VALUE,
  locationInputValue: INITIAL_VALUE,
};

const getSearchBar = overrideProps =>
  mount(<SearchBar {...props} {...overrideProps} />);

const getSearchBarShallow = overrideProps =>
  shallow(<SearchBar {...props} {...overrideProps} />);

describe('<SearchBar />', () => {
  describe('by default', () => {
    it('should set the initial state with the right values', () => {
      const wrapper = getSearchBar();
      const actual = wrapper.state();

      expect(actual).toEqual({
        dates: DATE_INITIAL_VALUE,
        guests: GUEST_INITIAL_VALUE,
        location: INITIAL_VALUE,
        willLocationDropdownOpenAbove: false,
      });
    });

    it('should render the right structure', () => {
      const actual = getSearchBar();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('componentDidMount', () => {
    describe('if `this.props.isDisplayedAsModal` is `true`', () => {
      it('should not call `global.document.addEventListener`', () => {
        const wrapper = getSearchBarShallow({ isDisplayedAsModal: true });

        global.document.addEventListener.mockClear();
        wrapper.instance().componentDidMount();

        expect(global.document.addEventListener).not.toHaveBeenCalledWith(
          'scroll',
          wrapper.instance().handleScroll
        );
      });
    });

    describe('if `this.props.isDisplayedAsModal` is `false`', () => {
      it('should call `global.document.addEventListener`', () => {
        const wrapper = getSearchBarShallow({ isDisplayedAsModal: false });

        global.document.addEventListener.mockClear();
        wrapper.instance().componentDidMount();

        expect(global.document.addEventListener).toHaveBeenCalledWith(
          'scroll',
          wrapper.instance().handleScroll
        );
      });

      it('should call `handleScroll`', () => {
        const wrapper = getSearchBarShallow({ isDisplayedAsModal: false });

        wrapper.instance().handleScroll = jest.fn();
        wrapper.update();
        wrapper.instance().componentDidMount();

        expect(wrapper.instance().handleScroll).toHaveBeenCalled();
      });
    });
  });

  describe('componentDidUpdate', () => {
    describe('if `previousInputValueProps` and `currentInputValueProps` do not equal', () => {
      it('should call setState with the correct arguments', () => {
        const onChangeInput = jest.fn();
        const currentInputValueProps = {
          datesInputValue: {
            startDate: {},
            endDate: {},
          },
          guestsInputValue: 1,
          locationInputValue: 'bro',
        };
        const wrapper = getSearchBarShallow({
          onChangeInput,
          ...currentInputValueProps,
        });

        wrapper.instance().setState = jest.fn();
        wrapper.instance().componentDidUpdate(
          {
            datesInputValue: {
              startDate: {},
              endDate: {},
            },
            guestsInputValue: 2,
            locationInputValue: 'lol',
          },
          {}
        );

        expect(wrapper.instance().setState).toHaveBeenCalledWith({
          dates: currentInputValueProps.datesInputValue,
          guests: currentInputValueProps.guestsInputValue,
          location: currentInputValueProps.locationInputValue,
        });
      });
    });

    describe('if `previousState` and `this.state` do not equal', () => {
      it('should call `this.prop.onChangeInput` with the correct arguments', () => {
        const onChangeInput = jest.fn();
        const wrapper = getSearchBarShallow({ onChangeInput });

        wrapper.instance().componentDidUpdate({}, {});

        expect(onChangeInput).toHaveBeenCalledWith(wrapper.instance().state);
      });
    });
  });

  describe('componentWillUnmount', () => {
    describe('if `this.props.isDisplayedAsModal` is `true`', () => {
      it('should not call `global.document.removeEventListener`', () => {
        const wrapper = getSearchBarShallow({ isDisplayedAsModal: true });

        global.document.removeEventListener = jest.fn();
        wrapper.instance().componentWillUnmount();

        expect(global.document.removeEventListener).not.toHaveBeenCalledWith(
          'scroll',
          wrapper.instance().handleScroll
        );
      });
    });

    describe('if `this.props.isDisplayedAsModal` is `false`', () => {
      it('should call `global.document.removeEventListener`', () => {
        const wrapper = getSearchBarShallow({ isDisplayedAsModal: false });

        global.document.removeEventListener = jest.fn();
        wrapper.instance().componentWillUnmount();

        expect(global.document.removeEventListener).toHaveBeenCalledWith(
          'scroll',
          wrapper.instance().handleScroll
        );
      });
    });
  });

  describe('`handleScroll`', () => {
    it('should call `debounce` with the right arguments', () => {
      getSearchBarShallow();

      expect(debounce).toHaveBeenCalledWith(expect.any(Function), 100);
    });

    describe('the debounced function', () => {
      it('should call `getWillLocationDropdownOpenAbove` with the right arguments', () => {
        const willLocationDropdownOpenAbove = true;
        const wrapper = getSearchBarShallow({ willLocationDropdownOpenAbove });

        wrapper.instance().handleScroll();

        expect(getWillLocationDropdownOpenAbove).toHaveBeenCalledWith(
          wrapper.instance().container,
          willLocationDropdownOpenAbove
        );
      });

      it('should call `this.setState` with the right arguments', () => {
        const wrapper = getSearchBarShallow();

        wrapper.instance().setState = jest.fn();
        wrapper.update();
        wrapper.instance().handleScroll();

        expect(wrapper.instance().setState).toHaveBeenCalledWith({
          willLocationDropdownOpenAbove: WILL_THEY_OPEN_ABOVE,
        });
      });
    });
  });

  describe('if `props.isFixed` is true', () => {
    it('should render the right structure', () => {
      const actual = getSearchBar({ isFixed: true });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.isStackable` is true', () => {
    it('should render the right structure', () => {
      const actual = getSearchBar({ isStackable: true });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `isDisplayedAsModal` is true', () => {
    it('should render the right structure', () => {
      const actual = getSearchBar({
        isFixed: false,
        isDisplayedAsModal: true,
      })
        .find(GridColumn)
        .at(1);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.isShowingSummary` is true', () => {
    it('should render the right structure', () => {
      const actual = getSearchBar({ isShowingSummary: true });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.locationOptions` is not passed', () => {
    it('should render the right structure', () => {
      const actual = getSearchBar({ locationOptions: null });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.searchButton` is passed', () => {
    it('should render the right children', () => {
      const actual = getSearchBar({ searchButton: <div /> });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('Interaction: onChange an input', () => {
    it('should persist the value in component state', () => {
      const name = 'location';
      const value = '🍰';
      const wrapper = getSearchBarShallow();
      const input = wrapper.find(Dropdown).first();

      input.simulate('change', name, value);
      const actual = wrapper.state(name);

      expect(actual).toBe(value);
    });

    it('should trigger `props.onChangeInput` when a field changes', () => {
      const name = 'location';
      const value = '🍰';
      const onChangeInput = jest.fn();
      const wrapper = getSearchBarShallow({
        onChangeInput,
      });
      const input = wrapper.find(Dropdown).first();

      input.simulate('change', name, value);

      expect(onChangeInput).toHaveBeenCalledWith({
        dates: DATE_INITIAL_VALUE,
        guests: GUEST_INITIAL_VALUE,
        location: '🍰',
        willLocationDropdownOpenAbove: false,
      });
    });
  });

  describe('Interaction: onSubmit the form', () => {
    it('should call `props.onSubmit` with the state', () => {
      const onSubmit = jest.fn();
      const wrapper = getSearchBarShallow({
        locationOptions,
        onSubmit,
      });
      const form = wrapper.find(Form);

      form.simulate('submit');
      expect(onSubmit).toHaveBeenCalledWith(wrapper.state());
    });
  });
});
