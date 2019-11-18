import React from 'react';
import { act } from 'react-dom/test-utils';
import { shallow } from 'enzyme';

import { testidSelectorFactory } from 'utils/testid';

import { Component as MultiParagraph } from './component';

const testid = testidSelectorFactory('multiparagraph');
const mountMultiParagraph = props => shallow(<MultiParagraph {...props} />);

describe('MultiParagraph', () => {
  describe('Pass content with lines', () => {
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

        expect(component.find(testid('paragraph', '*')).length).toEqual(index);
      });
    });
  });
  describe('When the content is bigger than 300px', () => {
    const content = 'foo\n'.repeat(15);
    const component = mountMultiParagraph({ content });

    it(`should show 'Read More' button`, () => {
      expect(component.exists(testid('button-read-more')));
    });
    describe(`when click on the 'read more' button`, () => {
      act(() => {
        component.find(testid('button-read-more')).simulate('click');
      });

      it(`the main container shouldn't hide the text`, () => {
        const container = component.find(testid());

        expect(container.hasClass('open')).toBe(true);
      });
      it(`the 'read more' button disappear`, () => {
        expect(component.exists(testid('button-read-more'))).toEqual(false);
      });
    });
  });
});
