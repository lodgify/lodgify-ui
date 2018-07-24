import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import { CaptchaInput } from 'inputs/CaptchaInput';
import { DateRangePicker } from 'inputs/DateRangePicker';
import { Dropdown } from 'inputs/Dropdown';
import { Form } from 'collections/Form';
import { InputGroup } from 'collections/InputGroup';
import { PhoneInput } from 'inputs/PhoneInput';
import { TextArea } from 'inputs/TextArea';
import { TextInput } from 'inputs/TextInput';

import { roomOptions, propertyOptions } from './mock-data/options';
import { Component as Contact } from './component';

const captchaInputImage = 'someImage';

const getContact = extraProps =>
  shallow(<Contact captchaInputImage={captchaInputImage} {...extraProps} />);
const getForm = extraProps => getContact(extraProps).find(Form);

describe('<Contact />', () => {
  it('should render a single Lodgify UI `Form` component', () => {
    const wrapper = getContact();

    expectComponentToBe(wrapper, Form);
  });

  describe('the `Form` component', () => {
    it('should have the right props', () => {
      const wrapper = getForm();

      expectComponentToHaveProps(wrapper, {
        headingText: 'Contact',
        onSubmit: Function.prototype,
        submitButtonText: 'Send',
      });
    });

    it('should render the right children', () => {
      const wrapper = getForm();

      expectComponentToHaveChildren(
        wrapper,
        InputGroup,
        TextInput,
        InputGroup,
        TextArea,
        CaptchaInput
      );
    });
  });

  describe('the first `InputGroup`', () => {
    it('should render the right children', () => {
      const wrapper = getForm()
        .find(InputGroup)
        .first();

      expectComponentToHaveChildren(wrapper, TextInput, PhoneInput);
    });
  });

  describe('the Name `TextInput`', () => {
    it('should have the right props', () => {
      const wrapper = getForm()
        .find(TextInput)
        .at(0);

      expectComponentToHaveProps(wrapper, {
        label: 'Name',
        name: 'name',
      });
    });
  });

  describe('the Phone `PhoneInput`', () => {
    it('should have the right props', () => {
      const wrapper = getForm().find(PhoneInput);

      expectComponentToHaveProps(wrapper, {
        label: 'Phone',
        name: 'phone',
      });
    });
  });

  describe('the Email `TextInput`', () => {
    it('should have the right props', () => {
      const wrapper = getForm()
        .find(TextInput)
        .at(1);

      expectComponentToHaveProps(wrapper, {
        label: 'Email',
        name: 'email',
      });
    });
  });

  describe('the second `InputGroup`', () => {
    it('should render the right children', () => {
      const wrapper = getForm()
        .find(InputGroup)
        .at(1);

      expectComponentToHaveChildren(wrapper, DateRangePicker, TextInput);
    });
  });

  describe('the `DateRangePicker`', () => {
    it('should have the right props', () => {
      const wrapper = getForm().find(DateRangePicker);

      expectComponentToHaveProps(wrapper, {
        endDatePlaceholderText: 'Departure',
        name: 'dates',
        startDatePlaceholderText: 'Arrival',
        width: 'eight',
      });
    });
  });

  describe('the Guests `TextInput`', () => {
    it('should have the right props', () => {
      const wrapper = getForm()
        .find(InputGroup)
        .at(1)
        .find(TextInput);

      expectComponentToHaveProps(wrapper, {
        label: 'Guests',
        name: 'guests',
        type: 'number',
        width: 'four',
      });
    });
  });

  describe('the Comments `TextArea`', () => {
    it('should have the right props', () => {
      const wrapper = getForm().find(TextArea);

      expectComponentToHaveProps(wrapper, {
        label: 'Comments',
        name: 'comments',
      });
    });
  });

  describe('if `props.propertyOptions` is passed', () => {
    const getFormWithPropertyOptions = () => getForm({ propertyOptions });

    it('should render the right children', () => {
      const wrapper = getFormWithPropertyOptions();

      expectComponentToHaveChildren(
        wrapper,
        InputGroup,
        TextInput,
        InputGroup,
        TextArea,
        InputGroup,
        CaptchaInput
      );
    });

    describe('the third `InputGroup`', () => {
      it('should render the right children', () => {
        const wrapper = getFormWithPropertyOptions()
          .find(InputGroup)
          .at(2);

        expectComponentToHaveChildren(wrapper, Dropdown);
      });
    });

    describe('the `Dropdown`', () => {
      it('should have the right props', () => {
        const wrapper = getFormWithPropertyOptions().find(Dropdown);

        expectComponentToHaveProps(wrapper, {
          label: 'Property',
          name: 'property',
          onChange: expect.any(Function),
          options: propertyOptions,
        });
      });
    });
  });

  describe('if `props.roomOptions` is passed', () => {
    const getFormWithRoomOptions = () => getForm({ roomOptions });

    it('should render the right children', () => {
      const wrapper = getFormWithRoomOptions();

      expectComponentToHaveChildren(
        wrapper,
        InputGroup,
        TextInput,
        InputGroup,
        TextArea,
        InputGroup,
        CaptchaInput
      );
    });

    describe('the third `InputGroup`', () => {
      it('should render the right children', () => {
        const wrapper = getFormWithRoomOptions()
          .find(InputGroup)
          .at(2);

        expectComponentToHaveChildren(wrapper, Dropdown);
      });
    });

    describe('the `Dropdown`', () => {
      it('should have the right props', () => {
        const wrapper = getFormWithRoomOptions().find(Dropdown);

        expectComponentToHaveProps(wrapper, {
          label: 'Room',
          name: 'room',
          onChange: expect.any(Function),
          options: roomOptions,
        });
      });
    });
  });

  describe('if `propertyOptions` and `roomOptions` are passed', () => {
    describe('the third `InputGroup`', () => {
      it('should render the right children', () => {
        const wrapper = getForm({ propertyOptions, roomOptions })
          .find(InputGroup)
          .at(2);

        expectComponentToHaveChildren(wrapper, Dropdown, Dropdown);
      });
    });
  });

  describe('the `CaptchaInput`', () => {
    it('should have the right props', () => {
      const wrapper = getForm().find(CaptchaInput);

      expectComponentToHaveProps(wrapper, {
        image: captchaInputImage,
        label: 'Security Code',
        name: 'captcha',
      });
    });
  });

  it('should have `displayName` `Contact`', () => {
    expectComponentToHaveDisplayName(Contact, 'Contact');
  });
});
