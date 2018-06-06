import React from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, Marker, Circle } from 'react-google-maps';

import { mapOptions, circleOptions } from './constants';
import { adaptCoordinates } from './utils/adaptCoordinates';

/**
 * Canonical implementation for react-google-maps.
 * See https://tomchentw.github.io/react-google-maps/#usage--configuration
 */
export const Component = ({
  isShowingExactLocation,
  isShowingApproximateLocation,
  latitude,
  longitude,
}) => {
  return (
    <GoogleMap
      center={adaptCoordinates(latitude, longitude)}
      options={mapOptions}
    >
      {!!isShowingExactLocation && (
        <Marker position={adaptCoordinates(latitude, longitude)} />
      )}
      {!!isShowingApproximateLocation && (
        <Circle
          center={adaptCoordinates(latitude, longitude)}
          options={circleOptions}
        />
      )}
    </GoogleMap>
  );
};

Component.displayName = 'ReactGoogleMap';

Component.propTypes = {
  /** Is the map showing a marker for the approximate location. */
  isShowingApproximateLocation: PropTypes.bool.isRequired,
  /** Is the map showing a marker for the exact location. */
  isShowingExactLocation: PropTypes.bool.isRequired,
  /** The latitude coordinate for the center of the map and/or location of the marker */
  latitude: PropTypes.number.isRequired,
  /** The longitude coordinate for the center of the map and/or location of the marker */
  longitude: PropTypes.number.isRequired,
};
