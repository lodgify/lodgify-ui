import { shallow, mount } from 'enzyme';
import React from 'react';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { ComponentWithResponsive as CookieAlert } from './component';

const props = {
  buttonText: 'There is some text',
  linkText: 'A link',
  linkUrl: '/',
  onAccept: jest.fn(),
  text: 'some text',
};

const getCookieAlert = () => shallow(<CookieAlert {...props} />);

const getWrappedCookieAlert = (isOpen, isUserOnMobile) => {
  const Child = getCookieAlert().prop('as');

  return mount(
    <Child isOpen={isOpen} isUserOnMobile={isUserOnMobile} {...props} />
  );
};

describe('The `CookieAlert` component', () => {
  describe('if `isOpen` is false', () => {
    it('should return the right structure', () => {
      const isOpen = false;
      const isUserOnMobile = false;

      const actual = getWrappedCookieAlert(isOpen, isUserOnMobile);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `isOpen` is true', () => {
    it('should return the right structure', () => {
      const isOpen = true;
      const isUserOnMobile = true;

      const actual = getWrappedCookieAlert(isOpen, isUserOnMobile);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `isUserOnMobile` is true', () => {
    it('should return the right structure', () => {
      const isOpen = true;
      const isUserOnMobile = true;
      const actual = getWrappedCookieAlert(isOpen, isUserOnMobile);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `isUserOnMobile` is false', () => {
    it('should return the right structure', () => {
      const isOpen = true;
      const isUserOnMobile = false;
      const actual = getWrappedCookieAlert(isOpen, isUserOnMobile);

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have `displayName` `CookieAlert`', () => {
    const wrapper = getCookieAlert().prop('as');

    expectComponentToHaveDisplayName(wrapper, 'CookieAlert');
  });
});
