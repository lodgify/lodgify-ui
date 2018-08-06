import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Component as HTML } from './component';

const { headings } = require('./mock-data/examples');

const getHTMLWidget = props => shallow(<HTML {...props} />);

describe('<HTML />', () => {
  it('should render a single `div` element', () => {
    const wrapper = getHTMLWidget();

    expectComponentToBe(wrapper, 'div');
  });

  describe('if `props.children` is passed', () => {
    it('should have the right children', () => {
      const children = 'hello';
      const wrapper = getHTMLWidget({ children });

      expectComponentToHaveChildren(wrapper, 'div', children);
    });

    describe('the nested `div` element', () => {
      it('should have the right props', () => {
        const wrapper = getHTMLWidget({
          children: headings,
          htmlString: headings,
        })
          .children('div')
          .first();

        expectComponentToHaveProps(wrapper, {
          dangerouslySetInnerHTML: expect.objectContaining({
            __html: expect.any(String),
          }),
        });
      });
    });
  });

  describe('if `props.children` is not passed', () => {
    it('should render it', () => {
      const wrapper = getHTMLWidget({ headings });

      expectComponentToBe(wrapper, 'div');
    });
  });

  it('should have displayName `HTML`', () => {
    expectComponentToHaveDisplayName(HTML, 'HTML');
  });
});
