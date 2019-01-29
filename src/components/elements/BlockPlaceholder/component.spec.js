import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as BlockPlaceholder } from './component';

const getBlockPlaceholder = () => mount(<BlockPlaceholder />);

describe('<BlockPlaceholder />', () => {
  it('should have the right structure', () => {
    const actual = getBlockPlaceholder();

    expect(actual).toMatchSnapshot();
  });

  it('should have displayName `BlockPlaceholder`', () => {
    expectComponentToHaveDisplayName(BlockPlaceholder, 'BlockPlaceholder');
  });
});
