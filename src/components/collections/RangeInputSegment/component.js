import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

import { Divider } from 'elements/Divider';
import { FlexContainer } from 'layout/FlexContainer';
import { Heading } from 'typography/Heading';
import { Paragraph } from 'typography/Paragraph';
import { Range } from 'inputs/Range';

/**
 * A collection of information alongside a range input.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ description, heading, ...rangeProps }) => (
  <Segment className="is-input-segment" vertical>
    <FlexContainer
      alignItems="baseline"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Heading>{heading}</Heading>
      <Paragraph>{description}</Paragraph>
      <Divider size="small" />
      <Range {...rangeProps} />
    </FlexContainer>
  </Segment>
);

Component.displayName = 'RangeInputSegment';

Component.defaultProps = {
  domain: [0, 100],
  initialValue: undefined,
  isShowingTrackOutsideLeft: true,
  isShowingTrackOutsideRight: false,
  name: '',
  onChange: Function.prototype,
  renderValue: value => value,
  step: 1,
  value: undefined,
};

Component.propTypes = {
  /** The text for the description displayed under the heading. */
  description: PropTypes.string.isRequired,
  /** The lower and upper bound of the constrained domain from which a user can select values. */
  domain: PropTypes.arrayOf(PropTypes.number),
  /** The text for the input segment's heading. */
  heading: PropTypes.string.isRequired,
  /** The default value of the range. */
  initialValue: PropTypes.arrayOf(PropTypes.number),
  /** Is the range displaying a coloured track between the left of the rail to the leftmost handle. */
  isShowingTrackOutsideLeft: PropTypes.bool,
  /** Is the range displaying a coloured track between the right of the rail to the rightmost handle. */
  isShowingTrackOutsideRight: PropTypes.bool,
  /** The name for the range. */
  name: PropTypes.string,
  /** A function called when the range value changes. */
  onChange: PropTypes.func,
  /** A function returning a React node for modifying the way values are rendered. */
  renderValue: PropTypes.func,
  /** The stepping interval between selectable values. */
  step: PropTypes.number,
  /** The current value of the range where it is consumed as a controlled component. */
  value: PropTypes.arrayOf(PropTypes.number),
};
