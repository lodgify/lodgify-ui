import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as CaptchaInput } from './component';

describe('<CaptchaInput />', () => {
  it('should render the right structure', () => {
    const image = 'someUrl';
    const wrapper = mount(<CaptchaInput image={image} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should have displayName `CaptchaInput`', () => {
    expectComponentToHaveDisplayName(CaptchaInput, 'CaptchaInput');
  });
});
