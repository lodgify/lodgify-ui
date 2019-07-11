import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
  expectComponentToHaveChildren,
  expectComponentToBe,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Component as FixedContainer } from './component';

const children = '🚸';

const getFixedContainer = props =>
  shallow(<FixedContainer {...props}>{children}</FixedContainer>);

describe('<FixedContainer />', () => {
  it('should render a single `div`', () => {
    const wrapper = getFixedContainer();

    expectComponentToBe(wrapper, 'div');
  });

  it('should get the right props', () => {
    const fixedProps = {
      bottom: 'bottom',
      left: 'left',
      right: 'right',
      top: 'top',
      zIndex: 3000,
    };
    const wrapper = getFixedContainer(fixedProps);

    expectComponentToHaveProps(wrapper, {
      style: {
        display: 'inline-block',
        position: 'fixed',
        ...fixedProps,
      },
    });
  });

  it('should have the right children', () => {
    const wrapper = getFixedContainer();

    expectComponentToHaveChildren(wrapper, children);
  });

  it('should have displayName `FixedContainer`', () => {
    expectComponentToHaveDisplayName(FixedContainer, 'FixedContainer');
  });
});
