import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import {
  VIEW_RATE_INFORMATION_FOR,
  PRICE_PER_EXTRA_PER,
} from 'utils/default-strings';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Dropdown } from 'inputs/Dropdown';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { ShowOnDesktop } from 'layout/ShowOnDesktop';
import { ShowOnMobile } from 'layout/ShowOnMobile';
import { Table } from 'collections/Table';

import { getMobileRateRowMarkup } from './utils/getMobileRateRowMarkup';
import { getRateCategoryHeadingMarkup } from './utils/getRateCategoryHeadingMarkup';
import { getRoomTypeDropdownMarkup } from './utils/getRoomTypeDropdownMarkup';

/**
 * The standard widget for displaying the rates of a property.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  costPerExtraGuestLabel,
  currencyOptions,
  onChangeCurrency,
  onChangeRoomType,
  rateCategories,
  rateHeadings,
  roomTypeInputLabel,
  roomTypes,
}) => (
  <Fragment>
    <Grid padded>
      {roomTypes &&
        getRoomTypeDropdownMarkup(
          roomTypes,
          onChangeRoomType,
          roomTypeInputLabel
        )}
      <ShowOnMobile parent="div">
        <Dropdown onChange={onChangeCurrency} options={currencyOptions} />
        {rateCategories.map((rateCategory, rateCategoryIndex) => (
          <Card
            fluid
            key={buildKeyFromStrings(rateCategory.name, rateCategoryIndex)}
          >
            <Card.Content>
              <Grid padded>
                <GridRow>
                  <GridColumn width={12}>
                    {getRateCategoryHeadingMarkup(
                      rateCategory,
                      costPerExtraGuestLabel
                    )}
                  </GridColumn>
                </GridRow>
                {rateCategory.rates.map((rate, rateIndex) =>
                  getMobileRateRowMarkup(
                    rate,
                    rateHeadings[rateIndex],
                    buildKeyFromStrings(rateCategory.name, rate, rateIndex)
                  )
                )}
              </Grid>
            </Card.Content>
          </Card>
        ))}
      </ShowOnMobile>
    </Grid>
    <ShowOnDesktop parent="div">
      <Table
        tableBody={rateCategories.map(rateCategory => [
          getRateCategoryHeadingMarkup(rateCategory, costPerExtraGuestLabel),
          ...rateCategory.rates,
        ])}
        tableHeadings={[
          <Dropdown onChange={onChangeCurrency} options={currencyOptions} />,
          ...rateHeadings,
        ]}
      />
    </ShowOnDesktop>
  </Fragment>
);

Component.defaultProps = {
  costPerExtraGuestLabel: PRICE_PER_EXTRA_PER,
  onChangeCurrency: Function.prototype,
  onChangeRoomType: Function.prototype,
  roomTypeInputLabel: VIEW_RATE_INFORMATION_FOR,
  roomTypes: null,
};

Component.displayName = 'Rates';

Component.propTypes = {
  /** The text to display for the cost per additional guest */
  costPerExtraGuestLabel: PropTypes.string,
  /** The currency options which the user can select. */
  currencyOptions: PropTypes.arrayOf(
    PropTypes.shape({
      /** The visible text for the option. */
      text: PropTypes.string.isRequired,
      /** The underlying value for the option. */
      value: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
      ]),
    })
  ).isRequired,
  /** A function called when the currency type value changes. */
  onChangeCurrency: PropTypes.func,
  /** A function called when the room type value changes. */
  onChangeRoomType: PropTypes.func,
  /** The data that populates the table rows */
  rateCategories: PropTypes.arrayOf(
    PropTypes.shape({
      /** The rate category cost per additional guest  */
      costPerExtraGuest: PropTypes.string,
      /** The date range the rate category applies to */
      dateRange: PropTypes.string,
      /** The name of the rate category */
      name: PropTypes.string,
      /** The number of guests the rate category applies to */
      numberOfGuests: PropTypes.string,
      /** The rate category rates */
      rates: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  /** The headings for each column of the table */
  rateHeadings: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** The label for the room type input */
  roomTypeInputLabel: PropTypes.string,
  /** The room type options which the user can select. */
  roomTypes: PropTypes.arrayOf(
    PropTypes.shape({
      /** The source url for the image to display with the option. */
      image: PropTypes.string,
      /** The visible text for the option. */
      text: PropTypes.string.isRequired,
      /** The underlying value for the option. */
      value: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
      ]),
    })
  ),
};
