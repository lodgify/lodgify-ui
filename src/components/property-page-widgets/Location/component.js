import React from 'react';
import PropTypes from 'prop-types';

import { size } from 'utils/size';
import { LOCATION } from 'utils/default-strings';
import { Divider } from 'elements/Divider';
import { GoogleMap } from 'elements/GoogleMap';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { ShowOn } from 'layout/ShowOn';
import { Subheading } from 'typography/Subheading';
import { withResponsive } from 'utils/with-responsive';

import { getTransportOptionsMarkup } from './utils/getTransportOptionsMarkup';
import { getGoogleMapHeight } from './utils/getGoogleMapHeight';
import { getLocationDescription } from './utils/getLocationDescription';

/**
 * The standard widget for displaying the location of a property.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
const Component = ({
  apiKey,
  headingText,
  isShowingApproximateLocation,
  isShowingExactLocation,
  isUserOnMobile,
  latitude,
  locationDescription,
  locationSummary,
  longitude,
  transportOptions,
}) => (
  <Grid isStackable>
    <GridColumn width={12}>
      <Heading>{headingText}</Heading>
      <Subheading>{locationSummary}</Subheading>
    </GridColumn>
    {!!locationDescription && getLocationDescription(locationDescription)}
    {size(transportOptions) > 0 && (
      <ShowOn
        computer
        parent={GridColumn}
        parentProps={{ computer: 6, tablet: 12 }}
        tablet
        widescreen
      >
        {getTransportOptionsMarkup(transportOptions)}
      </ShowOn>
    )}
    <GridColumn width={12}>
      <GoogleMap
        apiKey={apiKey}
        height={getGoogleMapHeight(isUserOnMobile)}
        isShowingApproximateLocation={isShowingApproximateLocation}
        isShowingExactLocation={isShowingExactLocation}
        latitude={latitude}
        longitude={longitude}
      />
    </GridColumn>
    {size(transportOptions) > 0 && (
      <ShowOn mobile parent={GridColumn} parentProps={{ width: 12 }}>
        <Divider />
        {getTransportOptionsMarkup(transportOptions)}
      </ShowOn>
    )}
  </Grid>
);

Component.displayName = 'Location';

Component.defaultProps = {
  apiKey: undefined,
  headingText: LOCATION,
  isShowingApproximateLocation: false,
  isShowingExactLocation: false,
  locationDescription: null,
  transportOptions: [],
};

Component.propTypes = {
  /** An [API key](https://developers.google.com/maps/documentation/javascript/get-api-key) for using Google Maps. */
  apiKey: PropTypes.string,
  /** The text to display as a heading at the top of the widget. */
  headingText: PropTypes.string,
  /** Is the map showing a marker for the approximate location. */
  isShowingApproximateLocation: PropTypes.bool,
  /** Is the map showing a marker for the exact location. */
  isShowingExactLocation: PropTypes.bool,
  /**
   * Is the user on a mobile device.
   * Provided by `withResponsive` so ignored in the styleguide.
   * @ignore
   */
  isUserOnMobile: PropTypes.bool.isRequired,
  /** The latitude coordinate for the center of the map and/or location of the marker */
  latitude: PropTypes.number.isRequired,
  /** The text description of the location. Respects HTML markup. */
  locationDescription: PropTypes.string,
  /** The summary of the location. */
  locationSummary: PropTypes.string.isRequired,
  /** The longitude coordinate for the center of the map and/or location of the marker */
  longitude: PropTypes.number.isRequired,
  /** The transport options to display. Maximum four. */
  transportOptions: PropTypes.arrayOf(
    PropTypes.shape({
      /** The distance of the transport option from the location. */
      distance: PropTypes.string.isRequired,
      /**
       * The name of the icon to display.
       * [See here for the full list of valid icon names](https://github.com/lodgify/lodgify-ui/blob/master/src/components/elements/Icon/constants.js)
       */
      iconName: PropTypes.string.isRequired,
      /** A visible label to display for the transport option. */
      label: PropTypes.string.isRequired,
    })
  ),
};

export const ComponentWithResponsive = withResponsive(Component);
