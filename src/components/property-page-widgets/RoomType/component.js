import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import { Divider } from 'elements/Divider';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { Link } from 'elements/Link';
import { Icon, ICON_NAMES } from 'elements/Icon';
import { Modal } from 'elements/Modal';
import { ShowOn } from 'layout/ShowOn';
import { Heading } from 'typography/Heading';
import { Slideshow } from 'media/Slideshow';
import { withResponsive } from 'utils/with-responsive';
import { getNightPriceMarkup } from 'utils/get-night-price-markup';

import { getRoomFeaturesMarkup } from './utils/getRoomFeaturesMarkup';
import { getModalContentMarkup } from './utils/getModalContentMarkup';

/**
 * The standard widget for displaying a room type in the context of a property page.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
const Component = ({
  amenities,
  description,
  extraFeatures,
  features,
  isUserOnMobile,
  name,
  nightPrice,
  ratingNumber,
  slideShowImages,
}) => (
  <Card className="has-room-type-gallery" fluid>
    <Grid>
      <GridRow>
        <GridColumn computer={4} mobile={12} verticalAlignContent={null}>
          <Slideshow
            hasShadow={false}
            images={slideShowImages}
            isRounded={false}
            isShowingBulletNavigation={false}
            isStretched
          />
        </GridColumn>
        <GridColumn computer={8} mobile={12}>
          <Grid padded>
            <GridColumn computer={12} floated="left" mobile={10}>
              <Heading>{name}</Heading>
            </GridColumn>
            <GridColumn
              only="mobile"
              textAlign="right"
              verticalAlignContent="middle"
              width={2}
            >
              <Modal
                trigger={
                  <Icon
                    color="yellow"
                    isCircular
                    isColorInverted
                    name={ICON_NAMES.INFO}
                    size="small"
                  />
                }
              >
                {getModalContentMarkup(
                  amenities,
                  description,
                  extraFeatures,
                  features,
                  name,
                  nightPrice,
                  ratingNumber,
                  slideShowImages,
                  isUserOnMobile
                )}
              </Modal>
            </GridColumn>
            {getRoomFeaturesMarkup(isUserOnMobile, features)}
            <GridRow>
              <GridColumn
                only="tablet computer"
                verticalAlignContent="bottom"
                width={4}
              >
                <Modal size="small" trigger={<Link>More Info</Link>}>
                  {getModalContentMarkup(
                    amenities,
                    description,
                    extraFeatures,
                    features,
                    name,
                    nightPrice,
                    ratingNumber,
                    slideShowImages,
                    isUserOnMobile
                  )}
                </Modal>
              </GridColumn>
              <GridColumn
                textAlign={isUserOnMobile ? 'left' : 'right'}
                width={8}
              >
                <Card.Description>
                  {getNightPriceMarkup(nightPrice)}
                </Card.Description>
                <ShowOn mobile parent={Divider} />
              </GridColumn>
            </GridRow>
          </Grid>
        </GridColumn>
      </GridRow>
    </Grid>
  </Card>
);

Component.displayName = 'RoomType';

Component.defaultProps = {
  description: null,
  extraFeatures: [],
  ratingNumber: null,
};

Component.propTypes = {
  /** A list of amenity categories displayed in the modal */
  amenities: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The name of the icon to display.
       * [See here for the full list of valid icon names](https://github.com/lodgify/lodgify-ui/blob/production/src/components/elements/Icon/constants.js)
       */
      iconName: PropTypes.string.isRequired,
      /** The list of amenity items displayed for each category */
      items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      /** A visible label to display for the amenity. */
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** A description to be displayed in the modal */
  description: PropTypes.string,
  /** The room features to display in the modal */
  extraFeatures: PropTypes.arrayOf(
    PropTypes.shape({
      /** The feature label to display. */
      labelText: PropTypes.string,
    })
  ),
  /** The room features to display in the card and modal */
  features: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The name of the icon to display.
       * [See here for the full list of valid icon names](https://github.com/lodgify/lodgify-ui/blob/production/src/components/elements/Icon/constants.js)
       */
      iconName: PropTypes.string,
      /** The feature label to display. */
      labelText: PropTypes.string.isRequired,
    })
  ).isRequired,
  /**
   * Is the user on a mobile device.
   * Provided by `withResponsive` so ignored in the styleguide.
   * @ignore
   */
  isUserOnMobile: PropTypes.bool.isRequired,
  /** The name of the room. */
  name: PropTypes.string.isRequired,
  /** The price per night of the room, with currency symbol. */
  nightPrice: PropTypes.string.isRequired,
  /** The numeral rating for the property room given in the review, out of 5. */
  ratingNumber: PropTypes.number,
  /** The images to display for the slideshow */
  slideShowImages: PropTypes.arrayOf(
    PropTypes.shape({
      /** Alternative text to show if the image can't be loaded by the browser. */
      alternativeText: PropTypes.string,
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
};

export const ComponentWithResponsive = withResponsive(Component);
