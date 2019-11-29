import React, { useState } from 'react';
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
import { Link } from 'elements/Link';
import { testidFactory } from 'utils/testid';

const TEST_ID_PREFIX = 'pictures';

const testid = testidFactory(TEST_ID_PREFIX);

/**
 * The standard widget for displaying pictures of a property.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  galleryImages,
  headingText,
  linkText,
  numberOfThumbnails,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setIndex] = useState(2);

  const triggerIsOpen = index => {
    setIsOpen(true);
    setIndex(index);
  };
  const close = () => setIsOpen(false);

  const adaptThumbnailImages = images =>
    images.map(({ url, descriptionText }) => ({
      imageUrl: url,
      imageUrlAlternativeText: descriptionText,
      label: descriptionText,
    }));

  return (
    <Grid>
      <GridColumn width={12}>
        <Heading>{headingText}</Heading>
      </GridColumn>
      <GridRow>
        {getFirstNItems(
          numberOfThumbnails,
          adaptThumbnailImages(galleryImages)
        ).map((imageProps, index) => (
          <GridColumn
            computer={4}
            data-testid={testid(`thumbnail_${index}`)}
            key={buildKeyFromStrings(imageProps.imageUrl, index)}
            mobile={6}
            onClick={() => {
              triggerIsOpen(index);
            }}
            tablet={4}
          >
            <ShowOn computer parent="div" tablet widescreen>
              <Thumbnail
                className="gallery-thumbnail"
                {...imageProps}
                size="huge"
              />
            </ShowOn>
            <ShowOn mobile parent="div">
              <Thumbnail
                className="gallery-thumbnail"
                {...imageProps}
                hasRoundedCorners
                size="small"
              />
            </ShowOn>
            <Divider />
          </GridColumn>
        ))}
      </GridRow>
      <GridColumn width={12}>
        <Gallery
          data-testid={testid('gallery')}
          images={galleryImages}
          isOpen={isOpen}
          onClick={triggerIsOpen}
          onClose={close}
          startIndex={currentIndex}
          trigger={
            <Link
              data-testid={testid('triggerLink')}
              onClick={() => {
                triggerIsOpen(0);
              }}
            >
              {linkText}
            </Link>
          }
        />
      </GridColumn>
    </Grid>
  );
};

Component.displayName = 'Pictures';

Component.defaultProps = {
  headingText: PROPERTY_PICTURES,
  linkText: EXPLORE_ALL_PICTURES,
  numberOfThumbnails: 6,
};

Component.propTypes = {
  /** The images to display in the gallery modal. */
  galleryImages: PropTypes.arrayOf(
    PropTypes.shape({
      /** A description of the image to show above the slideshow when the image is showing. */
      descriptionText: PropTypes.string,
      /** A list of one or more strings separated by commas indicating a set of source sizes. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
      sizes: PropTypes.string,
      /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
      srcSet: PropTypes.string,
      /** Title of the image to show when hovering over it on desktop browsers. */
      title: PropTypes.string,
      /** URL pointing to the image to display. */
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** The text to display as a heading at the top of the widget. */
  headingText: PropTypes.string,
  /** The text to display on the link at the bottom of the widget. */
  linkText: PropTypes.string,
  /** The number of images to display as thumbnails. */
  numberOfThumbnails: PropTypes.number,
};
