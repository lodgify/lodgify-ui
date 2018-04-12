import React from 'react';
import PropTypes from 'prop-types';
import { Card, Rating } from 'semantic-ui-react';

import { Paragraph } from 'typography/Paragraph';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';

import { getReviewerNameAndLocationString } from './utils/getReviewerNameAndLocationString';
// import { Heading } from 'typography/Heading';

/**
 * The standard widget for displaying the summary details of a property.
 * @returns {Object}
 */
export const Component = ({
  ratingNumber,
  reviewerCategory,
  reviewerLocation,
  reviewerName,
  reviewerStayDate,
  reviewResponse,
  reviewText,
  reviewTitle,
}) => (
  <Card fluid>
    <Card.Content>
      <Card.Meta>
        <Grid>
          <GridRow verticalAlign="middle">
            <GridColumn width={6} floated="left">
              <Paragraph size="small">
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
      <Card.Header>{reviewTitle}</Card.Header>
      <Card.Description>{reviewText}</Card.Description>
      {reviewResponse && <quoteblock>{reviewResponse}</quoteblock>}
      <Card.Description textAlign="right">
        {getReviewerNameAndLocationString(reviewerCategory, reviewerStayDate)}
      </Card.Description>
    </Card.Content>
  </Card>
);

Component.displayName = 'Review';

// TODO: use the proper object for the review response using the Quote format
Component.defaultProps = {
  reviewResponse: '',
};

Component.propTypes = {
  /** The numeral rating for the property given in the review, out of 5 */
  ratingNumber: PropTypes.number.isRequired,
  /** the reviewers category */
  reviewerCategory: PropTypes.string.isRequired,
  /** The reviewers location */
  reviewerLocation: PropTypes.string.isRequired,
  /** The name of the individual that wrote the review */
  reviewerName: PropTypes.string.isRequired,
  /** the date the reviewer stayed */
  reviewerStayDate: PropTypes.string.isRequired,
  /** The review's main body of text */
  reviewText: PropTypes.string.isRequired,
  /** The title of the review */
  reviewTitle: PropTypes.string.isRequired,
  /** The owners response to the review */
  reviewResponse: PropTypes.string,
};
