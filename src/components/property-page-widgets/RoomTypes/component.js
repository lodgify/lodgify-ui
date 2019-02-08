import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { RoomType } from 'property-page-widgets/RoomType';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';

import { PLACEHOLDERS } from './constants';

/**
 * The standard widget for displaying a list of room types.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ isShowingPlaceholder, roomTypes }) => {
  const roomTypesToMap =
    isShowingPlaceholder && roomTypes.length === 0 ? PLACEHOLDERS : roomTypes;

  return (
    <Fragment>
      {roomTypesToMap.map((roomType, index) => (
        <RoomType
          isShowingPlaceholder={isShowingPlaceholder}
          key={buildKeyFromStrings(roomType.name, index)}
          {...roomType}
        />
      ))}
    </Fragment>
  );
};

Component.displayName = 'RoomTypes';

Component.defaultProps = {
  isShowingPlaceholder: false,
};

Component.propTypes = {
  /** Is the component showing placeholders to reserve space for content which will appear. */
  isShowingPlaceholder: PropTypes.bool,
  /** An array of [`RoomType`](#/RoomType) props objects */
  roomTypes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
