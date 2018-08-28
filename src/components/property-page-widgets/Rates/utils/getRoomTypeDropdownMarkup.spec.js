import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { getArrayOfLengthOfItem } from 'utils/get-array-of-length-of-item';
import { Dropdown } from 'inputs/Dropdown';
import { GridColumn } from 'layout/GridColumn';
import { Paragraph } from 'typography/Paragraph';

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
const roomTypeHeadingText = 'A';

const getRoomTypeDropdown = () =>
  shallow(getRoomTypeDropdownMarkup(options, onChange, roomTypeHeadingText));

describe('getRoomTypeDropdownMarkup', () => {
  it('should return a `GridRow`', () => {
    const wrapper = getRoomTypeDropdown();

    expectComponentToBe(wrapper, 'GridRow');
  });

  describe('the `GridRow` component', () => {
    it('should have the right props', () => {
      const wrapper = getRoomTypeDropdown();

      expectComponentToHaveProps(wrapper, {
        verticalAlign: 'middle',
      });
    });

    it('should render the right children', () => {
      const wrapper = getRoomTypeDropdown();

      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(2, GridColumn)
      );
    });
  });

  describe('the first `GridColumn` component', () => {
    const getFirstGridColumn = () =>
      getRoomTypeDropdown()
        .find(GridColumn)
        .first();

    it('should have the right props', () => {
      const wrapper = getFirstGridColumn();

      expectComponentToHaveProps(wrapper, { computer: 4, mobile: 12 });
    });

    it('should render the right children', () => {
      const wrapper = getFirstGridColumn();

      expectComponentToHaveChildren(wrapper, Paragraph);
    });
  });

  describe('the `Paragraph`', () => {
    const getParagraph = () =>
      getRoomTypeDropdown()
        .find(Paragraph)
        .first();

    it('should have the right props', () => {
      const wrapper = getParagraph();

      expectComponentToHaveProps(wrapper, { weight: 'heavy' });
    });

    it('should render the right children', () => {
      const wrapper = getParagraph();

      expectComponentToHaveChildren(wrapper, roomTypeHeadingText);
    });
  });

  describe('the second `GridColumn` component', () => {
    const getSecondGridColumn = () =>
      getRoomTypeDropdown()
        .find(GridColumn)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getSecondGridColumn();

      expectComponentToHaveProps(wrapper, { computer: 4, mobile: 12 });
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
