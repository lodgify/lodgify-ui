import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Dropdown } from 'inputs/Dropdown';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';

import { getRoomTypeDropdownMarkup } from './getRoomTypeDropdownMarkup';

const options = [
  {
    text: 'EUR €',
    value: 'eur',
  },
  {
    text: 'GBP £',
    value: 'gbp',
  },
  {
    text: 'USD $',
    value: 'usd',
  },
];

const onChange = () => '😼';

const getRoomTypeDropdown = () =>
  shallow(getRoomTypeDropdownMarkup(options, onChange));

describe('getTransportOptionsMarkup', () => {
  it('should return a `Grid`', () => {
    const wrapper = getRoomTypeDropdown();
    expectComponentToBe(wrapper, 'Grid');
  });

  describe('the `Grid` component', () => {
    it('should have the right props', () => {
      const wrapper = getRoomTypeDropdown();
      expectComponentToHaveProps(wrapper, {
        stackable: true,
        verticalAlign: 'middle',
      });
    });

    it('should render the right children', () => {
      const wrapper = getRoomTypeDropdown();
      expectComponentToHaveChildren(wrapper, GridRow);
    });
  });

  describe('the `GridRow` component', () => {
    const getGridRow = () =>
      getRoomTypeDropdown()
        .find(GridRow)
        .first();

    it('should have the right props', () => {
      const wrapper = getGridRow();
      expectComponentToHaveProps(wrapper, { columns: 2 });
    });

    it('should render the right children', () => {
      const wrapper = getGridRow();
      expectComponentToHaveChildren(wrapper, GridColumn, GridColumn);
    });
  });

  describe('the first `GridColumn` component', () => {
    const getFirstGridColumn = () =>
      getRoomTypeDropdown()
        .find(GridColumn)
        .first();

    it('should have the right props', () => {
      const wrapper = getFirstGridColumn();
      expectComponentToHaveProps(wrapper, { width: 4 });
    });

    it('should render the right children', () => {
      const wrapper = getFirstGridColumn();
      expectComponentToHaveChildren(wrapper, 'View Rate Information for:');
    });
  });

  describe('the second `GridColumn` component', () => {
    const getSecondGridColumn = () =>
      getRoomTypeDropdown()
        .find(GridColumn)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getSecondGridColumn();
      expectComponentToHaveProps(wrapper, { width: 4 });
    });

    it('should render the right children', () => {
      const wrapper = getSecondGridColumn();
      expectComponentToHaveChildren(wrapper, Dropdown);
    });
  });

  describe('the `Dropdown` component', () => {
    it('should have the right props', () => {
      const wrapper = getRoomTypeDropdown()
        .find(Dropdown)
        .first();

      expectComponentToHaveProps(wrapper, { onChange, options });
    });
  });
});
