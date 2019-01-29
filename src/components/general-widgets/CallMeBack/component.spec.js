jest.mock('react-dates', () => {
  const { Component } = require('react');

  class SingleDatePicker extends Component {
    render() {
      return <div />;
    }
  }

  return { SingleDatePicker };
});

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

  describe('if there is no `props.propertyOptions`', () => {
    it('should have the correct structure', () => {
      const wrapper = getCallMeBack({ propertyOptions: null });

      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should have `displayName` `CallMeBack`', () => {
    expectComponentToHaveDisplayName(CallMeBack, 'CallMeBack');
  });
});
