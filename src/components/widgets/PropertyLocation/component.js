import React from 'react';
import PropTypes from 'prop-types';

import { getParagraphsFromStrings } from 'lib/get-paragraphs-from-strings';
import { getUniqueKey } from 'lib/get-unique-key';
import { getFirstFourItems } from 'lib/get-first-four-items';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { Paragraph } from 'typography/Paragraph';
import { IconCard } from 'elements/IconCard';
import { GoogleMap } from 'elements/GoogleMap';

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
  width,
}) => (
  <GridColumn width={width}>
    <Heading size="tiny">Location</Heading>
    <Paragraph size="tiny">{locationSummary}</Paragraph>
    <Grid>
      <GridColumn width={6}>
        {getParagraphsFromStrings(locationDescription).map(
          (paragraphText, i) => (
            <Paragraph key={getUniqueKey(paragraphText, i)}>
              {paragraphText}
            </Paragraph>
          )
        )}
      </GridColumn>
      <GridColumn width={6}>
        <Grid>
          {getFirstFourItems(transportOptions).map(
            ({ distance, iconName, label }, i) => (
              <GridColumn width={3}>
                <IconCard
                  isFilled
                  key={getUniqueKey(label, i)}
                  label={`${distance} ${label}`}
                  name={iconName}
                />
              </GridColumn>
            )
          )}
        </Grid>
      </GridColumn>
      <GridColumn width={12}>
        <GoogleMap
          isShowingExactLocation={isShowingExactLocation}
          isShowingApproximateLocation={isShowingApproximateLocation}
          latitude={latitude}
          longitude={longitude}
        />
      </GridColumn>
    </Grid>
  </GridColumn>
);

Component.displayName = 'PropertyLocation';

Component.defaultProps = {
  isShowingApproximateLocation: false,
  isShowingExactLocation: false,
  width: 12,
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
  /** The number of columns the widget occupies. */
  width: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
};
