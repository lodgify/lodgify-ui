import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

import { ResponsiveImage } from 'media/ResponsiveImage';
import { BOOK_NOW, USE_COUPON_CODE } from 'utils/default-strings';
import { Heading } from 'typography/Heading';
import { Paragraph } from 'typography/Paragraph';
import { Button } from 'elements/Button';
import { testidFactory } from 'utils/testid';

const TEST_ID_PREFIX = 'minimalpromotion';

const testid = testidFactory(TEST_ID_PREFIX);

/**
 * The minimal promotion component, used to display a discount code along with a discount amount
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  backgroundImageHeight,
  backgroundImageSizes,
  backgroundImageSrcSet,
  backgroundImageUrl,
  backgroundImageWidth,
  discountAmount,
  discountCode,
  discountCodeParagraphText,
  buttonText,
  headingText,
  onClick,
  placeholderBackgroundImage,
}) => (
  <Segment basic className="is-minimal-promotion" onClick={onClick}>
    {!!backgroundImageUrl && (
      <ResponsiveImage
        data-testid={testid('image')}
        imageHeight={backgroundImageHeight}
        imageUrl={backgroundImageUrl}
        imageWidth={backgroundImageWidth}
        placeholderImageUrl={placeholderBackgroundImage}
        sizes={backgroundImageSizes}
        srcSet={backgroundImageSrcSet}
      />
    )}
    <div className="content-section">
      {headingText && (
        <Heading data-testid={testid('heading')}>{headingText}</Heading>
      )}
      <Heading size="huge">{discountAmount}</Heading>
      <Paragraph size="tiny" weight="light">
        {discountCodeParagraphText}
      </Paragraph>
      <Paragraph>{discountCode}</Paragraph>
      <Button isRounded onClick={onClick}>
        {buttonText}
      </Button>
    </div>
  </Segment>
);

Component.displayName = 'MinimalPromotion';

Component.defaultProps = {
  backgroundImageHeight: undefined,
  backgroundImageSizes: undefined,
  backgroundImageSrcSet: undefined,
  backgroundImageWidth: undefined,
  backgroundImageUrl: undefined,
  discountCode: undefined,
  discountCodeParagraphText: USE_COUPON_CODE,
  buttonText: BOOK_NOW,
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
  /** The text for the button that shows on hover. */
  buttonText: PropTypes.string,
  /** The discount amount to be displayed. */
  discountAmount: PropTypes.string.isRequired,
  /** The discount code to be displayed. */
  discountCode: PropTypes.string,
  /** The text to display above the discount code. */
  discountCodeParagraphText: PropTypes.string,
  /** The text to display as a heading at the top of the widget. */
  headingText: PropTypes.string,
  /** The function to call when the component is clicked. */
  onClick: PropTypes.func.isRequired,
  /** The background placeholder image. */
  placeholderBackgroundImage: PropTypes.string,
};
