import React from 'react';
import PropTypes from 'prop-types';

export const Component = ({ imageSrc, style }) => (
  <img src={imageSrc} style={style} />
);

Component.displayName = 'GoogleMapMarker';

Component.propTypes = {
  /** A url pointing to the image to be used as a marker. */
  imageSrc: PropTypes.string.isRequired,
  /** Inline styles for the marker. */
  style: PropTypes.shape({
    transform: PropTypes.string.isRequired,
  }).isRequired,
};
