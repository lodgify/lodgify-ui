import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { PRICE_PER_EXTRA_PER } from 'utils/default-strings';

import { Component as Rates } from './component';
import {
  currencyOptions,
  onChangeCurrency,
  onChangeRoomType,
  rateCategories,
  rateHeadings,
  roomTypes,
} from './mock-data/options';

const costPerExtraGuestLabel = PRICE_PER_EXTRA_PER;

const getRatesWidget = props =>
  mount(
    <Rates
      costPerExtraGuestLabel={costPerExtraGuestLabel}
      currencyOptions={currencyOptions}
      onChangeCurrency={onChangeCurrency}
      rateCategories={rateCategories}
      rateHeadings={rateHeadings}
      {...props}
    />
  );

describe('<Rates />', () => {
  describe('by default', () => {
    it('should have the right structure', () => {
      const actual = getRatesWidget();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.roomTypes` is passed', () => {
    it('should have the right structure', () => {
      const actual = getRatesWidget({ roomTypes, onChangeRoomType });

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have the right `displayName`', () => {
    expectComponentToHaveDisplayName(Rates, 'Rates');
  });
});
