<<<<<<< Updated upstream
import { shallow } from 'enzyme';
import React from 'react';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as CookieAlert } from './component';
=======
import { shallow, mount } from 'enzyme';
import React from 'react';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { ComponentWithResponsive as CookieAlert } from './component';
>>>>>>> Stashed changes

const props = {
  text: 'some text',
  linkUrl: '/',
  linkText: 'A link',
  onClick: jest.fn(),
<<<<<<< Updated upstream
  onClose: jest.fn(),
=======
  onSubmit: jest.fn(),
>>>>>>> Stashed changes
  buttonText: 'There is some text',
  trigger: <div />,
};

const getCookieAlert = () => shallow(<CookieAlert {...props} />);

<<<<<<< Updated upstream
describe('The `CookieAlert` component', () => {
  it('should return the right structure', () => {
    const actual = getCookieAlert();

    expect(actual).toMatchSnapshot();
  });

  it('should have `displayName` `CookieAlert`', () => {
    expectComponentToHaveDisplayName(CookieAlert, 'CookieAlert');
=======
const getWrappedCookieAlert = extraProps => {
  const Child = getCookieAlert().prop('as');

  return mount(<Child isUserOnMobile={extraProps} {...props} />);
};

describe('The `CookieAlert` component', () => {
  describe('if isUserOnMobile is true', () => {
    it('should return the right structure', () => {
      const isUserOnMobile = true;
      const actual = getWrappedCookieAlert(isUserOnMobile);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if isUserOnMobile is false', () => {
    it('should return the right structure', () => {
      const isUserOnMobile = false;
      const actual = getWrappedCookieAlert(isUserOnMobile);

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have `displayName` `CookieAlert`', () => {
    const wrapper = getCookieAlert().prop('as');

    expectComponentToHaveDisplayName(wrapper, 'CookieAlert');
>>>>>>> Stashed changes
  });
});
