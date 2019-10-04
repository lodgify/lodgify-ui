import React from 'react';
import PropTypes from 'prop-types';

import { EXPLORE_ALL_PICTURES, PROPERTY_PICTURES } from 'utils/default-strings';
import { getFirstNItems } from 'utils/get-first-n-items';
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
  galleryImages,
  headingText,
  linkText,
  numberOfThumbnails,
  propertyName,
  ratingNumber,
  thumbnailImages,
}) => (
  <Grid>
    <GridColumn width={12}>
      <Heading>{headingText}</Heading>
    </GridColumn>
    <GridRow>
      {getFirstNItems(numberOfThumbnails, thumbnailImages).map(
        (imageProps, index) => (
          <GridColumn
            computer={4}
            key={buildKeyFromStrings(imageProps.imageUrl, index)}
            mobile={6}
            tablet={4}
          >
            <ShowOn computer parent="div" tablet widescreen>
              <Thumbnail {...imageProps} size="huge" />
            </ShowOn>
            <ShowOn mobile parent="div">
              <Thumbnail {...imageProps} hasRoundedCorners size="huge" />
            </ShowOn>
            <Divider />
          </GridColumn>
        )
      )}
    </GridRow>
    <GridColumn width={12}>
      <Gallery
        headingText={getGalleryHeadingMarkup(propertyName, ratingNumber)}
        images={galleryImages}
        trigger={<Link>{linkText}</Link>}
      />
    </GridColumn>
  </Grid>
);

Component.displayName = 'Pictures';

Component.defaultProps = {
  headingText: PROPERTY_PICTURES,
  linkText: EXPLORE_ALL_PICTURES,
  numberOfThumbnails: 6,
  propertyName: null,
  ratingNumber: null,
};

Component.propTypes = {
  /** The images to display in the gallery modal. */
  galleryImages: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        /** The text to display above an isolated category of images. */
        categoryText: PropTypes.string,
      }),
      PropTypes.shape({
        /** The natural height of the image. */
        imageHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        /** The label text for the when the image is not found. */
        imageNotFoundLabelText: PropTypes.string,
        /** Title of the image to show when hovering it on desktop browsers */
        imageTitle: PropTypes.string,
        /** URL pointing to the image to display. */
        imageUrl: PropTypes.string.isRequired,
        /** The natural width of the image. */
        imageWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        /** A visible label for the image. */
        label: PropTypes.string.isRequired,
        /** URL pointing to the placeholder image to display. */
        placeholderImageUrl: PropTypes.string,
        /** A list of one or more strings separated by commas indicating a set of source sizes. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
        sizes: PropTypes.string,
        /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
        srcSet: PropTypes.string,
      }),
    ])
  ).isRequired,
  /** The text to display as a heading at the top of the widget. */
  headingText: PropTypes.string,
  /** The text to display on the link at the bottom of the widget. */
  linkText: PropTypes.string,
  /** The number of images to display as thumbnails. */
  numberOfThumbnails: PropTypes.number,
  /** The name of the property to display in the gallery modal. */
  propertyName: PropTypes.string,
  /** The numeral rating for the property, out of 5 */
  ratingNumber: PropTypes.number,
  /** The images to display as thumbnails. See [the `ResponsiveImage` component for valid props](#/Media/ResponsiveImage).  */
  thumbnailImages: PropTypes.arrayOf(PropTypes.object).isRequired,
};
