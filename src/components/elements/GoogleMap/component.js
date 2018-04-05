import React from 'react';
import PropTypes from 'prop-types';

import { ReactGoogleMap } from 'lib/react-google-maps';

/**
 * A map displays a location.
 * @return {Object}
 */
export const Component = ({
  isShowingExactLocation,
  isShowingApproximateLocation,
  latitude,
  longitude,
}) => (
  <ReactGoogleMap
    isShowingExactLocation={isShowingExactLocation}
    isShowingApproximateLocation={isShowingApproximateLocation}
    latitude={latitude}
    longitude={longitude}
  />
);

Component.displayName = 'GoogleMap';

Component.defaultProps = {
  isShowingExactLocation: false,
  isShowingApproximateLocation: false,
};

Component.propTypes = {
  /** Is the map showing a marker for the exact location. */
  isShowingExactLocation: PropTypes.bool,
  /** Is the map showing a marker for the approximate location. */
  isShowingApproximateLocation: PropTypes.bool,
  /** The latitude coordinate for the center of the map and/or location of the marker */
  latitude: PropTypes.number.isRequired,
  /** The longitude coordinate for the center of the map and/or location of the marker */
  longitude: PropTypes.number.isRequired,
};
