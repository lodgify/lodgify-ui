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
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { Form } from 'semantic-ui-react';
import { debounce } from 'debounce';
import moment from 'moment';

import { GridColumn } from 'layout/GridColumn';

import { Component as SearchBar } from './component';
import { locationOptions } from './mock-data/options';
import { getWillLocationDropdownOpenAbove } from './utils/getWillLocationDropdownOpenAbove';
import { SearchModal } from './components/SearchModal';

const INITIAL_VALUE = 'some value';
const DATE_INITIAL_VALUE = {
  startDate: moment(0),
  endDtate: moment(0),
};

const GUEST_INITIAL_VALUE = 1;
const WILL_THEY_OPEN_ABOVE = false;

debounce.mockImplementation(func => func);
getWillLocationDropdownOpenAbove.mockReturnValue(WILL_THEY_OPEN_ABOVE);
const map = {};

global.document.addEventListener = jest.fn((event, cb) => {
  map[event] = cb;
});

const props = {
  dateRangePickerLocaleCode: 'ko',
  locationOptions,
  datesInputValue: DATE_INITIAL_VALUE,
  guestsInputValue: GUEST_INITIAL_VALUE,
  locationInputValue: INITIAL_VALUE,
};

const getSearchBar = overrideProps =>
  mount(<SearchBar {...props} {...overrideProps} />);

describe('<SearchBar />', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getSearchBar();

      expect(actual).toMatchSnapshot();
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

  describe('on window scroll', () => {
    it('getWillLocationDropdownOpenAbove should been called', () => {
      getSearchBar({
        searchButton: <div />,
        willLocationDropdownOpenAbove: true,
      });

      act(() => {
        map.scroll();
      });

      expect(getWillLocationDropdownOpenAbove).toHaveBeenCalledWith(
        expect.any(Object),
        true
      );
    });
  });

  describe('on input change in the modal', () => {
    it('changeInput should been called', () => {
      const onChangeInput = jest.fn();
      const actual = getSearchBar({
        searchButton: <div />,
        isDisplayedAsModal: true,
        onChangeInput,
      });

      act(() => {
        actual
          .find(SearchModal)
          .props()
          .onInputChange();
      });

      expect(onChangeInput).toHaveBeenCalled();
    });
  });

  describe('Interaction: onSubmit the form', () => {
    it('should call `props.onSubmit` with the state', () => {
      const onSubmit = jest.fn();
      const wrapper = getSearchBar({
        locationOptions,
        onSubmit,
        locationInputValue: 'boh',
      });
      const form = wrapper.find(Form);

      expect(form.props().onSubmit).toBeInstanceOf(Function);

      act(() => {
        form.simulate('submit');
      });
      expect(onSubmit).toHaveBeenCalledWith({
        location: 'boh',
        dates: DATE_INITIAL_VALUE,
        guests: GUEST_INITIAL_VALUE,
      });
    });
    it('should call `props.onSubmit` with the state', () => {
      const onSubmit = jest.fn();
      const wrapper = getSearchBar({
        locationOptions,
        isFixed: true,
        onSubmit,
        locationInputValue: 'boh',
      });
      const form = wrapper.find(Form);

      expect(form.props().onSubmit).toBeInstanceOf(Function);

      act(() => {
        form.simulate('submit');
      });

      expect(onSubmit).toHaveBeenCalledWith({
        location: 'boh',
        dates: DATE_INITIAL_VALUE,
        guests: GUEST_INITIAL_VALUE,
      });
    });
  });
});
