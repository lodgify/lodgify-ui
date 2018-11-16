import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

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

const getCallMeBack = extraProps =>
  mount(
    <CallMeBack
      propertyOptions={propertyOptions}
      timeOptions={timeOptions}
      {...extraProps}
    />
  );

describe('<CallMeBack />', () => {
  it('should have the correct structure', () => {
    const wrapper = getCallMeBack();

    expect(wrapper).toMatchSnapshot();
  });

  describe('if `props.successMessage` is passed', () => {
    it('should render the success message above the submit button', () => {
      const wrapper = getCallMeBack({
        successMessage: 'This is a successful message',
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.errorMessage` is passed', () => {
    it('should render the error message above the submit button', () => {
      const wrapper = getCallMeBack({
        errorMessage: 'This is an error message',
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should have `displayName` `CallMeBack`', () => {
    expectComponentToHaveDisplayName(CallMeBack, 'CallMeBack');
  });
});
