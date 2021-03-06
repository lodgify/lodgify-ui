import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

import { Toggle } from 'inputs/Toggle';
import { FlexContainer } from 'layout/FlexContainer';
import { Heading } from 'typography/Heading';
import { Paragraph } from 'typography/Paragraph';

import { getIsToggleCheckedControlled } from './utils/getIsToggleCheckedControlled';

/**
 * A collection of information alongside a toggle input.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export class Component extends PureComponent {
  state = {
    isToggleChecked: this.props.isToggleChecked || false,
  };

  componentDidUpdate = (
    { isToggleChecked: previousControlledIsToggleChecked },
    { isToggleChecked: previousIsToggleChecked }
  ) => {
    const { isToggleChecked } = this.state;
    const {
      name,
      isToggleChecked: controlledIsToggleChecked,
      onChange,
    } = this.props;

    const isControlled = getIsToggleCheckedControlled(
      controlledIsToggleChecked
    );

    if (
      isControlled &&
      previousControlledIsToggleChecked !== controlledIsToggleChecked
    ) {
      this.setState({ isToggleChecked: controlledIsToggleChecked });
      onChange(name, controlledIsToggleChecked);
      return;
    }

    if (!isControlled && previousIsToggleChecked !== isToggleChecked) {
      onChange(name, isToggleChecked);
    }
  };

  handleOnClick = event => {
    const { isToggleChecked } = this.state;
    const {
      isToggleChecked: controlledIsToggleCheckedValue,
      onClick,
    } = this.props;

    this.setState({
      isToggleChecked: controlledIsToggleCheckedValue || !isToggleChecked,
    });

    onClick(event);
  };

  render = () => {
    const { heading, description } = this.props;

    return (
      <Segment
        className="is-input-segment is-toggle-input-segment"
        onClick={this.handleOnClick}
        vertical
      >
        <FlexContainer
          alignItems="baseline"
          flexDirection="row"
          justifyContent="space-between"
        >
          <div>
            <Heading>{heading}</Heading>
            {!!description && <Paragraph>{description}</Paragraph>}
          </div>
          <Toggle isChecked={this.state.isToggleChecked} isCompact />
        </FlexContainer>
      </Segment>
    );
  };
}

Component.displayName = 'ToggleInputSegment';

Component.defaultProps = {
  description: null,
  onClick: Function.prototype,
  onChange: Function.prototype,
  isToggleChecked: null,
  name: '',
};

Component.propTypes = {
  /** The text for the input segment's description. */
  description: PropTypes.string,
  /** The text for the input segment's heading. */
  heading: PropTypes.string.isRequired,
  /** Is the toggle checked. */
  isToggleChecked: PropTypes.bool,
  /** The name of the togglable value. */
  name: PropTypes.string,
  /**
   * Event called when the toggle value changes.
   * @param {string} name
   * @param {bool}   isToggleChecked
   */
  onChange: PropTypes.func,
  /**
   * Event called when the input segment is clicked.
   * @param {Object} event
   */
  onClick: PropTypes.func,
};
