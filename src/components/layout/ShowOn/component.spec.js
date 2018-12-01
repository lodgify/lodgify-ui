import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as ShowOn } from './component';

const propsWithDevices = {
  children: 'div',
  parent: 'section',
  parentProps: {
    className: '',
  },
  mobile: true,
  tablet: true,
  computer: true,
  widescreen: true,
};

const propsWithoutDevices = {
  children: 'div',
  parent: 'section',
  parentProps: {
    className: '',
  },
  mobile: false,
  tablet: false,
  computer: false,
  widescreen: false,
};

const getShowOn = props => mount(<ShowOn {...props} />);

describe('<ShowOn />', () => {
  it('it should render the right structure', () => {
    const actual = getShowOn(propsWithDevices);

    expect(actual).toMatchSnapshot();
  });

  describe('if all devices are set as false', () => {
    it('should only return `hide-on-all-devices` as default class for the wrapper', () => {
      const actual = getShowOn(propsWithoutDevices);

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have `displayName` `ShowOn`', () => {
    expectComponentToHaveDisplayName(ShowOn, 'ShowOn');
  });
});
