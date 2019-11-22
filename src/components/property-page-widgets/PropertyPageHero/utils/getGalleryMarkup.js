import React, { Fragment } from 'react';

import { toUpper } from 'utils/to-upper';
import { size } from 'utils/size';
import { Button } from 'elements/Button';
import { ICON_NAMES } from 'elements/Icon';
import { HorizontalGutters } from 'layout/HorizontalGutters';
import { FlexContainer } from 'layout/FlexContainer';
import { Gallery } from 'media/Gallery';
import { Divider } from 'elements/Divider';

/**
 * @typedef {Object} null
 * @param {Array} images
 * @param {string} secondaryButtonText
 * @return {Object|null}
 */
export const getGalleryMarkup = (images, secondaryButtonText) =>
  size(images) > 1 ? (
    <Fragment>
      <FlexContainer alignItems="flex-end">
        <HorizontalGutters>
          <Gallery
            images={images}
            trigger={
              <Button
                icon={ICON_NAMES.PLACEHOLDER}
                isCompact
                isPositionedRight
                isSecondary
              >
                {toUpper(secondaryButtonText)}
              </Button>
            }
          />
        </HorizontalGutters>
      </FlexContainer>
      <Divider />
    </Fragment>
  ) : null;
