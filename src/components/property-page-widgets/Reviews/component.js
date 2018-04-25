import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'semantic-ui-react';

import { getUniqueKey } from 'lib/get-unique-key';
import { Heading } from 'typography/Heading';
import { Button } from 'elements/Button';
import { Divider } from 'elements/Divider';
import { Grid } from 'layout/Grid';
import { GridRow } from 'layout/GridRow';
import { GridColumn } from 'layout/GridColumn';
import { Review } from 'widgets/Review';

/**
 * The standard widget for displaying a collection of reviews.
 * @returns {Object}
 */
export const Component = ({ reviews, ratingAverage }) => (
  <Grid>
    <GridRow>
      <GridColumn width={12}>
        <Heading>Reviews</Heading>
      </GridColumn>
    </GridRow>
    <GridRow verticalAlign="middle">
      <GridColumn
        mobile={5}
        computer={6}
        textAlign="left"
        verticalAlign="middle"
        floated="left"
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
        mobile={7}
        computer={6}
        verticalAlign="middle"
        floated="right"
      >
        <Button isCompact size="medium" isPositionedRight isRounded>
          Submit a review
        </Button>
      </GridColumn>
    </GridRow>
    {reviews.map((review, index) => (
      <GridRow key={getUniqueKey(review.reviewText, index)}>
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
  reviews: [],
};

Component.propTypes = {
  /** The average numeral rating for the properties. */
  ratingAverage: PropTypes.number.isRequired,
  /** The collection of reviews. */
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      /** The numeral rating for the property given in the review, out of 5. */
      ratingNumber: PropTypes.number.isRequired,
      /** The category of the reviewer. */
      reviewerCategory: PropTypes.string.isRequired,
      /** The location of the reviewer. */
      reviewerLocation: PropTypes.string.isRequired,
      /** The name of the reviewer. */
      reviewerName: PropTypes.string.isRequired,
      /** The response to the review. */
      reviewResponse: PropTypes.shape({
        /** The time of the review response. */
        dateTime: PropTypes.string.isRequired,
        /** The text of the review response. */
        text: PropTypes.string.isRequired,
        /** The name of the review response. */
        source: PropTypes.string.isRequired,
      }),
      /** The date the reviewer stayed. */
      reviewerStayDate: PropTypes.string.isRequired,
      /** The body text of the review. */
      reviewText: PropTypes.string.isRequired,
      /** The title of the review. */
      reviewTitle: PropTypes.string.isRequired,
    })
  ),
};
