import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as TextInput } from './component';

describe('<TextInput />', () => {
  it('should render the right structure', () => {
    const wrapper = mount(<TextInput />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should have displayName `TextInput`', () => {
    expectComponentToHaveDisplayName(TextInput, 'TextInput');
  });
});
