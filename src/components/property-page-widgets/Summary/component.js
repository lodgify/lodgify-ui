import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Rating, Segment } from 'semantic-ui-react';

import { Icon, ICON_NAMES } from 'elements/Icon';
import { Heading } from 'typography/Heading';
import { getNightPriceMarkup } from 'utils/get-night-price-markup/';

/**
 * The standard widget for displaying the summary details of a property.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  hasReducedVersion,
  locationName,
  nightPrice,
  propertyName,
  ratingNumber,
}) => (
  <Segment.Group compact>
    {hasReducedVersion ? (
      <Fragment>
        <Segment as="p">
          {ratingNumber}
          <Rating
            disabled
            maxRating={5}
            rating={Math.round(ratingNumber)}
            size="tiny"
          />
        </Segment>
        <Segment as="p">{getNightPriceMarkup(nightPrice, 'small')}</Segment>
      </Fragment>
    ) : (
      <Fragment>
        <Segment>
          <Heading>{propertyName}</Heading>
        </Segment>
        <Segment.Group horizontal>
          <Segment>
            {locationName}
            <Icon color="yellow" name={ICON_NAMES.MAP_PIN} size="small" />
          </Segment>
          <Segment>
            {ratingNumber}
            <Rating
              disabled
              maxRating={5}
              rating={Math.round(ratingNumber)}
              size="tiny"
            />
          </Segment>
          <Segment>{getNightPriceMarkup(nightPrice, 'small')}</Segment>
        </Segment.Group>
      </Fragment>
    )}
  </Segment.Group>
);

Component.displayName = 'Summary';

Component.defaultProps = {
  hasReducedVersion: false,
};

Component.propTypes = {
  /** Should the reduced version be shown */
  hasReducedVersion: PropTypes.bool,
  /** The name of the location of the property. */
  locationName: PropTypes.string.isRequired,
  /** The price per night of the property, with currency symbol. */
  nightPrice: PropTypes.string.isRequired,
  /** The name of the property. */
  propertyName: PropTypes.string.isRequired,
  /** The numeral rating for the property, out of 5 */
  ratingNumber: PropTypes.number.isRequired,
};
