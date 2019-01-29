import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as TextPlaceholder } from './component';

const getTextPlaceholder = () => mount(<TextPlaceholder />);

describe('<TextPlaceholder />', () => {
  it('should render a single Semantic UI `TextPlaceholder` component', () => {
    const actual = getTextPlaceholder();

    expect(actual).toMatchSnapshot();
  });

  it('should have displayName `TextPlaceholder`', () => {
    expectComponentToHaveDisplayName(TextPlaceholder, 'TextPlaceholder');
  });
});
