import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveProps,
  expectComponentToHaveChildren,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Grid } from 'layout/Grid';
import { GridRow } from 'layout/GridRow';
import { SearchBar } from 'general-widgets/SearchBar';

import { getSearchBarMarkup } from './getSearchBarMarkup';

const props = {
  getIsDayBlocked: Function.prototype,
  isDisplayedAsModal: false,
  isShowingLocationDropdown: false,
  isShowingSummary: false,
  guestsOptions: [{ text: '1', value: '1' }],
  locationOptions: [{ text: '2', value: '2' }],
  modalHeadingText: 'yo',
  modalSummaryElement: <div>bro</div>,
  modalTrigger: <button>click</button>,
  onSubmit: Function.prototype,
  searchButton: <button>to</button>,
  summaryElement: <button>search</button>,
};

const getMarkupAsRenderComponent = () =>
  shallow(<div>{getSearchBarMarkup({ ...props })}</div>)
    .children()
    .first();

describe('getSearchBarMarkup', () => {
  it('should return a single `Grid` component', () => {
    const wrapper = getMarkupAsRenderComponent();

    expectComponentToBe(wrapper, Grid);
  });

  describe('the `Grid` component', () => {
    const getGrid = () => getMarkupAsRenderComponent().find(Grid);

    it('should have the right props', () => {
      const wrapper = getGrid();

      expectComponentToHaveProps(wrapper, { areColumnsCentered: true });
    });

    it('should have the right children', () => {
      const wrapper = getGrid();

      expectComponentToHaveChildren(wrapper, GridRow);
    });
  });

  describe('the `GridRow`', () => {
    const getGridRow = () => getMarkupAsRenderComponent().find(GridRow);

    it('should have the right props', () => {
      const wrapper = getGridRow();

      expectComponentToHaveProps(wrapper, {
        horizontalAlignContent: 'center',
      });
    });

    it('should render the right children', () => {
      const wrapper = getGridRow();

      expectComponentToHaveChildren(wrapper, SearchBar);
    });
  });

  describe('the `SearchBar`', () => {
    it('should have the right props', () => {
      const wrapper = getMarkupAsRenderComponent().find(SearchBar);

      expectComponentToHaveProps(wrapper, {
        ...props,
      });
    });
  });
});
