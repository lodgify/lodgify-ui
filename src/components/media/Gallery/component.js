import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'elements/Modal';
import { HorizontalGutters } from 'layout/HorizontalGutters';
import { Divider } from 'elements/Divider';
import { Grid } from 'layout/Grid';
import { GridRow } from 'layout/GridRow';
import { GridColumn } from 'layout/GridColumn';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Heading } from 'typography/Heading';
import { ResponsiveImage } from 'media/ResponsiveImage';

/**
 * A gallery displays a collection of images in a modal.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ heading, images, trigger }) => (
  <Modal isFullscreen trigger={trigger}>
    <HorizontalGutters>
      <Divider />
      {heading && (
        <Fragment>
          {heading}
          <Divider hasLine />
        </Fragment>
      )}
      <Grid columns={2} stackable>
        <GridRow>
          {images.map(({ label, ...otherImageProps }, index) => (
            <GridColumn key={buildKeyFromStrings(label, index)}>
              <Heading size="small">{label}</Heading>
              <ResponsiveImage {...otherImageProps} />
              <Divider />
            </GridColumn>
          ))}
        </GridRow>
      </Grid>
      <Divider size="large" />
    </HorizontalGutters>
  </Modal>
);

Component.displayName = 'Gallery';

Component.defaultProps = {
  heading: null,
};

Component.propTypes = {
  /** The content to display as a heading at the top of the gallery. */
  heading: PropTypes.node,
  /** The images to display. */
  images: PropTypes.arrayOf(
    PropTypes.shape({
      /** Alternative text to show if the image can't be loaded by the browser */
      alternativeText: PropTypes.string,
      /** The natural height of the image in px. */
      imageHeight: PropTypes.number,
      /** The label text for the when the image is not found. */
      imageNotFoundLabelText: PropTypes.string,
      /** Title of the image to show when hovering it on desktop browsers */
      imageTitle: PropTypes.string,
      /** URL pointing to the image to display. */
      imageUrl: PropTypes.string.isRequired,
      /** The natural width of the image in px. */
      imageWidth: PropTypes.number,
      /** A visible label for the image. */
      label: PropTypes.string.isRequired,
      /** URL pointing to the placeholder image to render. */
      placeholderImageUrl: PropTypes.string,
      /** Collection of objects to specify different image sources
       *  [See this for more info](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
       */
      sources: PropTypes.arrayOf(
        PropTypes.shape({
          media: PropTypes.string.isRequired,
          srcset: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  /** The element to be clicked to display the gallery. */
  trigger: PropTypes.node.isRequired,
};
