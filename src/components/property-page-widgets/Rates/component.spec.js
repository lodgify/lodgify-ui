import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';
import { Card } from 'semantic-ui-react';

import { getArrayOfLengthOfItem } from 'utils/get-array-of-length-of-item';
import { Dropdown } from 'inputs/Dropdown';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { ShowOnDesktop } from 'layout/ShowOnDesktop';
import { ShowOnMobile } from 'layout/ShowOnMobile';
import { Table } from 'collections/Table';
import { PRICE_PER_EXTRA_PER } from 'utils/default-strings';

import { Component as Rates } from './component';
import { getRateCategoryHeadingMarkup } from './utils/getRateCategoryHeadingMarkup';
import {
  currencyOptions,
  onChangeCurrency,
  onChangeRoomType,
  rateCategories,
  rateHeadings,
  roomTypes,
} from './mock-data/options';

const expectedHeadings = [
  <Dropdown onChange={onChangeCurrency} options={currencyOptions} />,
  ...rateHeadings,
];

const pricePerExtraText = PRICE_PER_EXTRA_PER;

const expectedTableBody = [
  [
    getRateCategoryHeadingMarkup(
      {
        name: 'Season 1',
        dateRange: '01/05/2018 - 01/08/2018',
        numberOfGuests: '2',
        costPerExtraGuest: '1€',
      },
      pricePerExtraText
    ),
    '40€',
    '30€',
    '40€',
    '40€',
  ],
  [
    getRateCategoryHeadingMarkup(
      {
        name: 'Season 2',
        dateRange: '01/02/2018 - 01/08/2018',
        numberOfGuests: '3',
        costPerExtraGuest: '2€',
      },
      pricePerExtraText
    ),
    '10€',
    '20€',
    '30€',
    '40€',
  ],
  [
    getRateCategoryHeadingMarkup(
      {
        name: 'Season 3',
        dateRange: '01/03/2018 - 01/08/2018',
        numberOfGuests: '4',
        costPerExtraGuest: '3€',
      },
      pricePerExtraText
    ),
    '40€',
    '30€',
    '20€',
    '10€',
  ],
];

const getRatesWidget = props =>
  shallow(
    <Rates
      currencyOptions={currencyOptions}
      onChangeCurrency={onChangeCurrency}
      pricePerExtraText={pricePerExtraText}
      rateCategories={rateCategories}
      rateHeadings={rateHeadings}
      {...props}
    />
  );

describe('<Rates />', () => {
  it('should render a single `div` element', () => {
    const wrapper = getRatesWidget();

    expectComponentToBe(wrapper, 'div');
  });

  describe('the `div` element', () => {
    it('should render the right children', () => {
      const wrapper = getRatesWidget();

      expectComponentToHaveChildren(wrapper, Grid, ShowOnDesktop);
    });
  });

  describe('the first `Grid` component', () => {
    const getFirstGrid = props =>
      getRatesWidget(props)
        .find(Grid)
        .first();

    it('should have the right props', () => {
      const wrapper = getFirstGrid();

      expectComponentToHaveProps(wrapper, { padded: true });
    });

    it('should render the right children', () => {
      const wrapper = getFirstGrid();

      expectComponentToHaveChildren(wrapper, ShowOnMobile);
    });

    describe('if `props.roomTypes` is passed', () => {
      it('should render an extra `GridRow` child', () => {
        const wrapper = getFirstGrid({ roomTypes, onChangeRoomType });

        expectComponentToHaveChildren(wrapper, GridRow, ShowOnMobile);
      });
    });
  });

  describe('the `ShowOnMobile` component', () => {
    const getFirstGridRow = props => getRatesWidget(props).find(ShowOnMobile);

    it('should render the right children', () => {
      const wrapper = getFirstGridRow();

      expectComponentToHaveChildren(
        wrapper,
        Dropdown,
        ...getArrayOfLengthOfItem(rateCategories.length, Card)
      );
    });
  });

  describe('the `Dropdown` component', () => {
    it('should have the right props', () => {
      const wrapper = getRatesWidget()
        .find(Dropdown)
        .first();

      expectComponentToHaveProps(wrapper, {
        onChange: onChangeCurrency,
        options: currencyOptions,
      });
    });
  });

  describe('each `Card` component', () => {
    const getFirstCard = () =>
      getRatesWidget()
        .find(Card)
        .first();

    it('should have the right props', () => {
      const wrapper = getFirstCard();

      expectComponentToHaveProps(wrapper, { fluid: true });
    });

    it('should render the right children', () => {
      const wrapper = getFirstCard();

      expectComponentToHaveChildren(wrapper, Card.Content);
    });
  });

  describe('each `Card.Content` component', () => {
    const getCardContent = () =>
      getRatesWidget()
        .find(Card.Content)
        .first();

    it('should render the right children', () => {
      const wrapper = getCardContent()
        .find(Card.Content)
        .first();

      expectComponentToHaveChildren(wrapper, Grid);
    });
  });

  describe('the second `Grid` component', () => {
    const getSecondGrid = () =>
      getRatesWidget()
        .find(Grid)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getSecondGrid();

      expectComponentToHaveProps(wrapper, { padded: true });
    });

    it('should render the right children', () => {
      const wrapper = getSecondGrid();

      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(5, GridRow)
      );
    });
  });

  describe('the first `GridRow` component in the `Card.Content` component', () => {
    it('should render the right children', () => {
      const wrapper = getRatesWidget()
        .find(GridRow)
        .at(5);

      expectComponentToHaveChildren(wrapper, GridColumn);
    });
  });

  describe('the `GridColumn` component', () => {
    it('should render the right children', () => {
      const wrapper = getRatesWidget()
        .find(GridColumn)
        .at(9);

      expectComponentToHaveChildren(wrapper, 'div');
    });
  });

  describe('the `ShowOnDesktop` component', () => {
    it('should render the right children', () => {
      const wrapper = getRatesWidget().find(ShowOnDesktop);

      expectComponentToHaveChildren(wrapper, Table);
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

  it('should have the right `displayName`', () => {
    expectComponentToHaveDisplayName(Rates, 'Rates');
  });
});
