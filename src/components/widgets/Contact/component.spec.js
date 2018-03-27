import React from 'react';
import { shallow } from 'enzyme';

import { Form } from 'collections/Form';
import { InputGroup } from 'collections/InputGroup';
import { DateRangePicker } from 'elements/DateRangePicker';
import { Dropdown } from 'elements/Dropdown';

import * as options from './mock-data/options';
import { Component as Contact } from './component';

const captchaInputImage = 'someImage';

const getContact = () =>
  shallow(<Contact captchaInputImage={captchaInputImage} {...options} />);
const getForm = () => getContact().find(Form);
const getFirstInputGroup = () =>
  getContact()
    .find(InputGroup)
    .first();
const getSecondInputGroup = () =>
  getContact()
    .find(InputGroup)
    .at(1);
const getThirdInputGroup = () =>
  getContact()
    .find(InputGroup)
    .at(2);

describe('<Contact />', () => {
  it('should render a single Lodgify UI `Form` component', () => {
    const wrapper = getContact();
    const actual = wrapper.find(Form);
    expect(actual).toHaveLength(1);
  });

  describe('the `Form` component', () => {
    it('should have the right props', () => {
      const wrapper = getForm();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          headingText: 'Contact',
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
        'TextArea',
        'InputGroup',
        'CaptchaInput',
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
    it('should a `DateRangePicker` as first child', () => {
      const wrapper = getSecondInputGroup();
      const actual = wrapper.children(DateRangePicker);
      expect(actual).toHaveLength(1);
    });

    it('should a `Dropdown` as second child', () => {
      const wrapper = getSecondInputGroup();
      const actual = wrapper.children(Dropdown);
      expect(actual).toHaveLength(1);
    });
  });

  describe('the `DateRangePicker`', () => {
    it('should have the right props', () => {
      const wrapper = getSecondInputGroup();
      const actual = wrapper.childAt(0).props();
      expect(actual).toEqual(
        expect.objectContaining({
          endDatePlaceholderText: 'Departure',
          name: 'dates',
          startDatePlaceholderText: 'Arrival',
          width: 'eight',
        })
      );
    });
  });

  describe('the Guests `Dropdown`', () => {
    it('should have the right props', () => {
      const wrapper = getSecondInputGroup();
      const actual = wrapper.childAt(1).props();
      expect(actual).toEqual(
        expect.objectContaining({
          icon: 'users',
          label: 'Guests',
          name: 'guests',
          options: options.guestsOptions,
          width: 'four',
        })
      );
    });
  });

  describe('the Comments `TextArea`', () => {
    it('should have the right props', () => {
      const wrapper = getForm();
      const actual = wrapper.childAt(3).props();
      expect(actual).toEqual(
        expect.objectContaining({
          label: 'Comments',
          name: 'comments',
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

  describe('the Property `Dropdown`', () => {
    it('should have the right props', () => {
      const wrapper = getThirdInputGroup();
      const actual = wrapper.childAt(0).props();
      expect(actual).toEqual(
        expect.objectContaining({
          label: 'Property',
          name: 'property',
          options: options.propertyOptions,
        })
      );
    });
  });

  describe('the Room `Dropdown`', () => {
    it('should have the right props', () => {
      const wrapper = getThirdInputGroup();
      const actual = wrapper.childAt(1).props();
      expect(actual).toEqual(
        expect.objectContaining({
          label: 'Room',
          name: 'room',
          options: options.roomOptions,
        })
      );
    });
  });

  describe('the `CaptchaInput`', () => {
    it('should have the right props', () => {
      const wrapper = getForm();
      const actual = wrapper.childAt(5).props();
      expect(actual).toEqual(
        expect.objectContaining({
          image: captchaInputImage,
          label: 'Security Code',
          name: 'captcha',
        })
      );
    });
  });

  it('should have `displayName` `Contact`', () => {
    const actual = Contact.displayName;
    expect(actual).toBe('Contact');
  });
});
