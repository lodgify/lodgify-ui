import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

import { Paragraph } from 'typography/Paragraph';

/**
 * An icon is a glyph used to represent something else.
 * @return {Object}
 */
export const Component = ({ isDisabled, label, name }) => (
  <span>
    <Icon
      color={isDisabled ? 'grey' : undefined}
      inverted={isDisabled}
      name={name}
      size="large"
    />
    {label && <Paragraph>{label}</Paragraph>}
  </span>
);

Component.displayName = 'Icon';

Component.defaultProps = {
  isDisabled: false,
  label: null,
};

Component.propTypes = {
  /** Is the icon disabled. */
  isDisabled: PropTypes.bool,
  /** A visible label to display with the icon. */
  label: PropTypes.string,
  /**
   * The name of the icon to display.
   * [See Semantic UI for the full list.](https://react.semantic-ui.com/elements/icon)
   */
  name: PropTypes.string.isRequired,
};
