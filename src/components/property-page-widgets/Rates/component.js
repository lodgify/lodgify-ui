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
import { ShowOn } from 'layout/ShowOn';
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
  currencyNoResultsText,
  currencyOptions,
  currencyValue,
  onChangeCurrency,
  onChangeRoomType,
  rateCategories,
  rateHeadings,
  roomTypeInputLabel,
  roomTypes,
  roomTypesValue,
}) => (
  <Fragment>
    <Grid padded>
      {roomTypes &&
        getRoomTypeDropdownMarkup(
          roomTypes,
          onChangeRoomType,
          roomTypeInputLabel,
          roomTypesValue
        )}
      <ShowOn mobile>
        <Grid>
          <GridColumn>
            <Dropdown
              currentValue={currencyValue}
              isSearchable
              noResultsText={currencyNoResultsText}
              onChange={onChangeCurrency}
              options={currencyOptions}
            />
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
          </GridColumn>
        </Grid>
      </ShowOn>
    </Grid>
    <ShowOn computer tablet widescreen>
      <Table
        tableBody={rateCategories.map(rateCategory => [
          getRateCategoryHeadingMarkup(rateCategory, costPerExtraGuestLabel),
          ...rateCategory.rates,
        ])}
        tableHeadings={[
          <Dropdown
            currentValue={currencyValue}
            isSearchable
            noResultsText={currencyNoResultsText}
            onChange={onChangeCurrency}
            options={currencyOptions}
          />,
          ...rateHeadings,
        ]}
      />
    </ShowOn>
  </Fragment>
);

Component.defaultProps = {
  costPerExtraGuestLabel: PRICE_PER_EXTRA_PER,
  currencyNoResultsText: undefined,
  currencyValue: undefined,
  onChangeCurrency: Function.prototype,
  onChangeRoomType: Function.prototype,
  roomTypeInputLabel: VIEW_RATE_INFORMATION_FOR,
  roomTypes: null,
  roomTypesValue: undefined,
};

Component.displayName = 'Rates';

Component.propTypes = {
  /** The text to display for the cost per additional guest */
  costPerExtraGuestLabel: PropTypes.string,
  /** The text to display when no results are returned from the currency dropdown. */
  currencyNoResultsText: PropTypes.string,
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
  /** The current value of the currency dropdown. */
  currencyValue: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]),
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
      name: PropTypes.string.isRequired,
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
      /** A list of one or more strings separated by commas indicating a set of source sizes for the image. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
      imageSizes: PropTypes.string,
      /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use for the image. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
      imageSrcSet: PropTypes.string,
      /** The source url of the image to display with the room type option. */
      imageUrl: PropTypes.string,
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
  /** The current value of the room type dropdown. */
  roomTypesValue: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]),
};
