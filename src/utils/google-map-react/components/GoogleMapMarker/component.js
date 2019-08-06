import React from 'react';
import PropTypes from 'prop-types';

export const Component = ({ imageSrc, latitude, longitude, style }) => (
  <img lat={latitude} lng={longitude} src={imageSrc} style={style} />
);

Component.displayName = 'GoogleMapMarker';

Component.propTypes = {
  /** A url pointing to the image to be used as a marker. */
  imageSrc: PropTypes.string.isRequired,
  /** The latitude coordinate for the center of the map. */
  latitude: PropTypes.number.isRequired,
  /** The longitude coordinate for the center of the map. */
  longitude: PropTypes.number.isRequired,
  /** Inline styles for the marker. */
  style: PropTypes.shape({
    transform: PropTypes.string.isRequired,
  }).isRequired,
};
