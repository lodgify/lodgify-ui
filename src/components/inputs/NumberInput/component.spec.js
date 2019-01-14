import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as NumberInput } from './component';

describe('<NumberInput />', () => {
  it('should render the right structure', () => {
    const wrapper = mount(<NumberInput />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should have displayName `NumberInput`', () => {
    expectComponentToHaveDisplayName(NumberInput, 'NumberInput');
  });
});
