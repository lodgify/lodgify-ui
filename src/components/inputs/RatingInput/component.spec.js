import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as RatingInput } from './component';

const getRatingInput = () => mount(<RatingInput />);

describe('the `RatingInput` component', () => {
  it('should have the right structure', () => {
    const wrapper = getRatingInput();

    expect(wrapper).toMatchSnapshot();
  });

  it('should have displayName `RatingInput`', () => {
    expectComponentToHaveDisplayName(RatingInput, 'RatingInput');
  });
});
