import React from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, Marker, Circle } from 'react-google-maps';

import { mapOptions, circleOptions } from './constants';

/**
 * Canonical implementation for react-google-maps.
 * See https://tomchentw.github.io/react-google-maps/#usage--configuration
 */
export const Component = ({
  isShowingExactMarker,
  isShowingVagueMarker,
  latitude,
  longitude,
}) => {
  const coordinates = { lat: latitude, lng: longitude };
  return (
    <GoogleMap center={coordinates} options={mapOptions}>
      {isShowingExactMarker && <Marker position={coordinates} />}
      {isShowingVagueMarker && (
        <Circle center={coordinates} options={circleOptions} />
      )}
    </GoogleMap>
  );
};

Component.displayName = 'ReactGoogleMap';

Component.propTypes = {
  /** Is the map showing a marker of an exact location. */
  isShowingExactMarker: PropTypes.bool.isRequired,
  /** Is the map showing a marker of a vague location. */
  isShowingVagueMarker: PropTypes.bool.isRequired,
  /** The latitude coordinate for the center of the map and/or location of the marker */
  latitude: PropTypes.number.isRequired,
  /** The longitude coordinate for the center of the map and/or location of the marker */
  longitude: PropTypes.number.isRequired,
};
