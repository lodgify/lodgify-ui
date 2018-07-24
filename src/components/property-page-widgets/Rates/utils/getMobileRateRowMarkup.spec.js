import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { GridColumn } from 'layout/GridColumn';
import { Paragraph } from 'typography/Paragraph';

import { getMobileRateRowMarkup } from './getMobileRateRowMarkup';

const rate = '🧟‍♀️';
const rateHeading = '🕰';
const key = '🚏';

const getMobileRateRow = () =>
  shallow(getMobileRateRowMarkup(rate, rateHeading, key));

describe('getMobileRateRowMarkup', () => {
  it('should render a `GridRow` component', () => {
    const wrapper = getMobileRateRow();

    expectComponentToBe(wrapper, 'GridRow');
  });

  it('should have the right props', () => {
    const wrapper = getMobileRateRow();

    expectComponentToHaveProps(wrapper, { columns: 2 });
  });

  it('should render the right children', () => {
    const wrapper = getMobileRateRow();

    expectComponentToHaveChildren(wrapper, GridColumn, GridColumn);
  });

  describe('the first `GridColumn`', () => {
    const getFirstGridColumn = () =>
      getMobileRateRow()
        .find(GridColumn)
        .first();

    it('should have the right props', () => {
      const wrapper = getFirstGridColumn();

      expectComponentToHaveProps(wrapper, { floated: 'left' });
    });

    it('should render the right children', () => {
      const wrapper = getFirstGridColumn();

      expectComponentToHaveChildren(wrapper, Paragraph);
    });
  });

  describe('`Paragraph`', () => {
    const getParagraph = () =>
      getMobileRateRow()
        .find(Paragraph)
        .first();

    it('should have the right props', () => {
      const wrapper = getParagraph();

      expectComponentToHaveProps(wrapper, { weight: 'heavy' });
    });

    it('should render the right children', () => {
      const wrapper = getParagraph();

      expectComponentToHaveChildren(wrapper, rateHeading);
    });
  });

  describe('the second `GridColumn`', () => {
    const getSecondGridColumn = () =>
      getMobileRateRow()
        .find(GridColumn)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getSecondGridColumn();

      expectComponentToHaveProps(wrapper, {
        floated: 'right',
        textAlign: 'right',
      });
    });

    it('should render the right children', () => {
      const wrapper = getSecondGridColumn();

      expectComponentToHaveChildren(wrapper, rate);
    });
  });
});
