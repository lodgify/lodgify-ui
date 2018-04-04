import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle,
} from 'react-google-maps';

import {
  reactGoogleMapsRequiredProps,
  mapOptions,
  circleOptions,
} from './constants';

/**
 * Canonical implementation for react-google-maps.
 * See https://tomchentw.github.io/react-google-maps/#usage--configuration
 */
export const ReactGoogleMaps = compose(
  withProps(reactGoogleMapsRequiredProps),
  withScriptjs,
  withGoogleMap
)(({ isShowingExactMarker, isShowingVagueMarker, latitude, longitude }) => {
  const coordinates = { lat: latitude, lng: longitude };
  return (
    <GoogleMap center={coordinates} options={mapOptions}>
      {isShowingExactMarker && <Marker position={coordinates} />}
      {isShowingVagueMarker && (
        <Circle center={coordinates} options={circleOptions} />
      )}
    </GoogleMap>
  );
});
