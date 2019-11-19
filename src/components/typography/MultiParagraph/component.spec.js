import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';

import { testidSelectorFactory } from 'utils/testid';

import { Component as MultiParagraph } from './component';

const testid = testidSelectorFactory('multiparagraph');
const mountMultiParagraph = props => mount(<MultiParagraph {...props} />);

const mockScrollHeight = height => {
  Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
    configurable: true,
    value: height,
  });
};

act(() => {
  describe('MultiParagraph', () => {
    describe('pass content with lines', () => {
      it('it will contain as much Paragraph as lines', () => {
        const tests = [
          '',
          'foo',
          `bar
          bar`,
          `foo
          bar
          foo`,
        ];

        tests.forEach((content, index) => {
          const component = mountMultiParagraph({ content });

          expect(component.find(testid('paragraph', '*')).length).toEqual(
            index
          );
        });
      });
    });

    describe(`pass content and 'isHtml' prop`, () => {
      it('should have the proper testid', () => {
        const component = mountMultiParagraph({
          content: '<p>foo</p>',
          isHtml: true,
        });

        expect(component.find(testid('html-paragraph')).length).toEqual(1);
      });
    });

    describe('when the content is smaller than 300px', () => {
      const content = 'foo\n'.repeat(2);
      const component = mountMultiParagraph({ content });

      it(`should hide 'Read more' button`, () => {
        component.update();
        expect(component.exists(testid('button-read-more'))).toEqual(false);
      });

      describe('and then the content change to a bigger one', () => {
        beforeAll(() => {
          mockScrollHeight(500);
        });
        it(`should show 'Read more' button`, () => {
          const biggerContent = 'foo\n'.repeat(14);

          component.setProps({ content: biggerContent });
          component.update();

          expect(component.exists(testid('button-read-more'))).toEqual(true);
        });
      });
    });

    describe('when the content is bigger than 300px', () => {
      beforeAll(() => {
        mockScrollHeight(500);
      });

      it(`should show 'Read More' button`, () => {
        const content = 'foo\n'.repeat(15);
        const component = mountMultiParagraph({ content });

        expect(component.exists(testid('button-read-more'))).toEqual(true);
      });
    });

    describe(`when click on the 'read more' button`, () => {
      beforeAll(() => {
        mockScrollHeight(500);
      });

      it(`the main container shouldn't hide the text and hide the button`, () => {
        const content = 'foo\n'.repeat(15);
        const component = mountMultiParagraph({ content });

        component.find(testid('button-read-more')).simulate('click');
        component.update();

        const container = component.find(testid());

        expect(container.hasClass('open')).toBe(true);
        expect(component.exists(testid('button-read-more'))).toEqual(false);
      });
    });
  });
});
