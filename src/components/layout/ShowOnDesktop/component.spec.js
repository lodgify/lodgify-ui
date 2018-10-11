import React from 'react';
import { shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as ShowOnDesktop } from './component';

const props = {
  children: 'div',
  parent: 'section',
  parentProps: {
    className: 'you shall pass',
  },
};

const getShowOnDesktop = () => shallow(<ShowOnDesktop {...props} />);

describe('<ShowOnDesktop />', () => {
  it('it should render the right structure', () => {
    const actual = getShowOnDesktop();

    expect(actual).toMatchSnapshot();
  });

  it('should have `displayName` `ShowOnDesktop`', () => {
    expectComponentToHaveDisplayName(ShowOnDesktop, 'ShowOnDesktop');
  });
});
