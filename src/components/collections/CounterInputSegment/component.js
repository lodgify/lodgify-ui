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
      {counters.map(({ name, ...counterProps }, index) => (
        <Fragment key={buildKeyFromStrings(name, index)}>
          <FlexContainer flexDirection="row" justifyContent="space-between">
            <Paragraph>{name}</Paragraph>
            <Counter name={name} {...counterProps} />
          </FlexContainer>
          <Divider size="small" />
        </Fragment>
      ))}
    </FlexContainer>
  </Segment>
);

Component.displayName = 'CounterInputSegment';

Component.propTypes = {
  /**	An array of [`Counter`](#/Counter) props objects. */
  counters: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** The text for the input segment's heading. */
  heading: PropTypes.string.isRequired,
};
