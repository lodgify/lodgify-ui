import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

import { Counter } from 'inputs/Counter';
import { Divider } from 'elements/Divider';
import { FlexContainer } from 'layout/FlexContainer';
import { Heading } from 'typography/Heading';
import { Paragraph } from 'typography/Paragraph';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';

/**
 * A collection of information alongside a counter inputs.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ heading, counters }) => (
  <Segment className="is-input-segment is-counter-input-segment" vertical>
    <FlexContainer
      alignItems="baseline"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Heading>{heading}</Heading>
      <Divider size="small" />
      {counters.map(({ labelText, ...counterProps }, index) => (
        <Fragment key={buildKeyFromStrings(labelText, index)}>
          <FlexContainer flexDirection="row" justifyContent="space-between">
            <Paragraph>{labelText}</Paragraph>
            <Counter {...counterProps} />
          </FlexContainer>
          <Divider size="small" />
        </Fragment>
      ))}
    </FlexContainer>
  </Segment>
);

Component.displayName = 'CounterInputSegment';

Component.propTypes = {
  /**	An array of counter prop objects. */
  counters: PropTypes.arrayOf(
    PropTypes.shape({
      /** The default value of the range. Minimum 0. */
      initialValue: PropTypes.number,
      /** The text for the label displayed alongside the counter. */
      labelText: PropTypes.string.isRequired,
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
    })
  ).isRequired,
  /** The text for the input segment's heading. */
  heading: PropTypes.string.isRequired,
};
