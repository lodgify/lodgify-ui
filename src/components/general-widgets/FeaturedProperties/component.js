import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { FeaturedProperty } from 'general-widgets/FeaturedProperty';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';

/**
 * The standard widget for displaying a list of featured properties.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ featuredProperties, headingText }) => (
  <Grid>
    {headingText && (
      <GridColumn width={12}>
        <Heading>{headingText}</Heading>
      </GridColumn>
    )}
    {featuredProperties.map((featuredProperty, index) => (
      <GridColumn
        computer={4}
        key={buildKeyFromStrings(featuredProperty.propertyName, index)}
        mobile={12}
        tablet={6}
      >
        <FeaturedProperty {...featuredProperty} />
      </GridColumn>
    ))}
  </Grid>
);

Component.displayName = 'FeaturedProperties';

Component.defaultProps = {
  headingText: null,
};

Component.propTypes = {
  /** An array of [`FeaturedProperty`](#/FeaturedProperty) props objects. */
  featuredProperties: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** The text to display as a heading at the top of the widget. */
  headingText: PropTypes.string,
};
