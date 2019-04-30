import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import { debounce } from 'lodash';

import { ReactGoogleMap } from 'utils/react-google-maps';

import { getParentNodeWidth } from './utils/getParentNodeWidth';
import { getImgSrc } from './utils/getImgSrc';
import { GOOGLE_MAPS_API_KEY } from './constants';

/**
 * A map displays a location.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export class Component extends PureComponent {
  state = {
    isDynamicMapShowing: false,
    isMouseOverMap: false,
    parentNodeWidth: 0,
  };

  componentDidMount = () => {
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
      height,
      isShowingExactLocation,
      isShowingApproximateLocation,
      latitude,
      longitude,
    } = this.props;

    return (
      <Card fluid style={{ height, maxWidth: '640px' }}>
        {this.state.isDynamicMapShowing ? (
          <ReactGoogleMap
            apiKey={apiKey}
            height={height}
            isShowingApproximateLocation={isShowingApproximateLocation}
            isShowingExactLocation={isShowingExactLocation}
            latitude={latitude}
            longitude={longitude}
          />
        ) : (
          <img
            ref={this.createRef}
            src={getImgSrc(
              apiKey,
              height,
              isShowingExactLocation,
              latitude,
              longitude,
              this.state.parentNodeWidth
            )}
          />
        )}
      </Card>
    );
  };
}

Component.displayName = 'GoogleMap';

Component.defaultProps = {
  apiKey: GOOGLE_MAPS_API_KEY,
  height: '400px',
  isShowingExactLocation: false,
  isShowingApproximateLocation: false,
};

Component.propTypes = {
  /** An [API key](https://developers.google.com/maps/documentation/javascript/get-api-key) for using Google Maps. */
  apiKey: PropTypes.string,
  /** A valid CSS value to set the height of the map. */
  height: PropTypes.string,
  /** Is the map showing a marker for the approximate location. */
  isShowingApproximateLocation: PropTypes.bool,
  /** Is the map showing a marker for the exact location. */
  isShowingExactLocation: PropTypes.bool,
  /** The latitude coordinate for the center of the map and/or location of the marker */
  latitude: PropTypes.number.isRequired,
  /** The longitude coordinate for the center of the map and/or location of the marker */
  longitude: PropTypes.number.isRequired,
};
