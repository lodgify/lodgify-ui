import React from 'react';
import { shallow } from 'enzyme';
import { Segment } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Heading } from 'typography/Heading';

import { getHeadingMarkup } from './getHeadingMarkup';

const propertyName = 'USS-Enterprise';

const getMarkupAsRenderedComponent = () =>
  shallow(<div>{getHeadingMarkup(propertyName)}</div>).children();

describe('getHeadingMarkup', () => {
  it('should render a single `Segment`', () => {
    const wrapper = getMarkupAsRenderedComponent();

    expectComponentToBe(wrapper, Segment);
  });

  describe('the `Segment` component', () => {
    it('should have the right children', () => {
      const wrapper = getMarkupAsRenderedComponent().find(Segment);

      expectComponentToHaveChildren(wrapper, Heading);
    });
  });

  describe('the `Heading` component', () => {
    it('should have the right children', () => {
      const wrapper = getMarkupAsRenderedComponent().find(Heading);

      expectComponentToHaveChildren(wrapper, propertyName);
    });
  });
});
