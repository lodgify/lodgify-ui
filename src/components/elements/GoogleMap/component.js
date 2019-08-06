import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import { debounce } from 'debounce';

import { GoogleMapReact } from 'utils/google-map-react';

import { getParentNodeWidth } from './utils/getParentNodeWidth';
import { getHeight } from './utils/getHeight';
import { getMaxWidth } from './utils/getMaxWidth';
import { getImgSrc } from './utils/getImgSrc';
import { GOOGLE_MAPS_API_KEY } from './constants';

/**
 * A map displays a location.
 * By default, the map will display a static image then load a dynamic interface on user interaction.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export class Component extends PureComponent {
  state = {
    isDynamicMapShowing: false,
    isMouseOverMap: false,
    parentNodeWidth: 0,
  };

  componentDidMount = () => {
    if (!this.img) return;

    global.addEventListener('resize', this.setParentNodeWidth);
    this.img.addEventListener('mousedown', this.setIsDynamicMapShowingTrue);
    this.img.addEventListener('mouseover', this.setIsMouseOverMapTrue);
    this.img.addEventListener('mouseout', this.setIsMouseOverMapFalse);
    this.setParentNodeWidth();
  };

  componentDidUpdate = (previousProps, previousState) =>
    !this.state.isDynamicMapShowing &&
    !previousState.isMouseOverMap &&
    this.state.isMouseOverMap &&
    global.setTimeout(
      () => this.state.isMouseOverMap && this.setIsDynamicMapShowingTrue(),
      500
    );

  componentWillUnmount = () => {
    if (!this.img) return;

    global.removeEventListener('resize', this.setParentNodeWidth);
    this.img.removeEventListener('mousedown', this.setIsDynamicMapShowingTrue);
    this.img.removeEventListener('mouseover', this.setIsMouseOverMapTrue);
    this.img.removeEventListener('mouseout', this.setIsMouseOverMapFalse);
  };

  createRef = img => (this.img = img);

  setParentNodeWidth = debounce(() => {
    const parentNodeWidth = getParentNodeWidth(this.img);

    this.setState({ parentNodeWidth });
  }, 10);

  setIsDynamicMapShowingTrue = () =>
    this.setState({ isDynamicMapShowing: true });

  setIsMouseOverMapTrue = () => this.setIsMouseOverMap(true);

  setIsMouseOverMapFalse = () => this.setIsMouseOverMap(false);

  setIsMouseOverMap = isMouseOverMap => this.setState({ isMouseOverMap });

  render = () => {
    const {
      apiKey,
      bounds,
      hasDefaultStyles,
      isFullBleed,
      isFluid,
      isShowingExactLocation,
      isShowingApproximateLocation,
      latitude,
      longitude,
      markers,
      onBoundsChange,
    } = this.props;

    const height = getHeight(this.props.height, isFullBleed, isFluid);

    return isFullBleed ? (
      <GoogleMapReact
        apiKey={apiKey}
        bounds={bounds}
        hasDefaultStyles={hasDefaultStyles}
        isShowingApproximateLocation={isShowingApproximateLocation}
        isShowingExactLocation={isShowingExactLocation}
        latitude={latitude}
        longitude={longitude}
        markers={markers}
        onBoundsChange={onBoundsChange}
      />
    ) : (
      <Card fluid style={{ height, maxWidth: getMaxWidth(isFluid) }}>
        {isFluid || this.state.isDynamicMapShowing ? (
          <GoogleMapReact
            apiKey={apiKey}
            bounds={bounds}
            hasDefaultStyles={hasDefaultStyles}
            isShowingApproximateLocation={isShowingApproximateLocation}
            isShowingExactLocation={isShowingExactLocation}
            latitude={latitude}
            longitude={longitude}
            markers={markers}
            onBoundsChange={onBoundsChange}
          />
        ) : (
          <img
            ref={this.createRef}
            src={getImgSrc(this.props, height, this.state.parentNodeWidth)}
          />
        )}
      </Card>
    );
  };
}

Component.displayName = 'GoogleMap';

Component.defaultProps = {
  apiKey: GOOGLE_MAPS_API_KEY,
  bounds: null,
  hasDefaultStyles: false,
  height: '400px',
  isFluid: false,
  isFullBleed: false,
  isShowingExactLocation: false,
  isShowingApproximateLocation: false,
  latitude: null,
  longitude: null,
  markers: [],
  onBoundsChange: Function.prototype,
};

Component.propTypes = {
  /** An [API key](https://developers.google.com/maps/documentation/javascript/get-api-key) for using Google Maps. */
  apiKey: PropTypes.string,
  /** The bounds of the map as latitude and longitude values. */
  bounds: PropTypes.shape({
    east: PropTypes.number.isRequired,
    north: PropTypes.number.isRequired,
    south: PropTypes.number.isRequired,
    west: PropTypes.number.isRequired,
  }),
  /** Does the map have the default Google Maps styles. */
  hasDefaultStyles: PropTypes.bool,
  /** A valid CSS value to set the height of the map. */
  height: PropTypes.string,
  /** Does the map show on a card which fills the width and height of its container. */
  isFluid: PropTypes.bool,
  /** Does the map fill the width and height of its container. */
  isFullBleed: PropTypes.bool,
  /** Is the map showing a marker for the approximate location at the center of the map. */
  isShowingApproximateLocation: PropTypes.bool,
  /** Is the map showing a marker for the exact location location at the center of the map. */
  isShowingExactLocation: PropTypes.bool,
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
  ),
  /**
   * A function called when the bounds of a dynamic map change.
   * @param {Object} bounds
   * @param {number} bounds.east
   * @param {number} bounds.north
   * @param {number} bounds.south
   * @param {number} bounds.west
   */
  onBoundsChange: PropTypes.func,
};
