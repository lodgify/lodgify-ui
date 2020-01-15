import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import {
  AND,
  PER_NIGHT,
  FROM_PRICE_PER_PERIOD,
  MORE_INFO,
  ROOM_AMENITIES,
} from 'utils/default-strings';
import { Divider } from 'elements/Divider';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { BlockPlaceholder } from 'elements/BlockPlaceholder';
import { TextPlaceholder } from 'elements/TextPlaceholder';
import { Link } from 'elements/Link';
import { Icon, ICON_NAMES } from 'elements/Icon';
import { Modal } from 'elements/Modal';
import { ShowOn } from 'layout/ShowOn';
import { Heading } from 'typography/Heading';
import { Slideshow } from 'media/Slideshow';
import { withResponsive } from 'utils/with-responsive';
import { getPricePerPeriodMarkup } from 'utils/get-price-per-period-markup';

import { getRoomFeaturesMarkup } from './utils/getRoomFeaturesMarkup';
import { getModalContentMarkup } from './utils/getModalContentMarkup';

/**
 * The standard widget for displaying a room type in the context of a property page.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
const Component = ({
  amenities,
  amenitiesConjunctionText,
  amenitiesHeadingText,
  description,
  extraFeatures,
  features,
  isShowingPlaceholder,
  isUserOnMobile,
  name,
  moreInfoText,
  periodText,
  pricePerPeriod,
  pricePerPeriodPrefix,
  ratingNumber,
  images,
}) => (
  <Card className="has-room-type-gallery" fluid>
    <Grid>
      <GridRow>
        <GridColumn computer={4} mobile={12} verticalAlignContent={null}>
          {isShowingPlaceholder ? (
            <BlockPlaceholder isFluid />
          ) : (
            <Slideshow
              hasShadow={false}
              images={images}
              isRounded={false}
              isShowingBulletNavigation={false}
              willFill
            />
          )}
        </GridColumn>
        <GridColumn computer={8} mobile={12}>
          <Grid padded>
            {isShowingPlaceholder ? (
              <GridColumn>
                <Divider />
                <TextPlaceholder length="short" />
                <TextPlaceholder length="medium" />
                <Divider />
                <TextPlaceholder length="short" />
                <Divider />
              </GridColumn>
            ) : (
              <Fragment>
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
                    hasPadding
                    trigger={
                      <Icon
                        color="primary"
                        isButton
                        isCircular
                        isColorInverted
                        name={ICON_NAMES.INFO}
                        size="small"
                      />
                    }
                  >
                    {getModalContentMarkup(
                      amenities,
                      amenitiesConjunctionText,
                      amenitiesHeadingText,
                      description,
                      extraFeatures,
                      features,
                      name,
                      periodText,
                      pricePerPeriod,
                      pricePerPeriodPrefix,
                      ratingNumber,
                      images,
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
                    <Modal
                      hasPadding
                      size="small"
                      trigger={<Link>{moreInfoText}</Link>}
                    >
                      {getModalContentMarkup(
                        amenities,
                        amenitiesConjunctionText,
                        amenitiesHeadingText,
                        description,
                        extraFeatures,
                        features,
                        name,
                        periodText,
                        pricePerPeriod,
                        pricePerPeriodPrefix,
                        ratingNumber,
                        images,
                        isUserOnMobile
                      )}
                    </Modal>
                  </GridColumn>
                  <GridColumn
                    textAlign={isUserOnMobile ? 'left' : 'right'}
                    width={8}
                  >
                    <Card.Description>
                      {getPricePerPeriodMarkup(
                        pricePerPeriod,
                        pricePerPeriodPrefix,
                        periodText
                      )}
                    </Card.Description>
                    <ShowOn mobile parent={Divider} />
                  </GridColumn>
                </GridRow>
              </Fragment>
            )}
          </Grid>
        </GridColumn>
      </GridRow>
    </Grid>
  </Card>
);

Component.displayName = 'RoomType';

Component.defaultProps = {
  description: null,
  amenitiesConjunctionText: AND,
  amenitiesHeadingText: ROOM_AMENITIES,
  extraFeatures: [],
  isShowingPlaceholder: false,
  moreInfoText: MORE_INFO,
  periodText: PER_NIGHT,
  pricePerPeriodPrefix: FROM_PRICE_PER_PERIOD,
  ratingNumber: null,
};

Component.propTypes = {
  /** A list of amenity categories displayed in the modal */
  amenities: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The name of the icon to display.
       * [See here for the full list of valid icon names](https://github.com/lodgify/lodgify-ui/blob/master/src/components/elements/Icon/constants.js)
       */
      iconName: PropTypes.string.isRequired,
      /** The list of amenity items displayed for each category */
      items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      /** A visible label to display for the amenity. */
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** The conjunction to display after the penultimate amenity in the array. */
  amenitiesConjunctionText: PropTypes.string,
  /** The text displayed when amenities are available. */
  amenitiesHeadingText: PropTypes.string,
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
       * [See here for the full list of valid icon names](https://github.com/lodgify/lodgify-ui/blob/master/src/components/elements/Icon/constants.js)
       */
      iconName: PropTypes.string,
      /** The feature label to display. */
      labelText: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** The images to display in the slideshow. */
  images: PropTypes.arrayOf(
    PropTypes.shape({
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
  /** Is the component showing placeholders to reserve space for content which will appear. */
  isShowingPlaceholder: PropTypes.bool,
  /**
   * Is the user on a mobile device.
   * Provided by `withResponsive` so ignored in the styleguide.
   * @ignore
   */
  isUserOnMobile: PropTypes.bool.isRequired,
  /** The text to display for the more info button. */
  moreInfoText: PropTypes.string,
  /** The name of the room. */
  name: PropTypes.string.isRequired,
  /** The text describing the pricing period. */
  periodText: PropTypes.string,
  /** The price per period of the room, with currency symbol. */
  pricePerPeriod: PropTypes.string.isRequired,
  /** The text prefix to display along with the price per period. */
  pricePerPeriodPrefix: PropTypes.string,
  /** The numeral rating for the property room given in the review, out of 5. */
  ratingNumber: PropTypes.number,
};

export const ComponentWithResponsive = withResponsive(Component);
