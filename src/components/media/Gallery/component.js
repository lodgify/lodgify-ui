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
          {images.map(({ label, url, ...otherProps }, index) => (
            <GridColumn key={buildKeyFromStrings(label, index)}>
              <Heading size="small">{label}</Heading>
              <ResponsiveImage imageUrl={url} {...otherProps} />
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
  /** The images to display. See [the `ResponsiveImage` component for valid props](#/Media/ResponsiveImage).  */
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** The element to be clicked to display the gallery. */
  trigger: PropTypes.node.isRequired,
};
