import React, { Fragment } from 'react';
import { upperCase, size } from 'lodash';

import { Button } from 'elements/Button';
import { ICON_NAMES } from 'elements/Icon';
import { HorizontalGutters } from 'layout/HorizontalGutters';
import { FlexContainer } from 'layout/FlexContainer';
import { Gallery } from 'media/Gallery';
import { Divider } from 'elements/Divider';
import { getGalleryHeadingMarkup } from 'utils/get-gallery-heading-markup';

/**
 * @typedef {Object} null
 * @param {Array} images
 * @param {string} propertyName
 * @param {number} ratingNumber
 * @param {string} secondaryButtonText
 * @return {Object|null}
 */
export const getGalleryMarkup = (
  images,
  propertyName,
  ratingNumber,
  secondaryButtonText
) =>
  size(images) > 1 ? (
    <Fragment>
      <FlexContainer alignItems="flex-end">
        <HorizontalGutters>
          <Gallery
            heading={getGalleryHeadingMarkup(propertyName, ratingNumber)}
            images={images}
            trigger={
              <Button
                icon={ICON_NAMES.PLACEHOLDER}
                isCompact
                isPositionedRight
                isSecondary
              >
                {upperCase(secondaryButtonText)}
              </Button>
            }
          />
        </HorizontalGutters>
      </FlexContainer>
      <Divider />
    </Fragment>
  ) : null;
