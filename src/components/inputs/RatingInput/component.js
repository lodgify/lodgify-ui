import 'semantic-ui-styles/rating.less';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'semantic-ui-react';

import { Paragraph } from 'typography/Paragraph';

import { InputController } from '../InputController';

import { getRatingData } from './utils/getRatingData';
import { MAX_RATING, ON_RATE_HANDLER } from './constants';

/**
 * A rating input that allows the user to input a value based on stars.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  error,
  iconSize,
  label,
  name,
  onChange,
  value,
}) => (
  <Fragment>
    {!!label && <Paragraph>{label}</Paragraph>}
    <InputController
      adaptOnChangeEvent={getRatingData}
      error={error}
      inputOnChangeFunctionName={ON_RATE_HANDLER}
      isValid={false}
      name={name}
      onChange={onChange}
      value={value}
    >
      <Rating maxRating={MAX_RATING} rating={value} size={iconSize} />
    </InputController>
  </Fragment>
);

Component.displayName = 'RatingInput';

Component.defaultProps = {
  error: false,
  iconSize: 'small',
  label: '',
  name: '',
  onChange: Function.prototype,
  value: undefined,
};

Component.propTypes = {
  /** Is the rating input in an error state. */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** The size of the star icons. */
  iconSize: PropTypes.oneOf(['tiny', 'small']),
  /** A visible label to display with the rating stars. */
  label: PropTypes.string,
  /** The name required by the form */
  name: PropTypes.string,
  /**
   * A function called when the input rating value changes
   * @param {String} name
   * @param {String} value
   */
  onChange: PropTypes.func,
  /** The current value of the input where it is consumed as a controlled component. */
  value: PropTypes.number,
};
