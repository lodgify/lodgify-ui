import React from 'react';
import PropTypes from 'prop-types';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Heading } from 'typography/Heading';
import { Rating } from 'elements/Rating';
import { Divider } from 'elements/Divider';
import { Grid } from 'layout/Grid';
import { GridRow } from 'layout/GridRow';
import { GridColumn } from 'layout/GridColumn';
import { Review } from 'general-widgets/Review';
import {
  ADD_A_REVIEW,
  APARTMENT,
  COMMENTS,
  GUEST_TYPE,
  MONTH,
  REVIEWS,
  SUBMIT_REVIEW,
  TITLE,
  YEAR,
  YOUR_EMAIL,
  YOUR_LOCATION,
  YOUR_NAME,
  YOUR_REVIEW,
} from 'utils/default-strings/constants';

import { getModalFormMarkup } from './utils/getModalFormMarkup';

/**
 * The standard widget for displaying a collection of reviews.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  headingText,
  ratingAverage,
  reviews,
  ...props
}) => (
  <Grid>
    <GridRow>
      <GridColumn width={12}>
        <Heading>{headingText}</Heading>
      </GridColumn>
    </GridRow>
    <GridRow verticalAlign="middle">
      <GridColumn
        computer={6}
        floated="left"
        mobile={5}
        tablet={5}
        textAlign="left"
        verticalAlign="middle"
      >
        <Rating ratingNumber={ratingAverage} />
      </GridColumn>
      <GridColumn
        computer={6}
        floated="right"
        mobile={7}
        tablet={7}
        verticalAlign="middle"
      >
        {getModalFormMarkup(props)}
      </GridColumn>
    </GridRow>
    {reviews.map((review, index) => (
      <GridRow key={buildKeyFromStrings(review.reviewText, index)}>
        <GridColumn width={12}>
          <Review {...review} />
          <Divider />
        </GridColumn>
      </GridRow>
    ))}
  </Grid>
);

Component.displayName = 'Reviews';

Component.defaultProps = {
  apartmentInputLabel: APARTMENT,
  commentInputLabel: COMMENTS,
  emailInputLabel: YOUR_EMAIL,
  errorMessage: '',
  guestTypeInputLabel: GUEST_TYPE,
  guestTypeOptions: [],
  headingText: REVIEWS,
  locationInputLabel: YOUR_LOCATION,
  monthInputLabel: MONTH,
  monthOptions: [],
  nameInputLabel: YOUR_NAME,
  onSubmit: Function.prototype,
  propertyOptions: [],
  ratingInputLabel: YOUR_REVIEW,
  reviewFormHeading: ADD_A_REVIEW,
  reviews: [],
  submitButtonText: SUBMIT_REVIEW,
  successMessage: '',
  titleInputLabel: TITLE,
  validation: {},
  yearInputLabel: YEAR,
  yearOptions: [],
};

Component.propTypes = {
  /** The label for the apartment input. */
  // eslint-disable-next-line react/no-unused-prop-types
  apartmentInputLabel: PropTypes.string,
  /** The label for the comment input. */
  // eslint-disable-next-line react/no-unused-prop-types
  commentInputLabel: PropTypes.string,
  /** The label for the email input. */
  // eslint-disable-next-line react/no-unused-prop-types
  emailInputLabel: PropTypes.string,
  /** The message to display when the form has an error. */
  // eslint-disable-next-line react/no-unused-prop-types
  errorMessage: PropTypes.string,
  /** The label for the guest type input. */
  // eslint-disable-next-line react/no-unused-prop-types
  guestTypeInputLabel: PropTypes.string,
  /** The options which the user can select for the guest type field. */
  // eslint-disable-next-line react/no-unused-prop-types
  guestTypeOptions: PropTypes.arrayOf(
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
  ),
  /** The text to display as a heading at the top of the widget. */
  headingText: PropTypes.string,
  /** The label for the location input. */
  // eslint-disable-next-line react/no-unused-prop-types
  locationInputLabel: PropTypes.string,
  /** The label for the month input. */
  // eslint-disable-next-line react/no-unused-prop-types
  monthInputLabel: PropTypes.string,
  /** The options which the user can select for the month field. */
  // eslint-disable-next-line react/no-unused-prop-types
  monthOptions: PropTypes.arrayOf(
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
  ),
  /** The label for the name input. */
  // eslint-disable-next-line react/no-unused-prop-types
  nameInputLabel: PropTypes.string,
  /** The function to call when the form is submitted
   *  @param {Object} values - The values of the inputs in the form.
   */
  // eslint-disable-next-line react/no-unused-prop-types
  onSubmit: PropTypes.func,
  /** The options which the user can select for the property field. */
  // eslint-disable-next-line react/no-unused-prop-types
  propertyOptions: PropTypes.arrayOf(
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
  ),
  /** The average numeral rating for the properties. */
  ratingAverage: PropTypes.number.isRequired,
  /** A visible label to display with the rating stars. */
  // eslint-disable-next-line react/no-unused-prop-types
  ratingInputLabel: PropTypes.string,
  /** The text to display as a heading at the top of the modal form */
  // eslint-disable-next-line react/no-unused-prop-types
  reviewFormHeading: PropTypes.string,
  /** The collection of reviews. */
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      /** The numeral rating for the property given in the review, out of 5. */
      ratingNumber: PropTypes.number.isRequired,
      /** The response to the review. */
      reviewResponse: PropTypes.shape({
        /** The time of the review response. */
        dateTime: PropTypes.string.isRequired,
        /** The name of the review response. */
        source: PropTypes.string.isRequired,
        /** The text of the review response. */
        text: PropTypes.string.isRequired,
      }),
      /** The body text of the review. */
      reviewText: PropTypes.string.isRequired,
      /** The title of the review. */
      reviewTitle: PropTypes.string.isRequired,
      /** The category of the reviewer. */
      reviewerCategory: PropTypes.string.isRequired,
      /** The location of the reviewer. */
      reviewerLocation: PropTypes.string.isRequired,
      /** The name of the reviewer. */
      reviewerName: PropTypes.string.isRequired,
      /** The date the reviewer stayed. */
      reviewerStayDate: PropTypes.string.isRequired,
    })
  ),
  /** The text to display on the submit button. */
  // eslint-disable-next-line react/no-unused-prop-types
  submitButtonText: PropTypes.string,
  /** The message to display when the form is successful. */
  // eslint-disable-next-line react/no-unused-prop-types
  successMessage: PropTypes.string,
  /** The label for the title input. */
  // eslint-disable-next-line react/no-unused-prop-types
  titleInputLabel: PropTypes.string,
  /** Settings for validating inputs. Each value should match [the shape documented in `Form`](https://lodgify.github.io/lodgify-ui/#/Collections/Form) */
  // eslint-disable-next-line react/no-unused-prop-types
  validation: PropTypes.shape({
    comments: PropTypes.object,
    name: PropTypes.object,
    rating: PropTypes.object,
    title: PropTypes.object,
  }),
  /** The label for the year input. */
  // eslint-disable-next-line react/no-unused-prop-types
  yearInputLabel: PropTypes.string,
  /** The options which the user can select for the year field. */
  // eslint-disable-next-line react/no-unused-prop-types
  yearOptions: PropTypes.arrayOf(
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
  ),
};
