import React from 'react';
import { mount } from 'enzyme';

import { Component as Promotion } from './component';

const componentProps = {
  discountAmount: '100%',
  onClick: Function.prototype,
};

const getPromotion = extraProps =>
  mount(<Promotion {...componentProps} {...extraProps} />);

describe('The `Promotion` component', () => {
  it('should have the right structure', () => {
    const actual = getPromotion();

    expect(actual).toMatchSnapshot();
  });

  describe('if `headingText` prop is passed', () => {
    it('should have the right structure', () => {
      const actual = getPromotion({ headingText: 'Hello World!' });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `discountCode` prop is passed', () => {
    it('should have the right structure', () => {
      const actual = getPromotion({ discountCode: '123' });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `backgroundImageUrl` prop is passed', () => {
    it('should have the right structure', () => {
      const actual = getPromotion({ backgroundImageUrl: 'testimage' });

      expect(actual).toMatchSnapshot();
    });
  });
});
