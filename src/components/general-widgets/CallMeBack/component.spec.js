import React from 'react';
import { shallow } from 'enzyme';

import { Form } from 'collections/Form';
import { InputGroup } from 'collections/InputGroup';
import { Dropdown } from 'inputs/Dropdown';

import * as options from './mock-data/options';
import { Component as CallMeBack } from './component';

const getCallMeBack = () => shallow(<CallMeBack {...options} />);
const getForm = () => getCallMeBack().find(Form);
const getFirstInputGroup = () =>
  getCallMeBack()
    .find(InputGroup)
    .first();
const getSecondInputGroup = () =>
  getCallMeBack()
    .find(InputGroup)
    .at(1);
const getThirdInputGroup = () =>
  getCallMeBack()
    .find(InputGroup)
    .at(2);

describe('<CallMeBack />', () => {
  it('should render a single Lodgify UI `Form` component', () => {
    const wrapper = getCallMeBack();
    const actual = wrapper.find(Form);
    expect(actual).toHaveLength(1);
  });

  describe('the `Form` component', () => {
    it('should have the right props', () => {
      const wrapper = getForm();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          headingText: 'Call me back',
          onSubmit: Function.prototype,
          submitButtonText: 'Send',
        })
      );
    });

    it('should render the right children', () => {
      const children = [
        'InputGroup',
        'TextInput',
        'InputGroup',
        'InputGroup',
        'TextArea',
      ];
      const wrapper = getForm();
      children.forEach((child, index) => {
        const actual = wrapper.childAt(index).name();
        expect(actual).toBe(child);
      });
    });
  });

  describe('the first `InputGroup`', () => {
    it('should render the Name `TextInput` as first child', () => {
      const wrapper = getFirstInputGroup();
      const actual = wrapper.childAt(0).name();
      expect(actual).toBe('TextInput');
    });

    it('should render the Phone `PhoneInput` as first child', () => {
      const wrapper = getFirstInputGroup();
      const actual = wrapper.childAt(1).name();
      expect(actual).toBe('PhoneInput');
    });
  });

  describe('the Name `TextInput`', () => {
    it('should have the right props', () => {
      const wrapper = getFirstInputGroup();
      const actual = wrapper.childAt(0).props();
      expect(actual).toEqual(
        expect.objectContaining({
          label: 'Name',
          name: 'name',
        })
      );
    });
  });

  describe('the Phone `PhoneInput`', () => {
    it('should have the right props', () => {
      const wrapper = getFirstInputGroup();
      const actual = wrapper.childAt(1).props();
      expect(actual).toEqual(
        expect.objectContaining({
          label: 'Phone',
          name: 'phone',
        })
      );
    });
  });

  describe('the Email `TextInput`', () => {
    it('should have the right props', () => {
      const wrapper = getForm();
      const actual = wrapper.childAt(1).props();
      expect(actual).toEqual(
        expect.objectContaining({
          label: 'Email',
          name: 'email',
        })
      );
    });
  });

  describe('the second `InputGroup`', () => {
    it('should render two `Dropdown`s', () => {
      const wrapper = getSecondInputGroup();
      const actual = wrapper.children(Dropdown);
      expect(actual).toHaveLength(2);
    });
  });

  describe('the Date `Dropdown`', () => {
    it('should have the right props', () => {
      const wrapper = getSecondInputGroup();
      const actual = wrapper.childAt(0).props();
      expect(actual).toEqual(
        expect.objectContaining({
          icon: 'calendar',
          label: 'Date',
          name: 'date',
          options: options.dateOptions,
        })
      );
    });
  });

  describe('the Time `Dropdown`', () => {
    it('should have the right props', () => {
      const wrapper = getSecondInputGroup();
      const actual = wrapper.childAt(1).props();
      expect(actual).toEqual(
        expect.objectContaining({
          icon: 'clock',
          label: 'Time',
          name: 'time',
          options: options.timeOptions,
        })
      );
    });
  });

  describe('the third `InputGroup`', () => {
    it('should render two `Dropdown`s', () => {
      const wrapper = getThirdInputGroup();
      const actual = wrapper.children(Dropdown);
      expect(actual).toHaveLength(2);
    });
  });

  describe('the Time Zone `Dropdown`', () => {
    it('should have the right props', () => {
      const wrapper = getThirdInputGroup();
      const actual = wrapper.childAt(0).props();
      expect(actual).toEqual(
        expect.objectContaining({
          label: 'Time Zone',
          name: 'timeZone',
          options: options.timeZoneOptions,
        })
      );
    });
  });

  describe('the Time `Dropdown`', () => {
    it('should have the right props', () => {
      const wrapper = getThirdInputGroup();
      const actual = wrapper.childAt(1).props();
      expect(actual).toEqual(
        expect.objectContaining({
          label: 'Property',
          name: 'property',
          options: options.propertyOptions,
        })
      );
    });
  });

  describe('the Notes `TextArea`', () => {
    it('should have the right props', () => {
      const wrapper = getForm();
      const actual = wrapper.childAt(4).props();
      expect(actual).toEqual(
        expect.objectContaining({
          label: 'Notes',
          name: 'notes',
        })
      );
    });
  });

  it('should have `displayName` `CallMeBack`', () => {
    const actual = CallMeBack.displayName;
    expect(actual).toBe('CallMeBack');
  });
});
