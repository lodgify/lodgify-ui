import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Statistic, Segment } from 'semantic-ui-react';

import { Divider } from 'elements/Divider';
import { ShowOn } from 'layout/ShowOn';
import { ResponsiveImage } from 'media/ResponsiveImage';
import {
  BOOK_NOW_DISCOUNT,
  SAVE_UP_TO,
  USE_COUPON_CODE,
} from 'utils/default-strings';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { Heading } from 'typography/Heading';
import { Paragraph } from 'typography/Paragraph';
import { Button } from 'elements/Button';

/**
 * The Promotion component, used to display a discount code along with a discount amount
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  backgroundImageHeight,
  backgroundImageSizes,
  backgroundImageSrcSet,
  backgroundImageUrl,
  backgroundImageWidth,
  discountAmount,
  discountAmountParagraphText,
  discountCode,
  discountCodeParagraphText,
  discountHoverButtonText,
  headingText,
  onClick,
  placeholderBackgroundImage,
}) => (
  <Segment basic className="is-promotion" onClick={onClick}>
    <Grid className="first-grid" isStackable stretched>
      <GridRow verticalAlign="middle">
        <GridColumn
          className="content-section"
          computer={9}
          mobile={12}
          tablet={9}
        >
          {!!backgroundImageUrl && (
            <ResponsiveImage
              imageHeight={backgroundImageHeight}
              imageUrl={backgroundImageUrl}
              imageWidth={backgroundImageWidth}
              placeholderImageUrl={placeholderBackgroundImage}
              sizes={backgroundImageSizes}
              srcSet={backgroundImageSrcSet}
            />
          )}
          <Grid padded>
            {!!headingText ? (
              <GridRow verticalAlign="top">
                <ShowOn
                  computer
                  parent={GridColumn}
                  parentProps={{ textAlign: 'left', width: 12 }}
                  tablet
                  widescreen
                >
                  <Heading>{headingText}</Heading>
                </ShowOn>
                <ShowOn
                  mobile
                  parent={GridColumn}
                  parentProps={{ textAlign: 'center', width: 12 }}
                >
                  <Heading>{headingText}</Heading>
                </ShowOn>
              </GridRow>
            ) : (
              <Divider size="huge" />
            )}
            <ShowOn
              computer
              parent={GridRow}
              parentProps={{ className: 'book-now-button-container' }}
              tablet
              widescreen
            >
              <GridColumn textAlign="center" width={12}>
                <Button isRounded>{discountHoverButtonText}</Button>
              </GridColumn>
            </ShowOn>
            {!!discountCode && (
              <Fragment>
                <ShowOn
                  mobile
                  parent={GridRow}
                  parentProps={{ verticalAlign: 'top' }}
                >
                  <GridColumn floated="right" textAlign="center" width={12}>
                    <div>
                      <Paragraph size="tiny">
                        {discountCodeParagraphText}
                      </Paragraph>
                      {!!discountCode && (
                        <Button hasShadow isPositionedRight>
                          {discountCode}
                        </Button>
                      )}
                    </div>
                  </GridColumn>
                </ShowOn>
                <ShowOn
                  computer
                  desktop
                  parent={GridRow}
                  parentProps={{ verticalAlign: 'bottom' }}
                  tablet
                  widescreen
                >
                  <GridColumn floated="right" textAlign="right" width={6}>
                    <div>
                      <Paragraph size="tiny">
                        {discountCodeParagraphText}
                      </Paragraph>
                      <Button hasShadow isPositionedRight>
                        {discountCode}
                      </Button>
                    </div>
                  </GridColumn>
                </ShowOn>
              </Fragment>
            )}
          </Grid>
        </GridColumn>
        <GridColumn
          className="discount-section"
          computer={3}
          mobile={12}
          tablet={3}
          textAlign="center"
          verticalAlign="middle"
        >
          <Statistic size="small">
            <Statistic.Label>
              <Heading size="small">{discountAmountParagraphText}</Heading>
            </Statistic.Label>
            <Statistic.Value>
              <Heading size="large">{discountAmount}</Heading>
            </Statistic.Value>
          </Statistic>
        </GridColumn>
      </GridRow>
    </Grid>
  </Segment>
);

Component.displayName = 'Promotion';

Component.defaultProps = {
  backgroundImageHeight: undefined,
  backgroundImageSizes: undefined,
  backgroundImageSrcSet: undefined,
  backgroundImageWidth: undefined,
  backgroundImageUrl: undefined,
  discountAmountParagraphText: SAVE_UP_TO,
  discountCode: undefined,
  discountCodeParagraphText: USE_COUPON_CODE,
  discountHoverButtonText: BOOK_NOW_DISCOUNT,
  headingText: undefined,
  placeholderBackgroundImage: null,
};

Component.propTypes = {
  /** The natural height of the background image in px. */
  backgroundImageHeight: PropTypes.number,
  /** A list of one or more strings separated by commas indicating a set of source sizes for the background image. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  backgroundImageSizes: PropTypes.string,
  /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use for the background image. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  backgroundImageSrcSet: PropTypes.string,
  /** URL pointing to the image to display. */
  backgroundImageUrl: PropTypes.string,
  /** The natural width of the background image in px. */
  backgroundImageWidth: PropTypes.number,
  /** The discount amount to be displayed. */
  discountAmount: PropTypes.string.isRequired,
  /** The text to display above the discount amount. */
  discountAmountParagraphText: PropTypes.string,
  /** The discount code to be displayed. */
  discountCode: PropTypes.string,
  /** The text to display above the discount code. */
  discountCodeParagraphText: PropTypes.string,
  /** The text for the button that shows on hover. */
  discountHoverButtonText: PropTypes.string,
  /** The text to display as a heading at the top of the widget. */
  headingText: PropTypes.string,
  /** The function to call when the component is clicked. */
  onClick: PropTypes.func.isRequired,
  /** The background placeholder image. */
  placeholderBackgroundImage: PropTypes.string,
};
