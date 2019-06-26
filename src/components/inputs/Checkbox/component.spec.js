import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Checkbox } from './component';

const getCheckbox = props => mount(<Checkbox {...props} />);

describe('<Checkbox />', () => {
  it('should return the right structure', () => {
    const actual = getCheckbox();

    expect(actual).toMatchSnapshot();
  });

  describe('if `props.isLabelLeft` is true', () => {
    it('should return the right structure', () => {
      const actual = getCheckbox({ isLabelLeft: true });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.isFluid` is true', () => {
    it('should return the right structure', () => {
      const actual = getCheckbox({ isFluid: true });

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have displayName "Checkbox"', () => {
    expectComponentToHaveDisplayName(Checkbox, 'Checkbox');
  });
});
