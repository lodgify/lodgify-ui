import React from 'react';
import PropTypes from 'prop-types';

import { ReactGoogleMaps } from './reactGoogleMaps';

/**
 * A map displays a location.
 * @return {Object}
 */
export const Component = ({
  isShowingExactMarker,
  isShowingVagueMarker,
  latitude,
  longitude,
}) => (
  <ReactGoogleMaps
    isShowingExactMarker={isShowingExactMarker}
    isShowingVagueMarker={isShowingVagueMarker}
    latitude={latitude}
    longitude={longitude}
  />
);

Component.displayName = 'GoogleMap';

Component.defaultProps = {
  isShowingExactMarker: false,
  isShowingVagueMarker: false,
};

Component.propTypes = {
  /** Is the map showing a marker of an exact location. */
  isShowingExactMarker: PropTypes.bool,
  /** Is the map showing a marker of a vague location. */
  isShowingVagueMarker: PropTypes.bool,
  /** The latitude coordinate for the center of the map and/or location of the marker */
  latitude: PropTypes.bool.isRequired,
  /** The longitude coordinate for the center of the map and/or location of the marker */
  longitude: PropTypes.bool.isRequired,
};
