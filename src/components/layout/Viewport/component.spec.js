import React from 'react';
import { shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Viewport } from './component';

const children = '🚸';

const getViewport = () => shallow(<Viewport>{children}</Viewport>);

describe('<Viewport />', () => {
  it('should render a the right structure', () => {
    const actual = getViewport();

    expect(actual).toMatchSnapshot();
  });

  it('should have displayName `Viewport`', () => {
    expectComponentToHaveDisplayName(Viewport, 'Viewport');
  });
});
