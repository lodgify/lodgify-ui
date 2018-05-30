import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveProps,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Subheading } from './component';

const children = '🚸';

const getSubheading = () => shallow(<Subheading>{children}</Subheading>);

describe('<Subheading />', () => {
  it('should render a single `span` element', () => {
    const wrapper = getSubheading();
    expectComponentToBe(wrapper, 'span');
  });

  it('should get the right props', () => {
    const wrapper = getSubheading();
    expectComponentToHaveProps(wrapper, { className: 'ui sub header' });
  });

  it('should get the right children', () => {
    const wrapper = getSubheading();
    expectComponentToHaveChildren(wrapper, children);
  });

  it('should have displayName `Subheading`', () => {
    expectComponentToHaveDisplayName(Subheading, 'Subheading');
  });
});
