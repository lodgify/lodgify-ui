import React, { Fragment } from 'react';
import {
  string,
  arrayOf,
  shape,
  oneOfType,
  bool,
  number,
  func,
} from 'prop-types';
import { Card } from 'semantic-ui-react';

import {
  VIEW_RATE_INFORMATION_FOR,
  PRICE_PER_EXTRA_PER,
  RATES_TITLE,
} from 'utils/default-strings';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Dropdown } from 'inputs/Dropdown';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { ShowOn } from 'layout/ShowOn';
import { Table } from 'collections/Table';

import { getRoomTypeDropdownMarkup } from './utils/getRoomTypeDropdownMarkup';
import { getCurrencyDropdownPlaceholderMarkup } from './utils/getCurrencyDropdownPlaceholderMarkup';
import { getCardsPlaceholderMarkup } from './utils/getCardsPlaceholderMarkup';
import { getMobileRateRowMarkup } from './utils/getMobileRateRowMarkup';
import { getTablePlaceholderMarkup } from './utils/getTablePlaceholderMarkup';
import { getRateCategoryHeadingMarkup } from './utils/getRateCategoryHeadingMarkup';

/**
 * The standard widget for displaying the rates of a property.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  costPerExtraGuestLabel,
  currencyNoResultsText,
  currencyOptions,
  currencyValue,
  isShowingPlaceholder,
  onChangeCurrency,
  onChangeRoomType,
  rateCategories,
  rateHeadings,
  roomTypeInputLabel,
  roomTypes,
  roomTypesValue,
  title,
}) => (
  <Fragment>
    <h3>{title}</h3>
    {roomTypes &&
      getRoomTypeDropdownMarkup(
        isShowingPlaceholder,
        roomTypes,
        onChangeRoomType,
        roomTypeInputLabel,
        roomTypesValue
      )}
    <ShowOn mobile>
      {isShowingPlaceholder ? (
        getCurrencyDropdownPlaceholderMarkup()
      ) : (
        <Dropdown
          isClearable={false}
          isSearchable
          noResultsText={currencyNoResultsText}
          onChange={onChangeCurrency}
          options={currencyOptions}
          value={currencyValue}
        />
      )}
      {isShowingPlaceholder
        ? getCardsPlaceholderMarkup()
        : rateCategories.map((rateCategory, rateCategoryIndex) => (
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
    </ShowOn>
    <ShowOn computer tablet widescreen>
      {isShowingPlaceholder ? (
        getTablePlaceholderMarkup()
      ) : (
        <Table
          tableBody={rateCategories.map(rateCategory => [
            getRateCategoryHeadingMarkup(rateCategory, costPerExtraGuestLabel),
            ...rateCategory.rates,
          ])}
          tableHeadings={[
            <Dropdown
              isClearable={false}
              isSearchable
              noResultsText={currencyNoResultsText}
              onChange={onChangeCurrency}
              options={currencyOptions}
              value={currencyValue}
            />,
            ...rateHeadings,
          ]}
        />
      )}
    </ShowOn>
  </Fragment>
);

Component.defaultProps = {
  costPerExtraGuestLabel: PRICE_PER_EXTRA_PER,
  currencyNoResultsText: undefined,
  currencyValue: undefined,
  isShowingPlaceholder: false,
  onChangeCurrency: Function.prototype,
  onChangeRoomType: Function.prototype,
  roomTypeInputLabel: VIEW_RATE_INFORMATION_FOR,
  roomTypes: null,
  roomTypesValue: undefined,
  title: RATES_TITLE,
};

Component.displayName = 'Rates';

Component.propTypes = {
  /** The text to display for the cost per additional guest */
  costPerExtraGuestLabel: string,
  /** The text to display when no results are returned from the currency dropdown. */
  currencyNoResultsText: string,
  /** The currency options which the user can select. */
  currencyOptions: arrayOf(
    shape({
      /** The visible text for the option. */
      text: string.isRequired,
      /** The underlying value for the option. */
      value: oneOfType([bool, number, string]),
    })
  ).isRequired,
  /** The current value of the currency dropdown. */
  currencyValue: oneOfType([bool, number, string]),
  /** Is the component showing placeholders to reserve space for content which will appear. */
  isShowingPlaceholder: bool,
  /** A function called when the currency type value changes. */
  onChangeCurrency: func,
  /** A function called when the room type value changes. */
  onChangeRoomType: func,
  /** The data that populates the table rows */
  rateCategories: arrayOf(
    shape({
      /** The rate category cost per additional guest  */
      costPerExtraGuest: string,
      /** The date range the rate category applies to */
      dateRange: string,
      /** The name of the rate category */
      name: string.isRequired,
      /** The number of guests the rate category applies to */
      numberOfGuests: string,
      /** The rate category rates */
      rates: arrayOf(string),
    })
  ).isRequired,
  /** The headings for each column of the table */
  rateHeadings: arrayOf(string).isRequired,
  /** The label for the room type input */
  roomTypeInputLabel: string,
  /** The room type options which the user can select. */
  roomTypes: arrayOf(
    shape({
      /** A list of one or more strings separated by commas indicating a set of source sizes for the image. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
      imageSizes: string,
      /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use for the image. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
      imageSrcSet: string,
      /** The source url of the image to display with the room type option. */
      imageUrl: string,
      /** The visible text for the option. */
      text: string.isRequired,
      /** The underlying value for the option. */
      value: oneOfType([bool, number, string]),
    })
  ),
  /** The current value of the room type dropdown. */
  roomTypesValue: oneOfType([bool, number, string]),
  /** The title of the section */
  title: string,
};
