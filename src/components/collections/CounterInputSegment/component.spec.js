import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as CounterInputSegment } from './component';

const getCounterInputSegment = () =>
  mount(
    <CounterInputSegment
      counters={[
        { name: 'bedrooms', labelText: 'Bedrooms' },
        { name: 'bathrooms', labelText: 'Bathrooms' },
      ]}
      heading="🈵"
    />
  );

describe('<CounterInputSegment />', () => {
  it('should return the right structure', () => {
    const actual = getCounterInputSegment();

    expect(actual).toMatchSnapshot();
  });

  it('should have the display name `CounterInputSegment`', () => {
    expectComponentToHaveDisplayName(
      CounterInputSegment,
      'CounterInputSegment'
    );
  });
});
