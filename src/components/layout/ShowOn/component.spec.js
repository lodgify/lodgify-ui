import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as ShowOn } from './component';

const getShowOn = props => mount(<ShowOn {...props} />);

describe('<ShowOn />', () => {
  it('should render the right structure', () => {
    const actual = getShowOn();

    expect(actual).toMatchSnapshot();
  });

  describe('if `props.mobile` is `true`', () => {
    it('should render the right structure', () => {
      const actual = getShowOn({ mobile: true });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.tablet` is `true`', () => {
    it('should render the right structure', () => {
      const actual = getShowOn({ tablet: true });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.computer` is `true`', () => {
    it('should render the right structure', () => {
      const actual = getShowOn({ computer: true });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.widescreen` is `true`', () => {
    it('should render the right structure', () => {
      const actual = getShowOn({ widescreen: true });

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have `displayName` `ShowOn`', () => {
    expectComponentToHaveDisplayName(ShowOn, 'ShowOn');
  });
});
