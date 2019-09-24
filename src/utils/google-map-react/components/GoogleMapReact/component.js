import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'fast-deep-equal';
import GoogleMapReact from 'google-map-react';
import { fitBounds } from 'google-map-react/utils';
import debounce from 'debounce';

import {
  DEFAULT_ZOOM,
  MARKER_IMAGE_SRC,
  MARKER_IMAGE_STYLE,
  CIRCLE_IMAGE_SRC,
  CIRCLE_IMAGE_STYLE,
} from '../../constants';
import { getMapOptions } from '../../utils/getMapOptions';
import { GoogleMapMarker } from '../GoogleMapMarker';

import { adaptENSWtoNESW } from './utils/adaptENSWtoNESW';
import { getCenterFromBounds } from './utils/getCenterFromBounds';
import { adaptNESWtoENSW } from './utils/adaptNESWtoENSW';
import { getCenter } from './utils/getCenter';
import { getZoomedState } from './utils/getZoomedState';

export class Component extends PureComponent {
  state = {
    areBoundsChanged: false,
    areBoundsChangedProgramatically: false,
    bounds: null,
    center: null,
    isDragged: false,
    isZoomed: false,
    size: null,
    zoom: DEFAULT_ZOOM,
  };

  componentDidMount = () => {
    const { bounds } = this.props;

    if (!bounds) return;

    this.setState({
      bounds: adaptENSWtoNESW(bounds),
      center: getCenterFromBounds(bounds),
    });
  };

  componentDidUpdate = ({ bounds: previousControlledBounds }) => {
    const { areBoundsChanged, bounds, isDragged, isZoomed, size } = this.state;
    const { bounds: controlledBounds, onBoundsChange } = this.props;

    if (areBoundsChanged) {
      onBoundsChange(adaptNESWtoENSW(bounds), isZoomed || isDragged);
      this.setState({
        areBoundsChanged: false,
        areBoundsChangedProgramatically: false,
        isDragged: false,
        isZoomed: false,
      });
    }

    if (isEqual(previousControlledBounds, controlledBounds)) return;

    const { center, newBounds, zoom } = fitBounds(
      adaptENSWtoNESW(controlledBounds),
      size
    );

    this.setState({
      areBoundsChangedProgramatically: true,
      bounds: newBounds,
      center,
      zoom,
    });
  };

  handleChange = ({ bounds, center, size, zoom }) => {
    if (!this.props.bounds) return;
    this.setState({ areBoundsChanged: true, bounds, center, size, zoom });
  };

  handleDrag = debounce(() => {
    this.setState({ isDragged: true });
  });

  handleZoomAnimationEnd = () => this.setState(getZoomedState);

  render = () => {
    const {
      apiKey,
      hasDefaultStyles,
      isShowingExactLocation,
      isShowingApproximateLocation,
      latitude,
      longitude,
      markers,
    } = this.props;
    const { bounds, zoom } = this.state;
    const center = getCenter(this.state.center, latitude, longitude);

    if (!center) return null;

    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: apiKey,
        }}
        bounds={bounds}
        center={center}
        onChange={this.handleChange}
        onDrag={this.handleDrag}
        onZoomAnimationEnd={this.handleZoomAnimationEnd}
        options={getMapOptions(hasDefaultStyles)}
        ref={this.createRef}
        zoom={zoom}
      >
        {!!isShowingExactLocation && (
          <GoogleMapMarker
            imageSrc={MARKER_IMAGE_SRC}
            lat={latitude}
            lng={longitude}
            style={MARKER_IMAGE_STYLE}
          />
        )}
        {!!isShowingApproximateLocation && (
          <GoogleMapMarker
            imageSrc={CIRCLE_IMAGE_SRC}
            lat={latitude}
            lng={longitude}
            style={CIRCLE_IMAGE_STYLE}
          />
        )}
        {markers.map(({ component, key, latitude, longitude }) =>
          React.cloneElement(component, { key, lat: latitude, lng: longitude })
        )}
      </GoogleMapReact>
    );
  };
}

Component.displayName = 'GoogleMapReact';

Component.defaultProps = {
  bounds: null,
  latitude: null,
  longitude: null,
};

Component.propTypes = {
  /** An [API key](https://developers.google.com/maps/documentation/javascript/get-api-key) for using Google Maps. */
  apiKey: PropTypes.string.isRequired,
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
      /** A unique identifier for the marker component. */
      key: PropTypes.string.isRequired,
      /** The latitude coordinate for the marker. */
      latitude: PropTypes.number,
      /** The longitude coordinate for the marker. */
      longitude: PropTypes.number,
    })
  ).isRequired,
  /**
   * A function called when the bounds of a dynamic map change.
   * @param {Object}  bounds
   * @param {number}  bounds.east
   * @param {number}  bounds.north
   * @param {number}  bounds.south
   * @param {number}  bounds.west
   * @param {boolean} isUserAction
   */
  onBoundsChange: PropTypes.func.isRequired,
};
