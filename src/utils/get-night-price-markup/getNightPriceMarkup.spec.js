import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Heading } from 'typography/Heading';

import { getNightPriceMarkup } from './getNightPriceMarkup';

const nightPrice = '$250';
const size = 'small';

const getNightPriceMarkupWrapper = () =>
  shallow(<div>{getNightPriceMarkup(nightPrice, size)}</div>);

describe('getNightPriceMarkup', () => {
  it('should render a single `span', () => {
    const wrapper = getNightPriceMarkupWrapper();

    expectComponentToHaveChildren(wrapper, 'span');
  });
  describe('the span', () => {
    it('should have the right children', () => {
      const wrapper = getNightPriceMarkupWrapper().find('span');

      expectComponentToHaveChildren(wrapper, 'from ', Heading, '/night');
    });
  });
  describe('the `Heading` component', () => {
    const getHeading = () => getNightPriceMarkupWrapper().find(Heading);

    it('should have the right props', () => {
      const wrapper = getHeading();

      expectComponentToHaveProps(wrapper, {
        size: size,
      });
    });
    it('should have the right children', () => {
      const wrapper = getHeading();

      expectComponentToHaveChildren(wrapper, nightPrice);
    });
  });
});
