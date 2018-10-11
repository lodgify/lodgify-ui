import React from 'react';
import PropTypes from 'prop-types';

import { withResponsive } from 'utils/with-responsive';
import { EXPLORE_ALL_PICTURES, PROPERTY_PICTURES } from 'utils/default-strings';
import { getFirstSixItems } from 'utils/get-first-six-items';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Grid } from 'layout/Grid';
import { GridRow } from 'layout/GridRow';
import { GridColumn } from 'layout/GridColumn';
import { Divider } from 'elements/Divider';
import { Thumbnail } from 'media/Thumbnail';
import { Heading } from 'typography/Heading';
import { Gallery } from 'media/Gallery';
import { getGalleryHeadingMarkup } from 'utils/get-gallery-heading-markup';
import { Link } from 'elements/Link';

/**
 * The standard widget for displaying pictures of a property.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  headingText,
  isUserOnMobile,
  linkText,
  pictures,
  propertyName,
  ratingNumber,
}) => (
  <Grid columns={3}>
    <GridColumn width={12}>
      <Heading>{headingText}</Heading>
    </GridColumn>
    <GridRow>
      {getFirstSixItems(pictures).map(({ imageUrl, label }, index) => (
        <GridColumn key={buildKeyFromStrings(label, index)}>
          <Thumbnail
            hasRoundedCorners={isUserOnMobile}
            imageUrl={imageUrl}
            isSquare={isUserOnMobile}
            label={label}
            size={isUserOnMobile ? 'large' : 'huge'}
          />
          <Divider size="small" />
        </GridColumn>
      ))}
    </GridRow>
    <GridColumn width={12}>
      <Gallery
        heading={getGalleryHeadingMarkup(propertyName, ratingNumber)}
        images={pictures}
        trigger={<Link>{linkText}</Link>}
      />
    </GridColumn>
  </Grid>
);

Component.displayName = 'Pictures';

Component.defaultProps = {
  headingText: PROPERTY_PICTURES,
  linkText: EXPLORE_ALL_PICTURES,
  propertyName: null,
  ratingNumber: null,
};

Component.propTypes = {
  /** The text to display as a heading at the top of the widget. */
  headingText: PropTypes.string,
  /**
   * Is the user on a mobile device.
   * Provided by `withResponsive` so ignored in the styleguide.
   * @ignore
   */
  isUserOnMobile: PropTypes.bool.isRequired,
  /** The text to display on the link at the bottom of the widget. */
  linkText: PropTypes.string,
  /** The pictures to display as responsive images. */
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      /** URL pointing to the image to display. */
      imageUrl: PropTypes.string.isRequired,
      /** A visible label for the image. */
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** The name of the property to display in the gallery modal. */
  propertyName: PropTypes.string,
  /** The numeral rating for the property, out of 5 */
  ratingNumber: PropTypes.number,
};

export const ComponentWithResponsive = withResponsive(Component);
