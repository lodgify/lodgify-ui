import React from 'react';
import { Card } from 'semantic-ui-react';

/**
 * Predicated by react-google-maps
 * See https://tomchentw.github.io/react-google-maps/#usage--configuration
 */
export const reactGoogleMapsRequiredProps = {
  // react-google-maps `withScriptjs` props
  googleMapURL:
    'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
  loadingElement: <div style={{ height: '100%' }} />,
  // react-google-maps `withGoogleMap` props
  containerElement: <Card style={{ height: '400px', width: '100%' }} />,
  mapElement: <div style={{ height: '100%' }} />,
};
