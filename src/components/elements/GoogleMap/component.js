import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import { ReactGoogleMap } from 'utils/react-google-maps';

import { GOOGLE_MAPS_API_KEY } from './constants';

/**
 * A map displays a location.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  apiKey,
  height,
  isShowingExactLocation,
  isShowingApproximateLocation,
  latitude,
  longitude,
}) => (
  <ReactGoogleMap
    apiKey={apiKey}
    containerElement={<Card fluid />}
    height={height}
    isShowingApproximateLocation={isShowingApproximateLocation}
    isShowingExactLocation={isShowingExactLocation}
    latitude={latitude}
    longitude={longitude}
  />
);

Component.displayName = 'GoogleMap';

Component.defaultProps = {
  apiKey: GOOGLE_MAPS_API_KEY,
  height: '400px',
  isShowingExactLocation: false,
  isShowingApproximateLocation: false,
};

Component.propTypes = {
  /** An [API key](https://developers.google.com/maps/documentation/javascript/get-api-key) for using Google Maps. */
  apiKey: PropTypes.string,
  /** A valid CSS value to set the height of the map. */
  height: PropTypes.string,
  /** Is the map showing a marker for the approximate location. */
  isShowingApproximateLocation: PropTypes.bool,
  /** Is the map showing a marker for the exact location. */
  isShowingExactLocation: PropTypes.bool,
  /** The latitude coordinate for the center of the map and/or location of the marker */
  latitude: PropTypes.number.isRequired,
  /** The longitude coordinate for the center of the map and/or location of the marker */
  longitude: PropTypes.number.isRequired,
};
