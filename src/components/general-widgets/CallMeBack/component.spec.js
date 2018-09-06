import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import {
  CALL_ME_BACK,
  DATE,
  EMAIL,
  NAME,
  NOTES,
  PHONE,
  PROPERTY,
  SEND,
  TIME_ZONE,
  TIME,
} from 'utils/default-strings';
import { Dropdown } from 'inputs/Dropdown';
import { Form } from 'collections/Form';
import { InputGroup } from 'collections/InputGroup';
import { PhoneInput } from 'inputs/PhoneInput';
import { SingleDatePicker } from 'inputs/SingleDatePicker';
import { TextArea } from 'inputs/TextArea';
import { TextInput } from 'inputs/TextInput';
import { VerticalGutters } from 'layout/VerticalGutters';

import { Component as CallMeBack } from './component';

export const propertyOptions = [
  {
    text: 'La Casa Viva',
    value: 'casaViva',
  },
  {
    text: 'La Casa Muerta',
    value: 'casaMuerta',
  },
  {
    text: 'The White Lodge',
    value: 'whiteLodge',
  },
  {
    text: 'The Black Lodge',
    value: 'blackLodge',
  },
];

export const timeOptions = [
  { text: '10 am', value: '1000' },
  { text: '11 am', value: '1100' },
  { text: '12 noon', value: '1200' },
  { text: '1 pm', value: '1300' },
  { text: '2 pm', value: '1400' },
  { text: '3 pm', value: '1500' },
];

export const timeZoneOptions = [
  { text: 'CET', value: 'cet' },
  { text: 'GMT', value: 'gmt' },
  { text: 'EST', value: 'est' },
];

const getCallMeBack = () =>
  shallow(
    <CallMeBack
      propertyOptions={propertyOptions}
      timeOptions={timeOptions}
      timeZoneOptions={timeZoneOptions}
    />
  );
const getForm = () => getCallMeBack().find(Form);

describe('<CallMeBack />', () => {
  it('should have `VerticalGutters` component as a wrapper', () => {
    const wrapper = getCallMeBack();

    expectComponentToBe(wrapper, VerticalGutters);
  });

  describe('the `VerticalGutters` component', () => {
    it('should have `Form` as its only children', () => {
      const wrapper = getCallMeBack();

      expectComponentToHaveChildren(wrapper, Form);
    });
  });

  describe('the `Form` component', () => {
    it('should have the right props', () => {
      const wrapper = getForm();

      expectComponentToHaveProps(wrapper, {
        headingText: CALL_ME_BACK,
        onSubmit: Function.prototype,
        submitButtonText: SEND,
        validation: expect.any(Object),
      });
    });

    it('should render the right children', () => {
      const wrapper = getForm();

      expectComponentToHaveChildren(
        wrapper,
        InputGroup,
        TextInput,
        InputGroup,
        InputGroup,
        TextArea
      );
    });
  });

  describe('the first `InputGroup`', () => {
    it('should have the right children', () => {
      const wrapper = getForm()
        .find(InputGroup)
        .first();

      expectComponentToHaveChildren(wrapper, TextInput, PhoneInput);
    });
  });

  describe('the Name `TextInput`', () => {
    it('should have the right props', () => {
      const wrapper = getCallMeBack()
        .find(InputGroup)
        .find(TextInput);

      expectComponentToHaveProps(wrapper, {
        label: NAME,
        name: 'name',
      });
    });
  });

  describe('the Phone `PhoneInput`', () => {
    it('should have the right props', () => {
      const wrapper = getCallMeBack().find(PhoneInput);

      expectComponentToHaveProps(wrapper, {
        label: PHONE,
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
        label: EMAIL,
        name: 'email',
      });
    });
  });

  describe('the second `InputGroup`', () => {
    it('should have the right children', () => {
      const wrapper = getForm()
        .find(InputGroup)
        .at(1);

      expectComponentToHaveChildren(wrapper, SingleDatePicker, Dropdown);
    });
  });

  describe('the `SingleDatePicker`', () => {
    it('should have the right props', () => {
      const wrapper = getForm().find(SingleDatePicker);

      expectComponentToHaveProps(wrapper, {
        placeholderText: DATE,
        name: 'date',
      });
    });
  });

  describe('the Time `Dropdown`', () => {
    it('should have the right props', () => {
      const wrapper = getForm()
        .find(InputGroup)
        .at(1)
        .find(Dropdown);

      expectComponentToHaveProps(wrapper, {
        icon: 'clock',
        label: TIME,
        name: 'time',
        options: timeOptions,
      });
    });
  });

  describe('the third `InputGroup`', () => {
    it('should render two `Dropdown`s', () => {
      const wrapper = getForm()
        .find(InputGroup)
        .at(2);

      expectComponentToHaveChildren(wrapper, Dropdown, Dropdown);
    });
  });

  describe('the Time Zone `Dropdown`', () => {
    it('should have the right props', () => {
      const wrapper = getForm()
        .find(InputGroup)
        .at(2)
        .find(Dropdown)
        .first();

      expectComponentToHaveProps(wrapper, {
        label: TIME_ZONE,
        name: 'timeZone',
        options: timeZoneOptions,
      });
    });
  });

  describe('the Time `Dropdown`', () => {
    it('should have the right props', () => {
      const wrapper = getForm()
        .find(InputGroup)
        .at(2)
        .find(Dropdown)
        .at(1);

      expectComponentToHaveProps(wrapper, {
        label: PROPERTY,
        name: 'property',
        options: propertyOptions,
      });
    });
  });

  describe('the Notes `TextArea`', () => {
    it('should have the right props', () => {
      const wrapper = getForm().find(TextArea);

      expectComponentToHaveProps(wrapper, {
        label: NOTES,
        name: 'notes',
      });
    });
  });

  it('should have `displayName` `CallMeBack`', () => {
    expectComponentToHaveDisplayName(CallMeBack, 'CallMeBack');
  });
});
