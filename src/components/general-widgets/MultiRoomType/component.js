import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import { Button } from 'elements/Button';
import { Divider } from 'elements/Divider';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { ShowOnMobile } from 'layout/ShowOnMobile';
import { Heading } from 'typography/Heading';
import { Slideshow } from 'media/Slideshow';
import { withResponsive } from 'utils/with-responsive';

import { getRatingMarkup } from './utils/getRatingMarkup';
import { getRoomFeaturesMarkup } from './utils/getRoomFeaturesMarkup';

/**
 * The standard widget for a multi room.
 * @returns {Object}
 */
const Component = ({
  bathroomsNumber,
  bedsNumber,
  checkAvailabilityHandler,
  guestsNumber,
  isUserOnMobile,
  name,
  nightPrice,
  ratingNumber,
  slideShowImages,
}) => (
  <Card fluid>
    <Grid>
      <GridRow>
        <GridColumn computer={4} mobile={12} verticalAlignContent={null}>
          <Slideshow
            additionalClass="fit-height no-shadow no-border-radius"
            images={slideShowImages}
            showBullets={false}
          />
        </GridColumn>
        <GridColumn computer={8} mobile={12}>
          <Grid padded>
            <GridColumn computer={8} mobile={12} tablet={8}>
              <Heading>{name}</Heading>
            </GridColumn>
            <GridColumn computer={4} only="tablet computer" textAlign="right">
              {getRatingMarkup(ratingNumber)}
            </GridColumn>
            {getRoomFeaturesMarkup({
              bedsNumber,
              bathroomsNumber,
              guestsNumber,
              isUserOnMobile,
            })}
            <ShowOnMobile>{getRatingMarkup(ratingNumber)}</ShowOnMobile>
            <GridRow>
              <GridColumn
                textAlign={isUserOnMobile ? 'left' : 'right'}
                width={12}
              >
                <Card.Description>
                  from <Heading>{nightPrice}</Heading> /night
                </Card.Description>
                <ShowOnMobile>
                  <Divider />
                </ShowOnMobile>
                <Button
                  isPositionedRight={isUserOnMobile === false}
                  isRounded
                  onClick={checkAvailabilityHandler}
                >
                  Check Availability
                </Button>
              </GridColumn>
            </GridRow>
          </Grid>
        </GridColumn>
      </GridRow>
    </Grid>
  </Card>
);

Component.displayName = 'MultiRoomType';

Component.propTypes = {
  /** The number of available bathrooms at the multi room. */
  bathroomsNumber: PropTypes.number.isRequired,
  /** The number of available beds at the multi room. */
  bedsNumber: PropTypes.number.isRequired,
  /** A function called when check availability button is clicked. */
  checkAvailabilityHandler: PropTypes.func.isRequired,
  /** The number of guests the multi room can accommodate. */
  guestsNumber: PropTypes.number.isRequired,
  /**
   * Is the user on a mobile device.
   * Provided by `withResponsive` so ignored in the styleguide.
   * @ignore
   */
  isUserOnMobile: PropTypes.bool.isRequired,
  /** The name of the multi room. */
  name: PropTypes.string.isRequired,
  /** The price per night of the multi room, with currency symbol. */
  nightPrice: PropTypes.string.isRequired,
  /** The numeral rating for the multi room, out of 5 */
  ratingNumber: PropTypes.number.isRequired,
  /** The images to display for the slideshow */
  slideShowImages: PropTypes.arrayOf(
    PropTypes.shape({
      /** Alternative text to show if the image can't be loaded by the browser. */
      alternativeText: PropTypes.string,
      /** A set of media conditions indicating to the browser which source to choose.
       *  [See this for more info](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
       */
      sizes: PropTypes.string,
      /** The set of images the browser can choose between depending on screen width.
       *  [See this for more info](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
       */
      sourceSet: PropTypes.string,
      /** Title of the image to show when hovering over it on desktop browsers. */
      title: PropTypes.string,
      /** URL pointing to the image to display. */
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export const ComponentWithResponsive = withResponsive(Component);
