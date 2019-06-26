import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as RangeInputSegment } from './component';

const getRangeInputSegment = () =>
  mount(<RangeInputSegment description="🈺" heading="🈵" range={{}} />);

describe('<RangeInputSegment />', () => {
  it('should return the right structure', () => {
    const actual = getRangeInputSegment();

    expect(actual).toMatchSnapshot();
  });

  it('should have the display name `RangeInputSegment`', () => {
    expectComponentToHaveDisplayName(RangeInputSegment, 'RangeInputSegment');
  });
});
