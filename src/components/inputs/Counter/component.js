import React from 'react';
import PropTypes from 'prop-types';

import { FlexContainer } from 'layout/FlexContainer';
import { Button } from 'elements/Button';
import { ICON_NAMES } from 'elements/Icon';
import { Paragraph } from 'typography/Paragraph';

/**
 * A counter allows a user to select a number value in increments of one.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ max, min, name, onChange, renderValue, value }) => {
  const handleDecrement = () => {
    value !== min && onChange(name, value - 1);
  };

  const handleIncrement = () => {
    value !== max && onChange(name, value + 1);
  };

  return (
    <div className="ui counter">
      <FlexContainer alignItems="center" justifyContent="space-between">
        <Button
          icon={ICON_NAMES.MINUS}
          isOutlined
          isRounded
          onClick={handleDecrement}
        />
        <Paragraph>{renderValue(value)}</Paragraph>
        <Button
          icon={ICON_NAMES.PLUS}
          isOutlined
          isRounded
          onClick={handleIncrement}
        />
      </FlexContainer>
    </div>
  );
};

Component.displayName = 'Counter';

Component.defaultProps = {
  max: undefined,
  min: 0,
  name: '',
  onChange: Function.prototype,
  renderValue: value => value,
  value: 0,
};

Component.propTypes = {
  /** The maximum value the input accepts. */
  max: PropTypes.number,
  /** The minimum value the input accepts. */
  min: PropTypes.number,
  /** The name for the range. */
  name: PropTypes.string,
  /** A function called when the range value changes. */
  onChange: PropTypes.func,
  /** A function returning a React node for modifying the way values are rendered. */
  renderValue: PropTypes.func,
  /** The current value of the range where it is consumed as a controlled component. Minimum 0. */
  value: PropTypes.number,
};
