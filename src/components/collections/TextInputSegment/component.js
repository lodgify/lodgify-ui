import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

import { TextInput } from 'inputs/TextInput';
import { Divider } from 'elements/Divider';
import { FlexContainer } from 'layout/FlexContainer';
import { Heading } from 'typography/Heading';

/**
 * A collection of information alongside a text input.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  heading,
  onTextInputChange,
  textInputLabel,
  textInputName,
  textInputValue,
}) => (
  <Segment className="is-input-segment" vertical>
    <FlexContainer
      alignItems="baseline"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Heading>{heading}</Heading>
      <Divider size="small" />
      <TextInput
        label={textInputLabel}
        name={textInputName}
        onChange={onTextInputChange}
        type="text"
        value={textInputValue}
      />
    </FlexContainer>
  </Segment>
);

Component.displayName = 'TextInputSegment';

Component.defaultProps = {
  onTextInputChange: Function.prototype,
  textInputLabel: undefined,
  textInputName: undefined,
  textInputValue: undefined,
};

Component.propTypes = {
  /** The text for the input segment's heading. */
  heading: PropTypes.string.isRequired,
  /**
   * Event called when the input segment's text input value is changed.
   * @param {string} event
   * @param {string} value
   */
  onTextInputChange: PropTypes.func,
  /** The visible label for the text input. */
  textInputLabel: PropTypes.string,
  /** The name for the text input. */
  textInputName: PropTypes.string,
  /** The current value of the text input where it is consumed as a controlled component.  */
  textInputValue: PropTypes.string,
};
