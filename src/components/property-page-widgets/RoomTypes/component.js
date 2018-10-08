import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { RoomType } from 'property-page-widgets/RoomType';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';

/**
 * The standard widget for displaying a list of room types.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ roomTypes }) => (
  <Fragment>
    {roomTypes.map((roomType, index) => (
      <RoomType key={buildKeyFromStrings(roomType.name, index)} {...roomType} />
    ))}
  </Fragment>
);

Component.displayName = 'RoomTypes';

Component.propTypes = {
  /** An array of [`RoomType`](#/Property%20page%20widgets/RoomType) props objects */
  roomTypes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
