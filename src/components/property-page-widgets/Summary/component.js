import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

import { ShowOnDesktop } from 'layout/ShowOnDesktop';
import { ShowOnMobile } from 'layout/ShowOnMobile';
import { Heading } from 'typography/Heading';
import { withResponsive } from 'utils/with-responsive';

import { getNightPriceAndRatingMarkup } from './utils/getNightPriceAndRatingMarkup';
import { getNightPriceRatingAndLocationMarkup } from './utils/getNightPriceRatingAndLocationMarkup';

/**
 * The standard widget for displaying the summary details of a property.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
const Component = ({
  locationName,
  nightPrice,
  propertyName,
  ratingNumber,
  isUserOnMobile,
}) => (
  <Segment.Group compact>
    <ShowOnDesktop parent={Segment}>
      <Heading>{propertyName}</Heading>
    </ShowOnDesktop>
    <ShowOnDesktop
      parent={Segment.Group}
      parentProps={{ horizontal: !isUserOnMobile }}
    >
      {getNightPriceRatingAndLocationMarkup(
        ratingNumber,
        nightPrice,
        locationName
      )}
    </ShowOnDesktop>
    <ShowOnMobile
      parent={Segment.Group}
      parentProps={{ horizontal: !isUserOnMobile }}
    >
      {getNightPriceAndRatingMarkup(ratingNumber, nightPrice)}
    </ShowOnMobile>
  </Segment.Group>
);

Component.displayName = 'Summary';

Component.propTypes = {
  /**
   * Is the user on a mobile device.
   * Provided by `withResponsive` so ignored in the styleguide.
   * @ignore
   */
  isUserOnMobile: PropTypes.bool.isRequired,
  /** The name of the location of the property. */
  locationName: PropTypes.string.isRequired,
  /** The price per night of the property, with currency symbol. */
  nightPrice: PropTypes.string.isRequired,
  /** The name of the property. */
  propertyName: PropTypes.string.isRequired,
  /** The numeral rating for the property, out of 5 */
  ratingNumber: PropTypes.number.isRequired,
};

export const ComponentWithResponsive = withResponsive(Component);
