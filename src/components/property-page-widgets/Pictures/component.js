import React from 'react';
import PropTypes from 'prop-types';

import { EXPLORE_ALL_PICTURES, PROPERTY_PICTURES } from 'utils/default-strings';
import { getFirstSixItems } from 'utils/get-first-six-items';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Grid } from 'layout/Grid';
import { GridRow } from 'layout/GridRow';
import { GridColumn } from 'layout/GridColumn';
import { ShowOn } from 'layout/ShowOn';
import { Divider } from 'elements/Divider';
import { Thumbnail } from 'media/Thumbnail';
import { Heading } from 'typography/Heading';
import { Gallery } from 'media/Gallery';
import { getGalleryHeadingMarkup } from 'utils/get-gallery-heading-markup';
import { Link } from 'elements/Link';

/**
 * The standard widget for displaying pictures of a property.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  headingText,
  linkText,
  pictures,
  propertyName,
  ratingNumber,
}) => (
  <Grid columns={3}>
    <GridColumn width={12}>
      <Heading>{headingText}</Heading>
    </GridColumn>
    <GridRow>
      {getFirstSixItems(pictures).map(
        ({ imageUrl, imageSizes, imageSrcSet, label }, index) => (
          <GridColumn key={buildKeyFromStrings(imageUrl, index)}>
            <ShowOn computer parent="div" tablet widescreen>
              <Thumbnail
                imageSizes={imageSizes}
                imageSrcSet={imageSrcSet}
                imageUrl={imageUrl}
                label={label}
                size="huge"
              />
            </ShowOn>
            <ShowOn mobile parent="div">
              <Thumbnail
                hasRoundedCorners
                imageSizes={imageSizes}
                imageSrcSet={imageSrcSet}
                imageUrl={imageUrl}
                isSquare
                label={label}
                size="huge"
              />
            </ShowOn>
            <Divider size="small" />
          </GridColumn>
        )
      )}
    </GridRow>
    <GridColumn width={12}>
      <Gallery
        heading={getGalleryHeadingMarkup(propertyName, ratingNumber)}
        images={pictures}
        trigger={<Link>{linkText}</Link>}
      />
    </GridColumn>
  </Grid>
);

Component.displayName = 'Pictures';

Component.defaultProps = {
  headingText: PROPERTY_PICTURES,
  linkText: EXPLORE_ALL_PICTURES,
  propertyName: null,
  ratingNumber: null,
};

Component.propTypes = {
  /** The text to display as a heading at the top of the widget. */
  headingText: PropTypes.string,
  /** The text to display on the link at the bottom of the widget. */
  linkText: PropTypes.string,
  /** The pictures to display. See [the `ResponsiveImage` component for valid props](#/Media/ResponsiveImage).  */
  pictures: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** The name of the property to display in the gallery modal. */
  propertyName: PropTypes.string,
  /** The numeral rating for the property, out of 5 */
  ratingNumber: PropTypes.number,
};
