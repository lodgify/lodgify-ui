import React from 'react';

/**
 * Returns props predicated by react-google-maps
 * See https://tomchentw.github.io/react-google-maps/#usage--configuration
 * @param  {Object} props
 * @param  {string} props.apiKey
 * @param  {string} props.height
 * @return {Object}
 */
export const getReactGoogleMapsRequiredProps = ({
  apiKey,
  height,
  ...props
}) => ({
  // react-google-maps `withScriptjs` props
  googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`,
  loadingElement: <div style={{ height }} />,
  // react-google-maps `withGoogleMap` props
  containerElement: <div style={{ height }} />,
  mapElement: <div style={{ height }} />,
  ...props,
});
