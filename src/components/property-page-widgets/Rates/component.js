import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown } from 'inputs/Dropdown';
import { Table } from 'collections/Table';

import { getRoomTypeDropdownMarkup } from './utils/getRoomTypeDropdownMarkup';
import { getRateCategoryHeadingMarkup } from './utils/getRateCategoryHeadingMarkup';

/**
 * The standard widget for displaying the rates of a property.
 * @returns {Object}
 */
export const Component = ({
  currencyOptions,
  onChangeCurrency,
  onChangeRoomType,
  rateCategories,
  rateHeadings,
  roomTypes,
}) => (
  <section>
    {roomTypes && getRoomTypeDropdownMarkup(roomTypes, onChangeRoomType)}
    <Table
      tableHeadings={[
        <Dropdown onChange={onChangeCurrency} options={currencyOptions} />,
        ...rateHeadings,
      ]}
      tableBody={rateCategories.map(rateCategory => [
        getRateCategoryHeadingMarkup(rateCategory),
        ...rateCategory.rates,
      ])}
    />
  </section>
);

Component.defaultProps = {
  onChangeCurrency: Function.prototype,
  onChangeRoomType: Function.prototype,
  roomTypes: null,
};

Component.displayName = 'Rates';

Component.propTypes = {
  /** The currency options which the user can select. */
  currencyOptions: PropTypes.arrayOf(
    PropTypes.shape({
      /** The visible text for the option. */
      text: PropTypes.string.isRequired,
      /** The underlying value for the option. */
      value: PropTypes.any,
    })
  ).isRequired,
  /** A function called when the currency type value changes. */
  onChangeCurrency: PropTypes.func,
  /** A function called when the room type value changes. */
  onChangeRoomType: PropTypes.func,
  /** The data that populates the table rows */
  rateCategories: PropTypes.arrayOf(
    PropTypes.shape({
      /** The name of the rate category */
      name: PropTypes.string,
      /** The date range the rate category applies to */
      dateRange: PropTypes.string,
      /** The number of guests the rate category applies to */
      numberOfGuests: PropTypes.string,
      /** The rate category cost per additional guest  */
      costPerExtraGuest: PropTypes.string,
      /** The rate category rates */
      rates: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  /** The headings for each column of the table */
  rateHeadings: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** The room type options which the user can select. */
  roomTypes: PropTypes.arrayOf(
    PropTypes.shape({
      /** The source url for the image to display with the option. */
      image: PropTypes.string,
      /** The visible text for the option. */
      text: PropTypes.string.isRequired,
      /** The underlying value for the option. */
      value: PropTypes.any,
    })
  ),
};
