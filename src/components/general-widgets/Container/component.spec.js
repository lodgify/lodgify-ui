import React from 'react';
import { shallow } from 'enzyme';

import { expectComponentToHaveChildren } from 'lib/expect-helpers';
import { OwnerLogin } from 'widgets/OwnerLogin';

import { Component as Container } from './component';

const getContainer = () => shallow(<Container />);

describe('<Container />', () => {
  it('should render a single `div` element', () => {
    const wrapper = getContainer();
    const actual = wrapper.is('div');
    expect(actual).toBe(true);
  });

  it('should not render children if none passed', () => {
    const wrapper = getContainer();
    expectComponentToHaveChildren(wrapper);
  });

  it('should render children if passed', () => {
    const wrapper = shallow(
      <Container>
        <OwnerLogin />
      </Container>
    );
    expectComponentToHaveChildren(wrapper, OwnerLogin);
  });
});
