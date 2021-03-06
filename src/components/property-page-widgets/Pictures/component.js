import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { EXPLORE_ALL_PICTURES, PROPERTY_PICTURES } from 'utils/default-strings';
import { getFirstNItems } from 'utils/get-first-n-items';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { ResponsiveImage } from 'media/ResponsiveImage';
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
  id,
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
    <Grid id={id}>
      <GridColumn width={12}>
        <Heading>{headingText}</Heading>
      </GridColumn>
      <section className="property-pictures">
        {getFirstNItems(
          numberOfThumbnails,
          adaptThumbnailImages(galleryImages)
        ).map((imageProps, index) => (
          <div
            className="image-container"
            data-testid={testid(`thumbnail_${index}`)}
            key={index}
            onClick={() => {
              triggerIsOpen(index);
            }}
          >
            <ResponsiveImage
              {...imageProps}
              className="gallery-thumbnail"
              isFluid
              willFill
            />
          </div>
        ))}
      </section>
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
  id: null,
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
  /** The html id of the container dom element. */
  id: PropTypes.string,
  /** The text to display on the link at the bottom of the widget. */
  linkText: PropTypes.string,
  /** The number of images to display as thumbnails. */
  numberOfThumbnails: PropTypes.number,
};
