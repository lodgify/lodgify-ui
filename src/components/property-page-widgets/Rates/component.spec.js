import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Dropdown } from 'inputs/Dropdown';
import { Grid } from 'layout/Grid';
import { Table } from 'collections/Table';

import { Component as Rates } from './component';
import {
  currencyOptions,
  expectedTableBody,
  rateCategories,
  rateHeadings,
  roomTypeOnChange,
  roomTypes,
} from './mock-data/options';

const expectedHeadings = [
  <Dropdown options={currencyOptions} />,
  ...rateHeadings,
];

const getRatesWidget = props =>
  shallow(
    <Rates
      currencyOptions={currencyOptions}
      rateCategories={rateCategories}
      rateHeadings={rateHeadings}
      {...props}
    />
  );

describe('<Rates />', () => {
  it('should render a single `section` element', () => {
    const wrapper = getRatesWidget();
    expectComponentToBe(wrapper, 'section');
  });

  describe('the `section` element', () => {
    it('should render the right children', () => {
      const wrapper = getRatesWidget();
      expectComponentToHaveChildren(wrapper, Table);
    });

    describe('if `props.roomTypes` is passed', () => {
      it('should render a `Grid` child', () => {
        const wrapper = getRatesWidget({ roomTypes, roomTypeOnChange });
        expectComponentToHaveChildren(wrapper, Grid, Table);
      });
    });
  });

  describe('the `Table` component', () => {
    it('should have the right props', () => {
      const wrapper = getRatesWidget().find(Table);
      expectComponentToHaveProps(wrapper, {
        tableHeadings: expectedHeadings,
        tableBody: expectedTableBody,
      });
    });
  });
});
