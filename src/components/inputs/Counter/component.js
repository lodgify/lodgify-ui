import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { FlexContainer } from 'layout/FlexContainer';
import { Button } from 'elements/Button';
import { ICON_NAMES } from 'elements/Icon';
import { Paragraph } from 'typography/Paragraph';
import { getControlledInputValue } from 'utils/get-controlled-input-value';

/**
 * A counter allows a user to select a number value in increments of one.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export class Component extends PureComponent {
  state = {
    value: this.props.initialValue || 0,
  };

  componentDidUpdate = (previousProps, previousState) => {
    const { value } = this.state;

    if (value === previousState.value) return;

    const { name, onChange } = this.props;

    onChange(name, value);
  };

  handleDecrement = () => {
    const value = getControlledInputValue(
      this.props.value,
      undefined,
      this.state.value
    );

    value !== 0 && this.setState({ value: value - 1 });
  };

  handleIncrement = () => {
    const value = getControlledInputValue(
      this.props.value,
      undefined,
      this.state.value
    );

    value !== this.props.max && this.setState({ value: value + 1 });
  };

  render = () => {
    const value = getControlledInputValue(
      this.props.value,
      undefined,
      this.state.value
    );

    return (
      <div className="ui counter">
        <FlexContainer alignItems="center" justifyContent="space-between">
          <Button
            icon={ICON_NAMES.MINUS}
            isOutlined
            isRounded
            onClick={this.handleDecrement}
          />
          <Paragraph>{this.props.renderValue(value)}</Paragraph>
          <Button
            icon={ICON_NAMES.PLUS}
            isOutlined
            isRounded
            onClick={this.handleIncrement}
          />
        </FlexContainer>
      </div>
    );
  };
}

Component.displayName = 'Counter';

Component.defaultProps = {
  initialValue: undefined,
  max: undefined,
  name: '',
  onChange: Function.prototype,
  renderValue: value => value,
  value: undefined,
};

Component.propTypes = {
  /** The default value of the range. Minimum 0. */
  initialValue: PropTypes.number,
  /** The maximum value the input accepts. */
  max: PropTypes.number,
  /** The name for the range. */
  name: PropTypes.string,
  /** A function called when the range value changes. */
  onChange: PropTypes.func,
  /** A function returning a React node for modifying the way values are rendered. */
  renderValue: PropTypes.func,
  /** The current value of the range where it is consumed as a controlled component. Minimum 0. */
  value: PropTypes.number,
};
