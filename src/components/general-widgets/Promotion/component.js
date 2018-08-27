import React from 'react';
import PropTypes from 'prop-types';
import { Statistic, Segment } from 'semantic-ui-react';
import getClassNames from 'classnames';

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
 * @returns {Object}
 */
export const Component = ({
  backgroundImage,
  discountAmount,
  discountAmountParagraphText,
  discountCode,
  discountCodeParagraphText,
  discountHoverButtonText,
  headingText,
  isDisplayedStacked,
  onClick,
}) => (
  <Segment
    basic
    className={getClassNames('is-promotion', {
      'display-stacked': isDisplayedStacked,
    })}
    onClick={onClick}
  >
    <Grid className="first-grid" stackable stretched>
      <GridRow verticalAlign="middle">
        <GridColumn
          className="content-section"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          width={isDisplayedStacked ? 12 : 9}
        >
          <Grid padded>
            <GridRow verticalAlign="top">
              <GridColumn textAlign={isDisplayedStacked ? 'center' : 'left'}>
                <Heading>{headingText}</Heading>
              </GridColumn>
            </GridRow>
            {!isDisplayedStacked && (
              <GridRow className="book-now-button-container">
                <GridColumn textAlign="center">
                  <Button isRounded>{discountHoverButtonText}</Button>
                </GridColumn>
              </GridRow>
            )}
            <GridRow verticalAlign={isDisplayedStacked ? 'top' : 'bottom'}>
              <GridColumn
                floated="right"
                textAlign={isDisplayedStacked ? 'center' : 'right'}
                width={isDisplayedStacked ? 12 : 6}
              >
                <div>
                  <Paragraph size="tiny">{discountCodeParagraphText}</Paragraph>
                  <Button hasShadow isPositionedRight>
                    {discountCode}
                  </Button>
                </div>
              </GridColumn>
            </GridRow>
          </Grid>
        </GridColumn>
        <GridColumn
          className="discount-section"
          textAlign="center"
          verticalAlign="middle"
          width={isDisplayedStacked ? 12 : 3}
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
  discountAmountParagraphText: SAVE_UP_TO,
  discountCodeParagraphText: USE_COUPON_CODE,
  discountHoverButtonText: BOOK_NOW_DISCOUNT,
  isDisplayedStacked: false,
};

Component.propTypes = {
  /** The background image */
  backgroundImage: PropTypes.string.isRequired,
  /** The discount amount to be displayed */
  discountAmount: PropTypes.string.isRequired,
  /** The text to display above the discount amount */
  discountAmountParagraphText: PropTypes.string,
  /** The discount code to be displayed */
  discountCode: PropTypes.string.isRequired,
  /** The text to display above the discount code */
  discountCodeParagraphText: PropTypes.string,
  /** The text for the button that shows on hover */
  discountHoverButtonText: PropTypes.string,
  /** The text to display as a heading at the top of the widget. */
  headingText: PropTypes.string.isRequired,
  /** Is the component displayed with each item above one another */
  isDisplayedStacked: PropTypes.bool,
  /** The function to call when the component is clicked */
  onClick: PropTypes.func.isRequired,
};
