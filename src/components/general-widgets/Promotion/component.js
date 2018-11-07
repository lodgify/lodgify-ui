import React from 'react';
import PropTypes from 'prop-types';
import { Statistic, Segment } from 'semantic-ui-react';

import { ShowOnDesktop } from 'layout/ShowOnDesktop';
import { ShowOnMobile } from 'layout/ShowOnMobile';
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
  backgroundImage,
  backgroundImageHeight,
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
    <Grid className="first-grid" stackable stretched>
      <GridRow verticalAlign="middle">
        <GridColumn
          className="content-section"
          computer={9}
          mobile={12}
          tablet={9}
        >
          <ResponsiveImage
            imageHeight={backgroundImageHeight}
            imageUrl={backgroundImage}
            imageWidth={backgroundImageWidth}
            placeholderImageUrl={placeholderBackgroundImage}
          />
          <Grid padded>
            <GridRow verticalAlign="top">
              <ShowOnDesktop
                parent={GridColumn}
                parentProps={{ textAlign: 'left', width: 12 }}
              >
                <Heading>{headingText}</Heading>
              </ShowOnDesktop>
              <ShowOnMobile
                parent={GridColumn}
                parentProps={{ textAlign: 'center', width: 12 }}
              >
                <Heading>{headingText}</Heading>
              </ShowOnMobile>
            </GridRow>
            <ShowOnDesktop
              parent={GridRow}
              parentProps={{ className: 'book-now-button-container' }}
            >
              <GridColumn textAlign="center" width={12}>
                <Button isRounded>{discountHoverButtonText}</Button>
              </GridColumn>
            </ShowOnDesktop>
            <ShowOnMobile
              parent={GridRow}
              parentProps={{ verticalAlign: 'top' }}
            >
              <GridColumn floated="right" textAlign="center" width={12}>
                <div>
                  <Paragraph size="tiny">{discountCodeParagraphText}</Paragraph>
                  <Button hasShadow isPositionedRight>
                    {discountCode}
                  </Button>
                </div>
              </GridColumn>
            </ShowOnMobile>
            <ShowOnDesktop
              parent={GridRow}
              parentProps={{ verticalAlign: 'bottom' }}
            >
              <GridColumn floated="right" textAlign="right" width={6}>
                <div>
                  <Paragraph size="tiny">{discountCodeParagraphText}</Paragraph>
                  <Button hasShadow isPositionedRight>
                    {discountCode}
                  </Button>
                </div>
              </GridColumn>
            </ShowOnDesktop>
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
              <Paragraph weight="heavy">
                {discountAmountParagraphText}
              </Paragraph>
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
  backgroundImageWidth: undefined,
  discountAmountParagraphText: SAVE_UP_TO,
  discountCodeParagraphText: USE_COUPON_CODE,
  discountHoverButtonText: BOOK_NOW_DISCOUNT,
  placeholderBackgroundImage: null,
};

Component.propTypes = {
  /** The background image. */
  backgroundImage: PropTypes.string.isRequired,
  /** The natural height of the background image in px. */
  backgroundImageHeight: PropTypes.number,
  /** The natural width of the background image in px. */
  backgroundImageWidth: PropTypes.number,
  /** The discount amount to be displayed. */
  discountAmount: PropTypes.string.isRequired,
  /** The text to display above the discount amount. */
  discountAmountParagraphText: PropTypes.string,
  /** The discount code to be displayed. */
  discountCode: PropTypes.string.isRequired,
  /** The text to display above the discount code. */
  discountCodeParagraphText: PropTypes.string,
  /** The text for the button that shows on hover. */
  discountHoverButtonText: PropTypes.string,
  /** The text to display as a heading at the top of the widget. */
  headingText: PropTypes.string.isRequired,
  /** The function to call when the component is clicked. */
  onClick: PropTypes.func.isRequired,
  /** The background placeholder image. */
  placeholderBackgroundImage: PropTypes.string,
};
