import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { VerticalGutters } from 'layout/VerticalGutters';

import { Component as HTML } from './component';

const { headings } = require('./mock-data/examples');

const getHTMLWidget = props => shallow(<HTML {...props} />);

describe('<HTML />', () => {
  it('should have `VerticalGutters` component as a wrapper', () => {
    const wrapper = getHTMLWidget();

    expectComponentToBe(wrapper, VerticalGutters);
  });
  describe('the `VerticalGutters` component', () => {
    it('should have `div` as its only children', () => {
      const wrapper = getHTMLWidget();

      expectComponentToHaveChildren(wrapper, 'div');
    });
  });

  describe('if `props.children` is passed', () => {
    it('should have `VerticalGutters` component as a wrapper', () => {
      const wrapper = getHTMLWidget();

      expectComponentToBe(wrapper, VerticalGutters);
    });

    describe('the `VerticalGutters` component', () => {
      it('should have `div` as its only children', () => {
        const wrapper = getHTMLWidget();

        expectComponentToHaveChildren(wrapper, 'div');
      });
    });

    describe('the `div` element', () => {
      it('should have the children', () => {
        const children = 'hello';
        const wrapper = getHTMLWidget({ children })
          .find('div')
          .first();

        expectComponentToHaveChildren(wrapper, 'div', children);
      });
    });

    describe('the nested `div` element', () => {
      it('should have the right props', () => {
        const wrapper = getHTMLWidget({
          children: headings,
          htmlString: headings,
        })
          .children('div')
          .childAt(0);

        expectComponentToHaveProps(wrapper, {
          dangerouslySetInnerHTML: expect.objectContaining({
            __html: expect.any(String),
          }),
        });
      });
    });
  });

  describe('if `props.children` is not passed', () => {
    it('should have `VerticalGutters` as a wrapper`', () => {
      const wrapper = getHTMLWidget({ headings });

      expectComponentToBe(wrapper, VerticalGutters);
    });

    describe('the `VerticalGutters` component', () => {
      it('should have `div` as its only child', () => {
        const wrapper = getHTMLWidget({ headings });

        expectComponentToHaveChildren(wrapper, 'div');
      });
    });
    describe('the `div` element', () => {
      it('should have the right props', () => {
        const wrapper = getHTMLWidget({ headings }).children();

        expectComponentToHaveProps(wrapper, {
          dangerouslySetInnerHTML: expect.objectContaining({
            __html: expect.any(String),
          }),
        });
      });
    });
  });

  it('should have displayName `HTML`', () => {
    expectComponentToHaveDisplayName(HTML, 'HTML');
  });
});
