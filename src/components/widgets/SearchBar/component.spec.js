import React from 'react';
import { shallow, mount } from 'enzyme';
import { Icon, Form } from 'semantic-ui-react';

import { Dropdown } from 'elements/Dropdown';
import { DateRangePicker } from 'elements/DateRangePicker';
import { Button } from 'elements/Button';

import { Component as SearchBar } from './component';
import { guestsOptions, locationOptions } from './mock-data/options';

const getSearchBar = () =>
  shallow(
    <SearchBar
      guestsOptions={guestsOptions}
      locationOptions={locationOptions}
    />
  );
const getForm = () => getSearchBar().find(Form);
const getFormGroup = () => getSearchBar().find(Form.Group);
const getFormField = index =>
  getSearchBar()
    .find(Form.Field)
    .at(index);
const getDropdown = index =>
  getSearchBar()
    .find(Dropdown)
    .at(index);
const getButton = () => getSearchBar().find(Button);

describe('<SearchBar />', () => {
  it('should render a single Semantic UI `Form` component', () => {
    const wrapper = getSearchBar();
    const actual = wrapper.find(Form);
    expect(actual).toHaveLength(1);
  });

  describe('the `Form` component', () => {
    it('should have the right props', () => {
      const wrapper = getForm();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          onSubmit: expect.any(Function),
        })
      );
    });

    it('should render a single Semantic UI `Form.Group` component', () => {
      const wrapper = getForm();
      const actual = wrapper.find(Form.Group);
      expect(actual).toHaveLength(1);
    });
  });

  describe('the `Form.Group` component', () => {
    it('should render four `Form.Field` components', () => {
      const wrapper = getFormGroup();
      const actual = wrapper.find(Form.Field);
      expect(actual).toHaveLength(4);
    });
  });

  describe('the first `Form.Field` component', () => {
    it('should have the right props', () => {
      const wrapper = getFormField(0);
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          width: 'three',
        })
      );
    });

    it('should render a single Lodgify UI `Dropdown` component', () => {
      const wrapper = getFormField(0);
      const actual = wrapper.find(Dropdown);
      expect(actual).toHaveLength(1);
    });
  });

  describe('the first `Dropdown` component', () => {
    it('should have the right props', () => {
      const wrapper = getDropdown(0);
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          icon: 'map pin',
          label: 'Location',
          name: 'location',
          onChange: expect.any(Function),
          options: locationOptions,
        })
      );
    });
  });

  describe('the second `Form.Field` component', () => {
    it('should have the right props', () => {
      const wrapper = getFormField(1);
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          width: 'seven',
        })
      );
    });

    it('should render a single Lodgify UI `DateRangePicker` component', () => {
      const wrapper = getFormField(1);
      const actual = wrapper.find(DateRangePicker);
      expect(actual).toHaveLength(1);
    });
  });

  describe('the `DateRangePicker` component', () => {
    it('should have the right props', () => {
      const wrapper = getSearchBar().find(DateRangePicker);
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          endDatePlaceholderText: 'Check-out',
          getIsDayBlocked: Function.prototype,
          name: 'dates',
          onChange: expect.any(Function),
          startDatePlaceholderText: 'Check-in',
        })
      );
    });
  });

  describe('the third `Form.Field` component', () => {
    it('should have the right props', () => {
      const wrapper = getFormField(2);
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          width: 'three',
        })
      );
    });

    it('should render a single Lodgify UI `Dropdown` component', () => {
      const wrapper = getFormField(2);
      const actual = wrapper.find(Dropdown);
      expect(actual).toHaveLength(1);
    });
  });

  describe('the second `Dropdown` component', () => {
    it('should have the right props', () => {
      const wrapper = getDropdown(1);
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          icon: 'users',
          label: 'Guests',
          name: 'guests',
          onChange: expect.any(Function),
          options: guestsOptions,
        })
      );
    });
  });

  describe('the fourth `Form.Field` component', () => {
    it('should have the right props', () => {
      const wrapper = getFormField(3);
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          width: 'three',
        })
      );
    });

    it('should render a single Lodgify UI `Button` component', () => {
      const wrapper = getFormField(3);
      const actual = wrapper.find(Button);
      expect(actual).toHaveLength(1);
    });
  });

  describe('the `Button` component', () => {
    it('should render a single Semantic UI `Icon` component', () => {
      const wrapper = getButton();
      const actual = wrapper.find(Icon);
      expect(actual).toHaveLength(1);
    });

    it('should render the string `Search`', () => {
      const wrapper = getButton();
      const actual = wrapper.contains('Search');
      expect(actual).toBe(true);
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
      const form = wrapper.children(Form);
      form.simulate('submit');
      expect(onSubmit).toHaveBeenCalledWith(wrapper.state());
    });
  });

  it('should have `displayName` `SearchBar`', () => {
    const actual = SearchBar.displayName;
    expect(actual).toBe('SearchBar');
  });
});
