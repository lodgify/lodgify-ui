import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

import { Toggle } from 'inputs/Toggle';
import { FlexContainer } from 'layout/FlexContainer';
import { Heading } from 'typography/Heading';
import { Paragraph } from 'typography/Paragraph';

/**
 * A collection of information alongside a toggle input.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export class Component extends PureComponent {
  state = {
    isToggleChecked: this.props.isToggleChecked || false,
  };

  handleOnClick = event => {
    const { isToggleChecked } = this.state;

    this.setState({
      isToggleChecked: this.props.isToggleChecked || !isToggleChecked,
    });
    this.props.onClick(event, isToggleChecked);
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
  isToggleChecked: false,
};

Component.propTypes = {
  /** The text for the input segment's description. */
  description: PropTypes.string,
  /** The text for the input segment's heading. */
  heading: PropTypes.string.isRequired,
  /** Is the toggle checked. */
  isToggleChecked: PropTypes.bool,
  /**
   * Event called when the input segment is clicked.
   * @param {Object} event
   * @param {bool}   isToggleChecked
   */
  onClick: PropTypes.func,
};
