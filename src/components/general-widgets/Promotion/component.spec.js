import React from 'react';
import { mount } from 'enzyme';

import { Component as Promotion } from './component';

const componentProps = {
  backgroundImage: 'testimage',
  headingText: 'Hello World!',
  discountCode: '123',
  discountAmount: '100%',
  onClick: Function.prototype,
};

const getPromotion = () => mount(<Promotion {...componentProps} />);

describe('The `Promotion` component', () => {
  it('should have the right structure', () => {
    const wrapper = getPromotion();

    expect(wrapper).toMatchSnapshot();
  });
});
