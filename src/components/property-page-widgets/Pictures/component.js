import React from 'react';
import PropTypes from 'prop-types';

import { getUniqueKey } from 'lib/get-unique-key';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { ShowOnDesktop } from 'layout/ShowOnDesktop';
import { ShowOnMobile } from 'layout/ShowOnMobile';
import { Thumbnail } from 'media/Thumbnail';
import { Heading } from 'typography/Heading';
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
        <ShowOnDesktop>
          <Thumbnail size="huge" imageUrl={imageUrl} label={label} />
        </ShowOnDesktop>
        <ShowOnMobile>
          <Thumbnail
            isSquare
            hasRoundedCorners
            size="large"
            imageUrl={imageUrl}
            label={label}
          />
        </ShowOnMobile>
      </GridColumn>
    ))}
    <GridColumn width={12}>
      <Link>Explore all pictures</Link>
    </GridColumn>
  </Grid>
);

Component.displayName = 'Pictures';

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
