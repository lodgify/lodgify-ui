import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { Paragraph } from 'typography/Paragraph';

import { getQuoteSource } from './utils/getQuoteSource';
import { Component as Quote } from './component';

export const quoteText = 'someText';
export const quoteSource = 'someName';
export const quoteDateTime = 'someDate';

const props = {
  quoteText,
  quoteSource,
  quoteDateTime,
};

const getQuote = () => shallow(<Quote {...props} />);

describe('<Quote />', () => {
  it('should render a single `blockquote`', () => {
    const wrapper = getQuote();
    const actual = wrapper.is('blockquote');
    expect(actual).toBe(true);
  });

  describe('the `blockquote` element', () => {
    it('should default to adding a className of `ui quote`', () => {
      const wrapper = getQuote();
      expectComponentToHaveProps(wrapper, {
        className: 'ui quote',
      });
    });

    it('should render the right children', () => {
      const wrapper = getQuote();
      expectComponentToHaveChildren(wrapper, Grid);
    });
  });

  describe('the `Grid` component', () => {
    it('should render a single Lodgify UI `GridColumn` component', () => {
      const wrapper = getQuote().find(Grid);
      expectComponentToHaveChildren(wrapper, GridRow, GridRow);
    });
  });

  describe('the first `GridRow` component', () => {
    it('should render a single `GridColumn` component', () => {
      const wrapper = getQuote()
        .find(GridRow)
        .at(0);
      expectComponentToHaveChildren(wrapper, GridColumn);
    });
  });

  describe('the first `GridColumn` component', () => {
    it('should render a single `Paragraph` component', () => {
      const wrapper = getQuote()
        .find(GridColumn)
        .at(0);
      expectComponentToHaveChildren(wrapper, Paragraph);
    });
  });

  describe('this first `Paragraph` component', () => {
    it('should have the right children', () => {
      const wrapper = getQuote()
        .find(Paragraph)
        .at(0);
      expectComponentToHaveChildren(wrapper, quoteText);
    });
  });

  describe('the second `GridRow` component', () => {
    const getSecondGridRow = () =>
      getQuote()
        .find(GridRow)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getSecondGridRow();
      expectComponentToHaveProps(wrapper, {
        horizontalAlignContent: 'right',
      });
    });

    it('should render a `GridColumn` component', () => {
      const wrapper = getSecondGridRow();
      expectComponentToHaveChildren(wrapper, GridColumn);
    });
  });

  describe('the second `GridColumn` component', () => {
    it('should render a `Paragraph` component', () => {
      const wrapper = getQuote()
        .find(GridColumn)
        .at(1);
      expectComponentToHaveChildren(wrapper, Paragraph);
    });
  });

  describe('the second `Paragraph` component', () => {
    const getSecondParagraph = () =>
      getQuote()
        .find(Paragraph)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getSecondParagraph();
      expectComponentToHaveProps(wrapper, {
        size: 'tiny',
      });
    });

    it('should have the right children', () => {
      const wrapper = getSecondParagraph();
      expectComponentToHaveChildren(
        wrapper,
        getQuoteSource(quoteSource, quoteDateTime)
      );
    });
  });

  it('should have displayName `Quote`', () => {
    const actual = Quote.displayName;
    expect(actual).toBe('Quote');
  });
});
