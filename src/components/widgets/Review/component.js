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
 * The standard widget for displaying the reviews of a property.
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
            <GridColumn width={6} floated="left">
              <Paragraph size="tiny">
                {getReviewerNameAndLocationString(
                  reviewerName,
                  reviewerLocation
                )}
              </Paragraph>
            </GridColumn>
            <GridColumn
              width={6}
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
      {reviewResponse && (
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
  /** the reviewers category. */
  reviewerCategory: PropTypes.string.isRequired,
  /** The reviewers location. */
  reviewerLocation: PropTypes.string.isRequired,
  /** The name of the individual that wrote the review. */
  reviewerName: PropTypes.string.isRequired,
  /** The owners response to the review. */
  reviewResponse: PropTypes.shape({
    /** The time of the quote. */
    dateTime: PropTypes.string.isRequired,
    /** The text for the quote. */
    text: PropTypes.string.isRequired,
    /** The name of the individual being quoted. */
    source: PropTypes.string.isRequired,
  }),
  /** the date the reviewer stayed. */
  reviewerStayDate: PropTypes.string.isRequired,
  /** The review's main body of text. */
  reviewText: PropTypes.string.isRequired,
  /** The title of the review. */
  reviewTitle: PropTypes.string.isRequired,
};
