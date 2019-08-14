import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, Segment } from 'semantic-ui-react';
import getClassNames from 'classnames';

import { getToggledIsActiveState } from 'utils/get-toggled-is-active-state';
import { getCardPlaceholderMarkup } from 'utils/get-card-placeholder-markup';
import { Rating } from 'elements/Rating';
import { ResponsiveImage } from 'media/ResponsiveImage';
import { Paragraph } from 'typography/Paragraph';
import { Heading } from 'typography/Heading';
import { FlexContainer } from 'layout/FlexContainer';
import { PriceLabel } from 'elements/PriceLabel';

import { getPropertyTypeWithDot } from './utils/getPropertyTypeWithDot';
import { getSearchResultDescription } from './utils/getSearchResultDescription';
import { getPropertyAmenities } from './utils/getPropertyAmenities';

/**
 * The standard widget to display a property search result.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export class Component extends PureComponent {
  state = {
    isActive: false,
  };

  componentDidUpdate = (previousProps, previousState) => {
    const { isActive } = this.state;

    if (previousState.isActive === isActive) return;

    const { name, onChange } = this.props;

    onChange(name, isActive);
  };

  toggleActive = () => this.setState(getToggledIsActiveState);

  render = () => {
    const {
      bathsNumber,
      bathsText,
      bedroomsNumber,
      bedroomsText,
      bedsNumber,
      bedsText,
      guestsNumber,
      guestsText,
      imageAlternativeText,
      imageSizes,
      imageSrcSet,
      imageUrl,
      isActive,
      isCompact,
      isShowingPlaceholder,
      placeholderImageUrl,
      priceLabelPeriodText,
      priceLabelPricePerPeriod,
      priceLabelPricePerPeriodPrefix,
      propertyAmenities,
      propertyName,
      propertyType,
      propertyUrl,
      propertyUrlTarget,
      ratingNumber,
    } = this.props;

    return (
      <div
        className={getClassNames('ui', 'card', 'has-search-result', {
          active: isActive || this.state.isActive,
          'is-compact': isCompact,
        })}
        onMouseOut={this.toggleActive}
        onMouseOver={this.toggleActive}
      >
        <Card href={propertyUrl} target={propertyUrlTarget}>
          {isShowingPlaceholder ? (
            getCardPlaceholderMarkup()
          ) : (
            <Fragment>
              <FlexContainer>
                <ResponsiveImage
                  alternativeText={imageAlternativeText}
                  imageUrl={imageUrl}
                  isFluid
                  placeholderImageUrl={placeholderImageUrl}
                  sizes={imageSizes}
                  srcSet={imageSrcSet}
                />
                {!isCompact && (
                  <Segment raised>
                    <PriceLabel
                      periodText={priceLabelPeriodText}
                      pricePerPeriod={priceLabelPricePerPeriod}
                      pricePerPeriodPrefix={priceLabelPricePerPeriodPrefix}
                    />
                  </Segment>
                )}
              </FlexContainer>
              <Card.Content>
                <Card.Header>
                  <Heading>{propertyName}</Heading>
                </Card.Header>
                <Card.Description>
                  <FlexContainer alignItems="center" flexDirection="row">
                    {ratingNumber >= 1 && (
                      <Rating iconSize="tiny" ratingNumber={ratingNumber} />
                    )}
                    <Paragraph size="medium">
                      {getPropertyTypeWithDot(ratingNumber, propertyType)}
                    </Paragraph>
                  </FlexContainer>
                </Card.Description>
                <Card.Description>
                  {getSearchResultDescription(
                    bathsNumber,
                    bathsText,
                    bedroomsNumber,
                    bedroomsText,
                    bedsNumber,
                    bedsText,
                    guestsNumber,
                    guestsText
                  )}
                </Card.Description>
                <Card.Description>
                  {getPropertyAmenities(propertyAmenities)}
                </Card.Description>
                {isCompact && (
                  <FlexContainer justifyContent="flex-end">
                    <PriceLabel
                      periodText={priceLabelPeriodText}
                      pricePerPeriod={priceLabelPricePerPeriod}
                      pricePerPeriodPrefix={priceLabelPricePerPeriodPrefix}
                    />
                  </FlexContainer>
                )}
              </Card.Content>
            </Fragment>
          )}
        </Card>
      </div>
    );
  };
}

Component.displayName = 'PropertySearchResult';

Component.defaultProps = {
  bathsNumber: null,
  bathsText: '',
  bedroomsNumber: null,
  bedroomsText: '',
  bedsNumber: null,
  bedsText: '',
  imageAlternativeText: undefined,
  imageSizes: undefined,
  imageSrcSet: undefined,
  isActive: false,
  isCompact: false,
  isShowingPlaceholder: false,
  name: undefined,
  onChange: Function.prototype,
  placeholderImageUrl: undefined,
  priceLabelPeriodText: '',
  priceLabelPricePerPeriod: '',
  priceLabelPricePerPeriodPrefix: '',
  propertyAmenities: [],
  propertyUrlTarget: '_self',
};

Component.propTypes = {
  /** The number of available baths at the property. */
  bathsNumber: PropTypes.number,
  /** The text to describe the amount of baths.*/
  bathsText: PropTypes.string,
  /** The number of available bedrooms at the property. */
  bedroomsNumber: PropTypes.number,
  /** The text to describe the amount of bedrooms.*/
  bedroomsText: PropTypes.string,
  /** The number of available beds at the property. */
  bedsNumber: PropTypes.number,
  /** The text to describe the amount of beds.*/
  bedsText: PropTypes.string,
  /** The number of guests the property can accommodate. */
  guestsNumber: PropTypes.number.isRequired,
  /** The text to describe the amount of guests.*/
  guestsText: PropTypes.string.isRequired,
  /** The alternative text for the image to display. */
  imageAlternativeText: PropTypes.string,
  /** A list of one or more strings separated by commas indicating a set of source sizes. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  imageSizes: PropTypes.string,
  /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  imageSrcSet: PropTypes.string,
  /** URL pointing to the image to display. */
  imageUrl: PropTypes.string.isRequired,
  /** Is the property search result in an active state. */
  isActive: PropTypes.bool,
  /** Is the property search result displayed with a compact layout. */
  isCompact: PropTypes.bool,
  /** Is the component showing placeholders to reserve space for content which will appear. */
  isShowingPlaceholder: PropTypes.bool,
  /** The name for the property search result. */
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** The text describing the pricing period. */
  /**
   * A function called when the active state of the property search result changes.
   * @param {string}  name
   * @param {Boolean} isActive
   */
  onChange: PropTypes.func,
  /** URL pointing to the placeholder image to render. */
  placeholderImageUrl: PropTypes.string,
  /** The text describing the pricing period. */
  priceLabelPeriodText: PropTypes.string,
  /** The text prefix to display along with the price per period. */
  priceLabelPricePerPeriod: PropTypes.string,
  /** The price per period of the property, with currency symbol. */
  priceLabelPricePerPeriodPrefix: PropTypes.string,
  /** The amenities to display as a text*/
  propertyAmenities: PropTypes.arrayOf(PropTypes.string),
  /** The name of the property. */
  propertyName: PropTypes.string.isRequired,
  /** The name of the type of the property. */
  propertyType: PropTypes.string.isRequired,
  /** URL pointing to a page with details of the property. */
  propertyUrl: PropTypes.string.isRequired,
  /** Specifies where to display the linked featured property URL. See [MDN docs `<a />` for more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target). */
  propertyUrlTarget: PropTypes.string,
  /** The numeral rating for the property, out of 5 */
  ratingNumber: PropTypes.number.isRequired,
};
