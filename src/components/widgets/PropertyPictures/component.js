import React from 'react';
import PropTypes from 'prop-types';

import { getUniqueKey } from 'lib/get-unique-key';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { ResponsiveImage } from 'widgets/ResponsiveImage';
import { Link } from 'elements/Link';

/**
 * The standard widget for displaying pictures of a property.
 * @returns {Object}
 */
export const Component = ({ pictures }) => (
  <Grid>
    <GridColumn width={12}>
      <Heading>Property pictures</Heading>
    </GridColumn>
    {pictures.map(({ imageUrl, label }, index) => (
      <GridColumn key={getUniqueKey(label, index)} width={4}>
        <ResponsiveImage imageUrl={imageUrl} label={label} />
      </GridColumn>
    ))}
    <GridColumn width={12}>
      <Link>Explore all pictures</Link>
    </GridColumn>
  </Grid>
);

Component.displayName = 'PropertyPictures';

Component.propTypes = {
  /** The pictures to display as responsive images. */
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      /** URL pointing to the image to display. */
      imageUrl: PropTypes.string.isRequired,
      /** A visible label for the image. */
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
