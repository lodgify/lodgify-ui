import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component } from './component';

const getTextInputSegment = () =>
  mount(<Component heading="👤" textInputLabel="🏷" />);

describe('<TextInputSegment />', () => {
  it('should render the right structure', () => {
    const actual = getTextInputSegment();

    expect(actual).toMatchSnapshot();
  });

  it('should have the displayName `TextInputSegment`', () => {
    expectComponentToHaveDisplayName(Component, 'TextInputSegment');
  });
});
