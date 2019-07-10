import React from 'react';
import PropTypes from 'prop-types';
import { GoogleMap } from 'react-google-maps/lib/components/GoogleMap';
import { Marker } from 'react-google-maps/lib/components/Marker';
import { Circle } from 'react-google-maps/lib/components/Circle';
import { OverlayView } from 'react-google-maps/lib/components/OverlayView';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';

import { mapOptions, circleOptions } from './constants';
import { adaptCoordinates } from './utils/adaptCoordinates';

/**
 * Canonical implementation for react-google-maps.
 * See https://tomchentw.github.io/react-google-maps/#usage--configuration
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  isShowingExactLocation,
  isShowingApproximateLocation,
  latitude,
  longitude,
  markers,
}) => (
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
    {markers.map(({ component, latitude, longitude }, index) => (
      <OverlayView
        key={buildKeyFromStrings(component.displayName, index)}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        position={adaptCoordinates(latitude, longitude)}
      >
        {component}
      </OverlayView>
    ))}
  </GoogleMap>
);

Component.displayName = 'ReactGoogleMap';

Component.propTypes = {
  /** Is the map showing a marker for the approximate location at the center of the map. */
  isShowingApproximateLocation: PropTypes.bool.isRequired,
  /** Is the map showing a marker for the exact location location at the center of the map. */
  isShowingExactLocation: PropTypes.bool.isRequired,
  /** The latitude coordinate for the center of the map. */
  latitude: PropTypes.number.isRequired,
  /** The longitude coordinate for the center of the map. */
  longitude: PropTypes.number.isRequired,
  /** The markers to display on the map. */
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      /** The React component to show as a marker. */
      component: PropTypes.node.isRequired,
      /** The latitude coordinate for the marker. */
      latitude: PropTypes.number,
      /** The longitude coordinate for the marker. */
      longitude: PropTypes.number,
    })
  ).isRequired,
};
