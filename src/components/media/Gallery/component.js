import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'elements/Modal';
import { HorizontalGutters } from 'layout/HorizontalGutters';
import { ShowOn } from 'layout/ShowOn';
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
export const Component = ({ headingText, images, trigger }) => (
  <Modal hasPadding header={headingText} isFullscreen trigger={trigger}>
    <HorizontalGutters>
      <Grid columns={2} isStackable>
        <GridRow>
          {images.map(
            ({ categoryText, label, imageUrl, ...otherProps }, index) =>
              categoryText ? (
                <GridColumn
                  key={buildKeyFromStrings(categoryText, index)}
                  width={12}
                >
                  <Divider size="large" />
                  <Heading>{categoryText}</Heading>
                  <ShowOn computer tablet widescreen>
                    <Divider size="small" />
                  </ShowOn>
                </GridColumn>
              ) : (
                <GridColumn key={buildKeyFromStrings(imageUrl, index)}>
                  <Heading size="small">{label}</Heading>
                  <ResponsiveImage imageUrl={imageUrl} {...otherProps} />
                  <Divider />
                </GridColumn>
              )
          )}
        </GridRow>
      </Grid>
      <Divider size="huge" />
    </HorizontalGutters>
  </Modal>
);

Component.displayName = 'Gallery';

Component.defaultProps = {
  headingText: null,
};

Component.propTypes = {
  /** The content to display as a heading at the top of the gallery. */
  headingText: PropTypes.node,
  /** The images to display.  */
  images: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        /** The text to display above an isolated category of images. */
        categoryText: PropTypes.string,
      }),
      PropTypes.shape({
        /** Alternative text to show if the image can't be loaded by the browser */
        alternativeText: PropTypes.string,
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
  /** The element to be clicked to display the gallery. */
  trigger: PropTypes.node.isRequired,
};
