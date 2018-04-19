import React from 'react';
import PropTypes from 'prop-types';
import { Card, Rating } from 'semantic-ui-react';

import { Divider } from 'elements/Divider';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { Paragraph } from 'typography/Paragraph';
import { Quote } from 'elements/Quote';

import { getReviewerCategoryAndStayDateString } from './utils/getReviewerCategoryAndStayDateString';
import { getReviewerNameAndLocationString } from './utils/getReviewerNameAndLocationString';

/**
 * The standard widget for displaying a review.
 * @returns {Object}
 */
export const Component = ({
  ratingNumber,
  reviewerCategory,
  reviewerLocation,
  reviewerName,
  reviewResponse,
  reviewerStayDate,
  reviewText,
  reviewTitle,
}) => (
  <Card fluid>
    <Card.Content>
      <Card.Meta>
        <Grid>
          <GridRow verticalAlign="middle">
            <GridColumn mobile={7} computer={6} floated="left">
              <Paragraph size="tiny">
                {getReviewerNameAndLocationString(
                  reviewerName,
                  reviewerLocation
                )}
              </Paragraph>
            </GridColumn>
            <GridColumn
              mobile={5}
              computer={6}
              floated="right"
              textAlign="right"
              verticalAlign="middle"
            >
              <Rating
                disabled
                maxRating={5}
                rating={Math.round(ratingNumber)}
                size="small"
              />
            </GridColumn>
          </GridRow>
        </Grid>
      </Card.Meta>
      <Divider />
      <Card.Header>{reviewTitle}</Card.Header>
      <Card.Description>{reviewText}</Card.Description>
      <Divider />
      {!!reviewResponse && (
        <div>
          <Quote
            quoteDateTime={reviewResponse.dateTime}
            quoteSource={reviewResponse.source}
            quoteText={reviewResponse.text}
          />
          <Divider />
        </div>
      )}
      <Card.Description textAlign="right">
        {getReviewerCategoryAndStayDateString(
          reviewerCategory,
          reviewerStayDate
        )}
      </Card.Description>
    </Card.Content>
  </Card>
);

Component.displayName = 'Review';

Component.defaultProps = {
  reviewResponse: null,
};

Component.propTypes = {
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
};
