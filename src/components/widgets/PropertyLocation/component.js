import { MOBILE_BREAKPOINT } from 'constants';

import React from 'react';
import PropTypes from 'prop-types';
import { Responsive } from 'semantic-ui-react';

import { getParagraphsFromStrings } from 'lib/get-paragraphs-from-strings';
import { getUniqueKey } from 'lib/get-unique-key';
import { getFirstFourItems } from 'lib/get-first-four-items';
import { Divider } from 'elements/Divider';
import { GoogleMap } from 'elements/GoogleMap';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { ShowOnDesktop } from 'layout/ShowOnDesktop';
import { ShowOnMobile } from 'layout/ShowOnMobile';
import { Heading } from 'typography/Heading';
import { IconCard } from 'elements/IconCard';
import { Paragraph } from 'typography/Paragraph';

import { getTransportOptionLabel } from './utils/getTransportOptionLabel';

/**
 * The standard widget for displaying the location of a property.
 * @returns {Object}
 */
export const Component = ({
  isShowingApproximateLocation,
  isShowingExactLocation,
  latitude,
  locationDescription,
  locationSummary,
  longitude,
  transportOptions,
}) => (
  <Grid stackable>
    <GridColumn width={12}>
      <Heading size="tiny">Location</Heading>
      <Paragraph size="tiny">{locationSummary}</Paragraph>
    </GridColumn>
    <GridColumn width={6}>
      {getParagraphsFromStrings(locationDescription).map(
        (paragraphText, index) => (
          <Paragraph key={getUniqueKey(paragraphText, index)}>
            {paragraphText}
          </Paragraph>
        )
      )}
    </GridColumn>
    <ShowOnDesktop as={GridColumn} width={6}>
      {/* <GridColumn width={6}> */}
      <Grid>
        {getFirstFourItems(transportOptions).map(
          ({ distance, iconName, label }, index) => (
            <GridColumn key={getUniqueKey(label, index)} width={3}>
              <IconCard
                isFilled
                label={getTransportOptionLabel(distance, label)}
                name={iconName}
              />
            </GridColumn>
          )
        )}
      </Grid>
      {/* </GridColumn> */}
    </ShowOnDesktop>
    <Responsive as={GridColumn} width={12} minWidth={599}>
      <GoogleMap
        isShowingExactLocation={isShowingExactLocation}
        isShowingApproximateLocation={isShowingApproximateLocation}
        latitude={latitude}
        longitude={longitude}
      />
    </Responsive>
    <Responsive as={GridColumn} width={12} maxWidth={599}>
      <GoogleMap
        height="200px"
        isShowingExactLocation={isShowingExactLocation}
        isShowingApproximateLocation={isShowingApproximateLocation}
        latitude={latitude}
        longitude={longitude}
      />
      <Divider />
      <Grid>
        {getFirstFourItems(transportOptions).map(
          ({ distance, iconName, label }, index) => (
            <GridColumn key={getUniqueKey(label, index)} width={3}>
              <IconCard
                isFilled
                label={getTransportOptionLabel(distance, label)}
                name={iconName}
              />
            </GridColumn>
          )
        )}
      </Grid>
    </Responsive>
  </Grid>
);

Component.displayName = 'PropertyLocation';

Component.defaultProps = {
  isShowingApproximateLocation: false,
  isShowingExactLocation: false,
};

Component.propTypes = {
  /** Is the map showing a marker for the approximate location. */
  isShowingApproximateLocation: PropTypes.bool,
  /** Is the map showing a marker for the exact location. */
  isShowingExactLocation: PropTypes.bool,
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
       * [See Semantic UI for the full list.](https://react.semantic-ui.com/elements/Icon)
       */
      iconName: PropTypes.string.isRequired,
      /** A visible label to display for the transport option. */
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
