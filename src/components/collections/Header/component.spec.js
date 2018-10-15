import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Header } from './component';
import { navigationItems } from './mock-data/navigationItems';

const logoText = 'someLogoText';

const props = {
  logoText,
  navigationItems,
};

const getHeader = extraProps => mount(<Header {...props} {...extraProps} />);

describe('<Header />', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getHeader();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.isBackgroundFilled` is true', () => {
    it('should render the right structure', () => {
      const actual = getHeader({ isBackgroundFilled: true });

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have `displayName` Header', () => {
    expectComponentToHaveDisplayName(Header, 'Header');
  });
});
