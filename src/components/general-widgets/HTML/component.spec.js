jest.mock('dompurify');

import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';
import DOMPurify from 'dompurify';

const SANITIZED_STRING = '🤬';

DOMPurify.sanitize.mockReturnValue(SANITIZED_STRING);

import { Component as HTML } from './component';

const { headings } = require('./mock-data/examples');

const getHTMLWidget = props => shallow(<HTML {...props} />);

describe('<HTML />', () => {
  it('should have `div` component as a wrapper', () => {
    const wrapper = getHTMLWidget();

    expectComponentToBe(wrapper, 'div');
  });

  describe('if `props.children` is passed', () => {
    it('should have `div` component as a wrapper', () => {
      const wrapper = getHTMLWidget();

      expectComponentToBe(wrapper, 'div');
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
          .at(0);

        expectComponentToHaveProps(wrapper, {
          className: 'html-container',
          dangerouslySetInnerHTML: expect.objectContaining({
            __html: expect.any(String),
          }),
        });
      });
    });
  });

  describe('if `props.children` is not passed', () => {
    it('should have `div` as a wrapper`', () => {
      const wrapper = getHTMLWidget({ headings });

      expectComponentToBe(wrapper, 'div');
    });
    describe('the `div` element', () => {
      it('should have the right props', () => {
        const wrapper = getHTMLWidget({ headings });

        expectComponentToHaveProps(wrapper, {
          className: 'html-container',
          dangerouslySetInnerHTML: expect.objectContaining({
            __html: expect.any(String),
          }),
        });
      });
    });
  });

  describe('`componentDidMount`', () => {
    it('should call `this.setState` with the correct shape', () => {
      const wrapper = getHTMLWidget();

      wrapper.instance().setState = jest.fn();
      wrapper.instance().componentDidMount();

      expect(wrapper.instance().setState).toHaveBeenCalledWith({
        cleanHTMLString: SANITIZED_STRING,
      });
    });

    it('should call `DOMPurify.sanitize` with the correct arguments', () => {
      expect(DOMPurify.sanitize).toHaveBeenCalledWith('', {
        ADD_ATTR: ['target'],
      });
    });
  });

  it('should have displayName `HTML`', () => {
    expectComponentToHaveDisplayName(HTML, 'HTML');
  });
});
