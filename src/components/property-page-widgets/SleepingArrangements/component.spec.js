import React from 'react';
import { mount } from 'enzyme';

import { Component as SleepingArrangements } from './component';

const sleepingArrangements = [
  { iconName: 'single bed', label: '1 king bed' },
  { iconName: 'single bed', label: '2 single beds' },
  { iconName: 'paw', label: '1 kennel' },
];

const getSleepingArrangements = props =>
  mount(
    <SleepingArrangements
      sleepingArrangements={sleepingArrangements}
      {...props}
    />
  );

describe('<SleepingArrangements />', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getSleepingArrangements();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.headingText` is defined', () => {
    it('should render the right structure', () => {
      const actual = getSleepingArrangements({ headingText: '👥' });

      expect(actual).toMatchSnapshot();
    });
  });
});
