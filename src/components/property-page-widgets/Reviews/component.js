import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'semantic-ui-react';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Heading } from 'typography/Heading';
import { Button } from 'elements/Button';
import { Divider } from 'elements/Divider';
import { Grid } from 'layout/Grid';
import { GridRow } from 'layout/GridRow';
import { GridColumn } from 'layout/GridColumn';
import { Review } from 'general-widgets/Review';
import { REVIEWS, SUBMIT_REVIEW } from 'utils/default-strings';

/**
 * The standard widget for displaying a collection of reviews.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  headingText,
  reviews,
  ratingAverage,
  submitButtonText,
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
        <Rating
          disabled
          maxRating={5}
          rating={Math.round(ratingAverage)}
          size="small"
        />
        <span>{Math.round(ratingAverage)}</span>
      </GridColumn>
      <GridColumn
        computer={6}
        floated="right"
        mobile={7}
        tablet={7}
        verticalAlign="middle"
      >
        <Button isCompact isPositionedRight isRounded size="medium">
          {submitButtonText}
        </Button>
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
  headingText: REVIEWS,
  reviews: [],
  submitButtonText: SUBMIT_REVIEW,
};

Component.propTypes = {
  /** The text to display as a heading at the top of the widget. */
  headingText: PropTypes.string,
  /** The average numeral rating for the properties. */
  ratingAverage: PropTypes.number.isRequired,
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
  submitButtonText: PropTypes.string,
};
