import React from 'react';
import { shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Checkbox } from './component';

const getCheckbox = () => shallow(<Checkbox />);

describe('<Checkbox />', () => {
  it('should return the right structure', () => {
    const actual = getCheckbox();

    expect(actual).toMatchSnapshot();
  });

  it('should have displayName "Checkbox"', () => {
    expectComponentToHaveDisplayName(Checkbox, 'Checkbox');
  });
});
