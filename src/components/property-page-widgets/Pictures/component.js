import React from 'react';
import PropTypes from 'prop-types';

import { EXPLORE_ALL_PICTURES, PROPERTY_PICTURES } from 'utils/default-strings';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { ShowOnDesktop } from 'layout/ShowOnDesktop';
import { ShowOnMobile } from 'layout/ShowOnMobile';
import { Thumbnail } from 'media/Thumbnail';
import { Heading } from 'typography/Heading';
import { Link } from 'elements/Link';
import { VerticalGutters } from 'layout/VerticalGutters';

/**
 * The standard widget for displaying pictures of a property.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ headingText, linkText, pictures }) => (
  <VerticalGutters>
    <Grid>
      <GridColumn width={12}>
        <Heading>{headingText}</Heading>
      </GridColumn>
      {pictures.map(({ imageUrl, label }, index) => (
        <GridColumn key={buildKeyFromStrings(label, index)} width={4}>
          <ShowOnDesktop>
            <Thumbnail imageUrl={imageUrl} label={label} size="huge" />
          </ShowOnDesktop>
          <ShowOnMobile>
            <Thumbnail
              hasRoundedCorners
              imageUrl={imageUrl}
              isSquare
              label={label}
              size="large"
            />
          </ShowOnMobile>
        </GridColumn>
      ))}
      <GridColumn width={12}>
        <Link>{linkText}</Link>
      </GridColumn>
    </Grid>
  </VerticalGutters>
);

Component.displayName = 'Pictures';

Component.defaultProps = {
  headingText: PROPERTY_PICTURES,
  linkText: EXPLORE_ALL_PICTURES,
};

Component.propTypes = {
  /** The text to display as a heading at the top of the widget. */
  headingText: PropTypes.string,
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
};
