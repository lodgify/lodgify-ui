import React from 'react';
import { shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as ShowOnMobile } from './component';

const props = {
  parent: 'section',
  parentProps: { className: '🚦', width: '🚸' },
  children: 'div',
};

const getShowOnMobile = () => shallow(<ShowOnMobile {...props} />);

describe('<ShowOnMobile />', () => {
  it('it should render the right structure', () => {
    const actual = getShowOnMobile();

    expect(actual).toMatchSnapshot();
  });

  it('should have `displayName` `ShowOnMobile`', () => {
    expectComponentToHaveDisplayName(ShowOnMobile, 'ShowOnMobile');
  });
});
