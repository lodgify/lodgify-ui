import React from 'react';
import { shallow } from 'enzyme';
import { Form } from 'semantic-ui-react';

import { GridColumn } from 'layout/GridColumn';
import { Dropdown } from 'elements/Dropdown';
import { DateRangePicker } from 'elements/DateRangePicker';
import { Button } from 'elements/Button';
import { Icon } from 'elements/Icon';

import { Component as PropertyFooter } from './component';
import { guestsOptions, locationOptions } from './mock-data/options';

const getPropertyFooter = () =>
  shallow(
    <PropertyFooter
      guestsOptions={guestsOptions}
      locationOptions={locationOptions}
    />
  );
const getGridColumn = () => getPropertyFooter().find(GridColumn);
const getForm = () => getPropertyFooter().find(Form);
const getFormGroup = () => getPropertyFooter().find(Form.Group);
const getFormField = index =>
  getPropertyFooter()
    .find(Form.Field)
    .at(index);
const getDropdown = index =>
  getPropertyFooter()
    .find(Dropdown)
    .at(index);
const getButton = () => getPropertyFooter().find(Button);

describe('<PropertyFooter />', () => {
  it('should render a single Semantic UI `Form` component', () => {
    const wrapper = getPropertyFooter();
    const actual = wrapper.find(Form);
    expect(actual).toHaveLength(1);
  });

  describe('the `GridColumn` component', () => {
    it('should have the right props', () => {
      const wrapper = getGridColumn();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          width: 12,
        })
      );
    });
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
          width: 'four',
        })
      );
    });

    it('should render a single Lodgify UI `Icon` component', () => {
      const wrapper = getFormField(0);
      const actual = wrapper.find(Icon);
      expect(actual).toHaveLength(1);
    });
  });

  describe('the second `Form.Field` component', () => {
    it('should have the right props', () => {
      const wrapper = getFormField(1);
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          width: 'four',
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
      const wrapper = getPropertyFooter().find(DateRangePicker);
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
          width: 'two',
        })
      );
    });

    it('should render a single Lodgify UI `Dropdown` component', () => {
      const wrapper = getFormField(2);
      const actual = wrapper.find(Dropdown);
      expect(actual).toHaveLength(1);
    });
  });

  describe('the `Dropdown` component', () => {
    it('should have the right props', () => {
      const wrapper = getDropdown(0);
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
          width: 'two',
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
    it('should have the right props', () => {
      const wrapper = getButton();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          isRounded: true,
        })
      );
    });

    it('should not render a single Semantic UI `Icon` component', () => {
      const wrapper = getButton();
      const actual = wrapper.find(Icon);
      expect(actual).toHaveLength(0);
    });

    it('should render the string `Check Availability`', () => {
      const wrapper = getButton();
      const actual = wrapper.contains('Check Availability');
      expect(actual).toBe(true);
    });
  });

  describe('Interaction: onChange an input', () => {
    it('should persist the value in component state', () => {
      const name = 'location';
      const value = '🍰';
      const wrapper = getPropertyFooter();
      const input = wrapper.find(Dropdown).first();
      input.simulate('change', name, value);
      const actual = wrapper.state(name);
      expect(actual).toBe(value);
    });
  });

  describe('Interaction: onSubmit the form', () => {
    it('should call `props.onSubmit` with the state', () => {
      const onSubmit = jest.fn();
      const wrapper = shallow(
        <PropertyFooter
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

  it('should have `displayName` `PropertyFooter`', () => {
    const actual = PropertyFooter.displayName;
    expect(actual).toBe('PropertyFooter');
  });
});
