import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap } from 'react-google-maps';

import { getReactGoogleMapsRequiredProps } from './utils/getReactGoogleMapsRequiredProps';
import { Component } from './component';

/**
 * Canonical implementation for react-google-maps.
 * See https://tomchentw.github.io/react-google-maps/#usage--configuration
 */
export const Container = compose(
  withProps(getReactGoogleMapsRequiredProps),
  withScriptjs,
  withGoogleMap
)(Component);
