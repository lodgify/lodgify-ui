import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Message } from './component';

describe('<Message />', () => {
  it('should render the right structure', () => {
    const actual = mount(<Message>Some children</Message>);

    expect(actual).toMatchSnapshot();
  });

  it('should have the right `displayName`', () => {
    expectComponentToHaveDisplayName(Message, 'Message');
  });
});
