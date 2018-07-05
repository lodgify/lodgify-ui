import React from 'react';
import PropTypes from 'prop-types';
import { Card, List, Rating } from 'semantic-ui-react';

import { Button } from 'elements/Button';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { Heading } from 'typography/Heading';
import { Icon } from 'elements/Icon';
import { Slideshow } from 'media/Slideshow';

import { getPluralString } from './utils/getPluralString';

/**
 * The standard widget for a multi room.
 * @returns {Object}
 */
export const Component = ({
  bathroomsNumber,
  bedsNumber,
  guestsNumber,
  nightPrice,
  name,
  ratingNumber,
  slideShowImages,
  checkAvailabilityHandler,
}) => (
  <Card fluid>
    <Grid>
      <GridRow>
        <GridColumn verticalAlignContent={null} width={4}>
          <Slideshow
            additionalClass="fit-height no-shadow no-border-radius"
            images={slideShowImages}
            showBullets={false}
          />
        </GridColumn>
        <GridColumn width={8}>
          <Grid padded>
            <GridRow columns={2}>
              <GridColumn width={8}>
                <Heading>{name}</Heading>
              </GridColumn>
              <GridColumn textAlign="right" width={4}>
                {ratingNumber}
                <Rating
                  disabled
                  maxRating={5}
                  rating={Math.round(ratingNumber)}
                  size="tiny"
                />
              </GridColumn>
            </GridRow>
            <List floated="left" horizontal>
              <List.Item>
                <Icon
                  label={getPluralString(guestsNumber, 'Guest', 'Guests')}
                  name="guests"
                  size="small"
                />
              </List.Item>
              <List.Item>
                <Icon
                  label={getPluralString(bedsNumber, 'Bedroom', 'Bedrooms')}
                  name="double bed"
                  size="small"
                />
              </List.Item>
              <List.Item>
                <Icon
                  label={getPluralString(
                    bathroomsNumber,
                    'Bathroom',
                    'Bathrooms'
                  )}
                  name="bathroom"
                  size="small"
                />
              </List.Item>
            </List>
            <GridRow>
              <GridColumn textAlign="right" width={12}>
                <Card.Description>
                  from <Heading>{nightPrice}</Heading> /night
                </Card.Description>
                <Button
                  isPositionedRight
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
