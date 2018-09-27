import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'semantic-ui-react';

/**
 * A rating displays star icons and an optional numeral.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ iconSize, isShowingNumeral, ratingNumber }) => (
  <Fragment>
    {isShowingNumeral && ratingNumber}
    <Rating
      disabled
      maxRating={5}
      rating={Math.round(ratingNumber)}
      size={iconSize}
    />
  </Fragment>
);

Component.displayName = 'Rating';

Component.defaultProps = {
  iconSize: 'small',
  isShowingNumeral: true,
};

Component.propTypes = {
  /** The size of the star icons. */
  iconSize: PropTypes.oneOf(['tiny', 'small']),
  /** Is the rating shown as a number. */
  isShowingNumeral: PropTypes.bool,
  /** The numeral rating for the property, out of 5. */
  ratingNumber: PropTypes.number.isRequired,
};
