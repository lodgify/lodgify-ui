import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'semantic-ui-react';

import { InputController } from '../InputController';

import { getRatingData } from './utils/getRatingData';
import { MAX_RATING, ONRATE_HANDLER } from './constants';

/**
 * A rating input that allows the user to input a value based on stars.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ error, iconSize, name, onChange }) => (
  <InputController
    adaptOnChangeEvent={getRatingData}
    error={error}
    inputOnChangeFunctionName={ONRATE_HANDLER}
    isValid={false}
    name={name}
    onChange={onChange}
  >
    <Rating maxRating={MAX_RATING} size={iconSize} />
  </InputController>
);

Component.displayName = 'RatingInput';

Component.defaultProps = {
  error: false,
  iconSize: 'small',
  name: '',
  onChange: Function.prototype,
};

Component.propTypes = {
  /** Is the rating input in an error state. */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** The size of the star icons. */
  iconSize: PropTypes.oneOf(['tiny', 'small']),
  /** The name required by the form */
  name: PropTypes.string,
  /**
   * A function called when the input rating value changes
   * @param {String} name
   * @param {String} value
   */
  onChange: PropTypes.func,
};
