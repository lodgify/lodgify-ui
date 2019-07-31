import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'fast-deep-equal';
import debounce from 'debounce';
import { GoogleMap } from 'react-google-maps/lib/components/GoogleMap';
import { Marker } from 'react-google-maps/lib/components/Marker';
import { Circle } from 'react-google-maps/lib/components/Circle';
import { OverlayView } from 'react-google-maps/lib/components/OverlayView';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';

import { getBounds } from './utils/getBounds';
import { getMapOptions } from './utils/getMapOptions';
import { BOUNDS_PADDING, circleOptions } from './constants';
import { adaptCoordinates } from './utils/adaptCoordinates';

/**
 * Canonical implementation for react-google-maps.
 * See https://tomchentw.github.io/react-google-maps/#usage--configuration
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export class Component extends PureComponent {
  componentDidMount = () => {
    const { googleMap } = this;
    const { bounds } = this.props;

    if (!googleMap || !bounds) return;

    googleMap.fitBounds(bounds, BOUNDS_PADDING);
  };

  componentDidUpdate = ({ bounds: previousBounds }) => {
    const { googleMap } = this;
    const { bounds } = this.props;

    if (!googleMap || isEqual(previousBounds, bounds)) return;

    googleMap.panToBounds(bounds, BOUNDS_PADDING);
  };

  handleBoundsChange = debounce(() => {
    const bounds = getBounds(this.googleMap);

    if (!bounds) return;

    this.props.onBoundsChange(bounds);
  });

  createRef = googleMap => (this.googleMap = googleMap);

  render = () => {
    const {
      hasDefaultStyles,
      isShowingExactLocation,
      isShowingApproximateLocation,
      latitude,
      longitude,
      markers,
    } = this.props;

    return (
      <GoogleMap
        center={adaptCoordinates(latitude, longitude)}
        onBoundsChanged={this.handleBoundsChange}
        options={getMapOptions(hasDefaultStyles)}
        ref={this.createRef}
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
        {markers.map(({ component, getOffset, latitude, longitude }, index) => (
          <OverlayView
            getPixelPositionOffset={getOffset}
            key={buildKeyFromStrings(component.displayName, index)}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            position={adaptCoordinates(latitude, longitude)}
          >
            {component}
          </OverlayView>
        ))}
      </GoogleMap>
    );
  };
}

Component.displayName = 'ReactGoogleMap';

Component.defaultProps = {
  bounds: null,
  latitude: null,
  longitude: null,
};

Component.propTypes = {
  /** The bounds of the map as latitude and longitude values. */
  bounds: PropTypes.shape({
    east: PropTypes.number.isRequired,
    north: PropTypes.number.isRequired,
    south: PropTypes.number.isRequired,
    west: PropTypes.number.isRequired,
  }),
  /** Does the map have the default Google Maps styles. */
  hasDefaultStyles: PropTypes.bool.isRequired,
  /** Is the map showing a marker for the approximate location at the center of the map. */
  isShowingApproximateLocation: PropTypes.bool.isRequired,
  /** Is the map showing a marker for the exact location location at the center of the map. */
  isShowingExactLocation: PropTypes.bool.isRequired,
  /** The latitude coordinate for the center of the map. */
  latitude: PropTypes.number,
  /** The longitude coordinate for the center of the map. */
  longitude: PropTypes.number,
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
  /**
   * A function called when the bounds of a dynamic map change.
   * @param {Object} bounds
   * @param {number} bounds.east
   * @param {number} bounds.north
   * @param {number} bounds.south
   * @param {number} bounds.west
   */
  onBoundsChange: PropTypes.func.isRequired,
};
