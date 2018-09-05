import React from 'react';

/**
 * Returns props predicated by react-google-maps
 * See https://tomchentw.github.io/react-google-maps/#usage--configuration
 * @param  {Object} props
 * @param  {string} props.apiKey
 * @param  {Object} props.containerElement
 * @param  {string} props.height
 * @return {Object}
 */
export const getReactGoogleMapsRequiredProps = ({
  apiKey,
  containerElement,
  height,
  ...props
}) => ({
  // react-google-maps `withScriptjs` props
  googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`,
  loadingElement: <div style={{ height }} />,
  // react-google-maps `withGoogleMap` props
  containerElement,
  mapElement: <div style={{ height }} />,
  ...props,
});
