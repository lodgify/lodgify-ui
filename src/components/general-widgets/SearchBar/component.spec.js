import React from 'react';
import { shallow, mount } from 'enzyme';
import { Form } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveDisplayName,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Dropdown } from 'inputs/Dropdown';
import { DateRangePicker } from 'inputs/DateRangePicker';
import { Button } from 'elements/Button';
import { Icon } from 'elements/Icon';
import { getArrayOfLengthOfItem } from 'utils/get-array-of-length-of-item';

import { Component as SearchBar } from './component';
import { guestsOptions, locationOptions } from './mock-data/options';

const getSearchBar = props =>
  shallow(
    <SearchBar
      guestsOptions={guestsOptions}
      locationOptions={locationOptions}
      {...props}
    />
  );
describe('<SearchBar />', () => {
  it('should render a single `div` element', () => {
    const wrapper = getSearchBar();
    expectComponentToBe(wrapper, 'div');
  });

  describe('the `div` element', () => {
    it('should have the right props', () => {
      const wrapper = getSearchBar();
      expectComponentToHaveProps(wrapper, { className: '' });
    });

    it('should render the right children', () => {
      const wrapper = getSearchBar();
      expectComponentToHaveChildren(wrapper, Form);
    });

    describe('if `props.isSticky` is true', () => {
      it('should have the right props', () => {
        const wrapper = getSearchBar({ isSticky: true });
        expectComponentToHaveProps(wrapper, { className: 'is-sticky' });
      });
    });
  });

  describe('the `Form` component', () => {
    const getForm = () => getSearchBar().find(Form);

    it('should have the right props', () => {
      const wrapper = getForm();
      expectComponentToHaveProps(wrapper, {
        onSubmit: expect.any(Function),
      });
    });

    it('should render the right children', () => {
      const wrapper = getForm();
      expectComponentToHaveChildren(wrapper, Grid);
    });
  });

  describe('the `Grid` component', () => {
    const getGrid = props => getSearchBar(props).find(Grid);

    it('should render four `GridColumn` components by default', () => {
      const wrapper = getGrid();
      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(4, GridColumn)
      );
    });

    describe('if `props.isShowingSummary` is true', () => {
      it('should render five `GridColumn` components', () => {
        const wrapper = getGrid({ isShowingSummary: true });
        expectComponentToHaveChildren(
          wrapper,
          ...getArrayOfLengthOfItem(5, GridColumn)
        );
      });
    });

    describe('if `props.isShowingLocationDropdown` is false', () => {
      it('should render three `GridColumn` components', () => {
        const wrapper = getGrid({ isShowingLocationDropdown: false });
        expectComponentToHaveChildren(
          wrapper,
          ...getArrayOfLengthOfItem(3, GridColumn)
        );
      });
    });
  });

  describe('the property summary `GridColumn` component', () => {
    const getSummaryFormField = () =>
      getSearchBar({ isShowingSummary: true })
        .find(GridColumn)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getSummaryFormField();
      expectComponentToHaveProps(wrapper, {
        tablet: '6',
        computer: 2,
      });
    });

    it('should render the right children', () => {
      const wrapper = getSummaryFormField();
      expectComponentToHaveChildren(wrapper, Icon);
    });
  });

  describe('the property summary `GridColumn` component when summary and location dropdown is shown', () => {
    const getSummaryFormField = () =>
      getSearchBar({
        isShowingSummary: false,
        isShowingLocationDropdown: false,
      })
        .find(GridColumn)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getSummaryFormField();
      expectComponentToHaveProps(wrapper, {
        tablet: '12',
        computer: 5,
      });
    });

    it('should render the right children', () => {
      const wrapper = getSummaryFormField();

      expectComponentToHaveChildren(wrapper, DateRangePicker);
    });
  });

  describe('the location dropdown `GridColumn` component', () => {
    const getLocationDropdownFormField = () =>
      getSearchBar()
        .find(GridColumn)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getLocationDropdownFormField();
      expectComponentToHaveProps(wrapper, {
        tablet: '6',
        computer: '2',
      });
    });

    it('should render the right children', () => {
      const wrapper = getLocationDropdownFormField();
      expectComponentToHaveChildren(wrapper, Dropdown);
    });
  });

  describe('the first `Dropdown` component', () => {
    it('should have the right props', () => {
      const wrapper = getSearchBar()
        .find(Dropdown)
        .at(0);
      expectComponentToHaveProps(wrapper, {
        icon: 'map pin',
        label: 'Location',
        name: 'location',
        onChange: expect.any(Function),
        options: locationOptions,
      });
    });
  });

  describe('the date range picker `GridColumn` component', () => {
    const getDateRangePickerFormField = () =>
      getSearchBar()
        .find(GridColumn)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getDateRangePickerFormField();
      expectComponentToHaveProps(wrapper, {
        tablet: '12',
        computer: 4,
      });
    });

    it('should render a single Lodgify UI `DateRangePicker` component', () => {
      const wrapper = getDateRangePickerFormField();
      expectComponentToHaveChildren(wrapper, DateRangePicker);
    });
  });

  describe('the `DateRangePicker` component', () => {
    it('should have the right props', () => {
      const wrapper = getSearchBar().find(DateRangePicker);
      expectComponentToHaveProps(wrapper, {
        endDatePlaceholderText: 'Check-out',
        getIsDayBlocked: Function.prototype,
        name: 'dates',
        onChange: expect.any(Function),
        startDatePlaceholderText: 'Check-in',
      });
    });
  });

  describe('the guests dropdown `GridColumn` component', () => {
    const getGuestsDropdownFormField = () =>
      getSearchBar()
        .find(GridColumn)
        .at(2);

    it('should have the right props', () => {
      const wrapper = getGuestsDropdownFormField();
      expectComponentToHaveProps(wrapper, {
        tablet: '6',
        computer: 3,
      });
    });

    it('should render a single Lodgify UI `Dropdown` component', () => {
      const wrapper = getGuestsDropdownFormField();
      expectComponentToHaveChildren(wrapper, Dropdown);
    });
  });

  describe('the second `Dropdown` component', () => {
    it('should have the right props', () => {
      const wrapper = getSearchBar()
        .find(Dropdown)
        .at(1);
      expectComponentToHaveProps(wrapper, {
        icon: 'users',
        label: 'Guests',
        name: 'guests',
        onChange: expect.any(Function),
        options: guestsOptions,
      });
    });
  });

  describe('the button `GridColumn` component', () => {
    const getButtonFormField = props =>
      getSearchBar(props)
        .find(GridColumn)
        .at(3);

    it('should have the right props', () => {
      const wrapper = getButtonFormField();
      expectComponentToHaveProps(wrapper, {
        tablet: '6',
        computer: '3',
      });
    });

    it('should render the right children by default', () => {
      const wrapper = getButtonFormField();
      expectComponentToHaveChildren(wrapper, Button);
    });

    describe('if `props.searchButton` is passed', () => {
      it('should render the right children', () => {
        const wrapper = getButtonFormField({ searchButton: 'Yo!' });
        expectComponentToHaveChildren(wrapper, 'Yo!');
      });
    });
  });

  describe('the `Button` component', () => {
    const getButton = props => getSearchBar(props).find(Button);

    it('should have the right props', () => {
      const wrapper = getButton();
      expectComponentToHaveProps(wrapper, {
        icon: 'search',
        isRounded: true,
      });
    });

    it('should render the right children', () => {
      const wrapper = getButton();
      expectComponentToHaveChildren(wrapper, 'Search');
    });
  });

  describe('Interaction: onChange an input', () => {
    it('should persist the value in component state', () => {
      const name = 'location';
      const value = '🍰';
      const wrapper = getSearchBar();
      const input = wrapper.find(Dropdown).first();
      input.simulate('change', name, value);
      const actual = wrapper.state(name);
      expect(actual).toBe(value);
    });
  });

  describe('Interaction: onSubmit the form', () => {
    it('should call `props.onSubmit` with the state', () => {
      const onSubmit = jest.fn();
      const wrapper = mount(
        <SearchBar
          guestsOptions={guestsOptions}
          locationOptions={locationOptions}
          onSubmit={onSubmit}
        />
      );
      const form = wrapper.find(Form);
      form.simulate('submit');
      expect(onSubmit).toHaveBeenCalledWith(wrapper.state());
    });
  });

  it('should have `displayName` `SearchBar`', () => {
    expectComponentToHaveDisplayName(SearchBar, 'SearchBar');
  });
});
