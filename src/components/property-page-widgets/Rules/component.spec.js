import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Rules } from './component';

const checkInTime = '09.00 PM';
const checkOutTime = '12.00 AM';
const rules = [];

const props = {
  checkInTime,
  checkOutTime,
  rules,
};

const getRules = otherProps => mount(<Rules {...props} {...otherProps} />);

describe('<Rules />', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getRules();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.rules` length > 0', () => {
    it('should render the right structure', () => {
      const actual = getRules({
        rules: [
          'Smoking not allowed',
          'No parties or events',
          'Pets are allowed',
        ],
      });

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have displayName `Rules`', () => {
    expectComponentToHaveDisplayName(Rules, 'Rules');
  });
});
