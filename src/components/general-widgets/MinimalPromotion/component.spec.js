import React from 'react';
import { mount } from 'enzyme';

import { testidSelectorFactory } from 'utils/testid';

import { Component as MinimalPromotion } from './component';

const componentProps = {
  discountAmount: '100%',
  discountCode: 'blah',
  onClick: Function.prototype,
};

const getMinimalPromotion = extraProps =>
  mount(<MinimalPromotion {...componentProps} {...extraProps} />);

const testid = testidSelectorFactory('minimalpromotion');

describe('The `MinimalPromotion` component', () => {
  describe('if `backgroundImageUrl` prop is passed', () => {
    it('should have the right structure', () => {
      const component = getMinimalPromotion({ backgroundImageUrl: 'lololol' });

      expect(component.find(testid('image')).length).toEqual(2);
    });
  });

  describe('if `headingText` prop is passed', () => {
    it('should have the right structure', () => {
      const component = getMinimalPromotion({ headingText: 'Hello World!' });

      expect(component.find(testid('heading')).length).toEqual(1);
    });
  });
});
