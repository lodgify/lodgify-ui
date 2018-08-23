import React from 'react';
import PropTypes from 'prop-types';

import { EXPLORE_ALL_PICTURES, PROPERTY_PICTURES } from 'utils/default-strings';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';
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
export const Component = ({
  pictures,
  propertyPicturesHeadingText,
  propertyPicturesLinkText,
}) => (
  <Grid>
    <GridColumn width={12}>
      <Heading>{propertyPicturesHeadingText}</Heading>
    </GridColumn>
    {pictures.map(({ imageUrl, label }, index) => (
      <GridColumn key={buildKeyFromStrings(label, index)} width={4}>
        <ShowOnDesktop>
          <Thumbnail imageUrl={imageUrl} label={label} size="huge" />
        </ShowOnDesktop>
        <ShowOnMobile>
          <Thumbnail
            hasRoundedCorners
            imageUrl={imageUrl}
            isSquare
            label={label}
            size="large"
          />
        </ShowOnMobile>
      </GridColumn>
    ))}
    <GridColumn width={12}>
      <Link>{propertyPicturesLinkText}</Link>
    </GridColumn>
  </Grid>
);

Component.displayName = 'Pictures';

Component.defaultProps = {
  propertyPicturesHeadingText: PROPERTY_PICTURES,
  propertyPicturesLinkText: EXPLORE_ALL_PICTURES,
};

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
  /** The heading text */
  propertyPicturesHeadingText: PropTypes.string,
  /** The link text */
  propertyPicturesLinkText: PropTypes.string,
};
