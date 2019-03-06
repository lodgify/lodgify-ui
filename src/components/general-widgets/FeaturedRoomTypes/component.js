import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Heading } from 'typography/Heading';
import { FeaturedRoomType } from 'general-widgets/FeaturedRoomType';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';

import { PLACEHOLDERS } from './constants';

/**
 * The standard widget for displaying a list of featured rooms.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  featuredRoomTypes,
  headingText,
  isShowingPlaceholder,
}) => {
  const featuredRoomTypesToMap =
    isShowingPlaceholder && featuredRoomTypes.length === 0
      ? PLACEHOLDERS
      : featuredRoomTypes;

  return (
    <Fragment>
      {headingText && <Heading>{headingText}</Heading>}
      {featuredRoomTypesToMap.map((featuredRoomType, index) => (
        <FeaturedRoomType
          isShowingPlaceholder={isShowingPlaceholder}
          key={buildKeyFromStrings(featuredRoomType.roomTypeName, index)}
          {...featuredRoomType}
        />
      ))}
    </Fragment>
  );
};

Component.displayName = 'FeaturedRoomTypes';

Component.defaultProps = {
  headingText: null,
  isShowingPlaceholder: false,
  featuredRoomTypes: [],
};

Component.propTypes = {
  /** An array of [`FeaturedRoomType`](#/FeaturedRoomType) props objects. */
  featuredRoomTypes: PropTypes.arrayOf(PropTypes.object),
  /** The text to display as a heading at the top of the widget. */
  headingText: PropTypes.string,
  /** Is the component showing placeholders to reserve space for content which will appear. */
  isShowingPlaceholder: PropTypes.bool,
};
