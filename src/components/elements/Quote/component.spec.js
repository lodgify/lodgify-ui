import React from 'react';
import { shallow } from 'enzyme';

import {
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from 'lib/expect-helpers';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { Paragraph } from 'typography/Paragraph';

import { getQuoteSource } from './utils/getQuoteSource';
import { quoteText, quoteSource, quoteDateTime } from './mock-data/props';
import { Component as Quote } from './component';

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
    const getGrid = () => getQuote().find(Grid);

    it('should render a single Lodgify UI `GridColumn` component', () => {
      const wrapper = getGrid();
      expectComponentToHaveChildren(wrapper, GridRow, GridRow);
    });
  });

  describe('the first `GridRow` component', () => {
    const getFirstGridRow = () =>
      getQuote()
        .find(GridRow)
        .at(0);
    const wrapper = getFirstGridRow();
    it('should render a single `GridColumn` component', () => {
      expectComponentToHaveChildren(wrapper, GridColumn);
    });
  });

  describe('the first `GridColumn` component', () => {
    const getFirstGridColumn = () =>
      getQuote()
        .find(GridColumn)
        .at(0);
    const wrapper = getFirstGridColumn();

    it('should render a single `Paragraph` component', () => {
      expectComponentToHaveChildren(wrapper, Paragraph);
    });
  });

  describe('this first `Paragraph` component', () => {
    const getFirstParagraph = () =>
      getQuote()
        .find(Paragraph)
        .at(0);
    const wrapper = getFirstParagraph();

    it('should have the right children', () => {
      expectComponentToHaveChildren(wrapper, quoteText);
    });
  });

  describe('the second `GridRow` component', () => {
    const getSecondGridRow = () =>
      getQuote()
        .find(GridRow)
        .at(1);
    const wrapper = getSecondGridRow();

    it('should have the right props', () => {
      expectComponentToHaveProps(wrapper, {
        horizontalAlignContent: 'right',
      });
    });

    it('should render a `GridColumn` component', () => {
      expectComponentToHaveChildren(wrapper, GridColumn);
    });
  });

  describe('the second `GridColumn` component', () => {
    const getSecondGridColumn = () =>
      getQuote()
        .find(GridColumn)
        .at(1);
    const wrapper = getSecondGridColumn();

    it('should render a `Paragraph` component', () => {
      expectComponentToHaveChildren(wrapper, Paragraph);
    });
  });

  describe('the second `Paragraph` component', () => {
    const getSecondParagraph = () =>
      getQuote()
        .find(Paragraph)
        .at(1);
    const wrapper = getSecondParagraph();

    it('should have the right props', () => {
      expectComponentToHaveProps(wrapper, {
        size: 'tiny',
      });
    });

    it('should have the right children', () => {
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
