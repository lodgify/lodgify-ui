import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Header } from './component';
import {
  navigationItems,
  largeNavigationItems,
} from './mock-data/navigationItems';

const logoText = 'someLogoText';

const props = {
  logoText,
  navigationItems,
  dateRangePickerLocaleCode: 'ko',
};

const getHeader = (props, extraProps) =>
  mount(<Header {...props} {...extraProps} />);

describe('<Header />', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getHeader(props);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.isBackgroundFilled` is true', () => {
    it('should render the right structure', () => {
      const actual = getHeader(props, { isBackgroundFilled: true });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if navigation items exceed the header max width', () => {
    it('should render the right structure', () => {
      const props = {
        logoText,
        navigationItems: largeNavigationItems,
        dateRangePickerLocaleCode: 'ko',
      };
      const actual = getHeader(props, { isBackgroundFilled: true });

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have `displayName` Header', () => {
    expectComponentToHaveDisplayName(Header, 'Header');
  });
});
