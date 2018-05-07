import React from 'react';
import { shallow, mount } from 'enzyme';
import { Form } from 'semantic-ui-react';

import {
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from 'utils/expect-helpers';
import { getArrayOfLengthOfItem } from 'utils/get-array-of-length-of-item';
import { Dropdown } from 'inputs/Dropdown';
import { DateRangePicker } from 'inputs/DateRangePicker';
import { Button } from 'elements/Button';
import { Icon } from 'elements/Icon';

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
    const actual = wrapper.is('div');
    expect(actual).toBe(true);
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
      expectComponentToHaveChildren(wrapper, Form.Group);
    });
  });

  describe('the `Form.Group` component', () => {
    const getFormGroup = props => getSearchBar(props).find(Form.Group);

    it('should render four `Form.Field` components by default', () => {
      const wrapper = getFormGroup();
      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(4, Form.Field)
      );
    });

    describe('if `props.isShowingSummary` is true', () => {
      it('should render five `Form.Field` components', () => {
        const wrapper = getFormGroup({ isShowingSummary: true });
        expectComponentToHaveChildren(
          wrapper,
          ...getArrayOfLengthOfItem(5, Form.Field)
        );
      });
    });

    describe('if `props.isShowingLocationDropdown` is false', () => {
      it('should render three `Form.Field` components', () => {
        const wrapper = getFormGroup({ isShowingLocationDropdown: false });
        expectComponentToHaveChildren(
          wrapper,
          ...getArrayOfLengthOfItem(3, Form.Field)
        );
      });
    });
  });

  describe('the property summary `Form.Field` component', () => {
    const getSummaryFormField = () =>
      getSearchBar({ isShowingSummary: true })
        .find(Form.Field)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getSummaryFormField();
      expectComponentToHaveProps(wrapper, {
        width: 'three',
      });
    });

    it('should render the right children', () => {
      const wrapper = getSummaryFormField();
      expectComponentToHaveChildren(wrapper, Icon);
    });
  });

  describe('the location dropdown `Form.Field` component', () => {
    const getLocationDropdownFormField = () =>
      getSearchBar()
        .find(Form.Field)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getLocationDropdownFormField();
      expectComponentToHaveProps(wrapper, {
        width: 'three',
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

  describe('the date range picker `Form.Field` component', () => {
    const getDateRangePickerFormField = () =>
      getSearchBar()
        .find(Form.Field)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getDateRangePickerFormField();
      expectComponentToHaveProps(wrapper, {
        width: 'seven',
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

  describe('the guests dropdown `Form.Field` component', () => {
    const getGuestsDropdownFormField = () =>
      getSearchBar()
        .find(Form.Field)
        .at(2);

    it('should have the right props', () => {
      const wrapper = getGuestsDropdownFormField();
      expectComponentToHaveProps(wrapper, {
        width: 'three',
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

  describe('the button `Form.Field` component', () => {
    const getButtonFormField = props =>
      getSearchBar(props)
        .find(Form.Field)
        .at(3);

    it('should have the right props', () => {
      const wrapper = getButtonFormField();
      expectComponentToHaveProps(wrapper, {
        width: 'three',
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
    const actual = SearchBar.displayName;
    expect(actual).toBe('SearchBar');
  });
});
