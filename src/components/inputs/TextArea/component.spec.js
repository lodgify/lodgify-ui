import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as TextArea } from './component';

describe('<TextArea />', () => {
  it('should render the right structure', () => {
    const wrapper = mount(<TextArea />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should have displayName `TextArea`', () => {
    expectComponentToHaveDisplayName(TextArea, 'TextArea');
  });
});
