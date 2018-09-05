import React from 'react';
import PropTypes from 'prop-types';

import { LOCATION } from 'utils/default-strings';
import { getParagraphsFromStrings } from 'utils/get-paragraphs-from-strings';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { withResponsive } from 'utils/with-responsive';
import { Divider } from 'elements/Divider';
import { GoogleMap } from 'elements/GoogleMap';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { ShowOnDesktop } from 'layout/ShowOnDesktop';
import { ShowOnMobile } from 'layout/ShowOnMobile';
import { Heading } from 'typography/Heading';
import { Paragraph } from 'typography/Paragraph';
import { Subheading } from 'typography/Subheading';
import { VerticalGutters } from 'layout/VerticalGutters';

import { getTransportOptionsMarkup } from './utils/getTransportOptionsMarkup';
import { getGoogleMapHeight } from './utils/getGoogleMapHeight';

/**
 * The standard widget for displaying the location of a property.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
const Component = ({
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
  <VerticalGutters>
    <Grid stackable>
      <GridColumn width={12}>
        <Heading>{headingText}</Heading>
        <Subheading>{locationSummary}</Subheading>
      </GridColumn>
      <GridColumn computer={6} tablet={12}>
        {getParagraphsFromStrings(locationDescription).map(
          (paragraphText, index) => (
            <Paragraph key={buildKeyFromStrings(paragraphText, index)}>
              {paragraphText}
            </Paragraph>
          )
        )}
      </GridColumn>
      <ShowOnDesktop
        parent={GridColumn}
        parentProps={{ computer: 6, tablet: 12 }}
      >
        {getTransportOptionsMarkup(transportOptions)}
      </ShowOnDesktop>
      <GridColumn width={12}>
        <GoogleMap
          height={getGoogleMapHeight(isUserOnMobile)}
          isShowingApproximateLocation={isShowingApproximateLocation}
          isShowingExactLocation={isShowingExactLocation}
          latitude={latitude}
          longitude={longitude}
        />
      </GridColumn>
      <ShowOnMobile parent={GridColumn} parentProps={{ width: 12 }}>
        <Divider />
        {getTransportOptionsMarkup(transportOptions)}
      </ShowOnMobile>
    </Grid>
  </VerticalGutters>
);

Component.displayName = 'Location';

Component.defaultProps = {
  headingText: LOCATION,
  isShowingApproximateLocation: false,
  isShowingExactLocation: false,
};

Component.propTypes = {
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
  /** The text description of the location. */
  locationDescription: PropTypes.string.isRequired,
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
       * [See here for the full list of valid icon names](https://github.com/lodgify/lodgify-ui/blob/production/src/components/elements/Icon/constants.js)
       */
      iconName: PropTypes.string.isRequired,
      /** A visible label to display for the transport option. */
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export const ComponentWithResponsive = withResponsive(Component);
