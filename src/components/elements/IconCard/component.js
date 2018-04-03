import React from 'react';
import PropTypes from 'prop-types';
import { Label, Icon } from 'semantic-ui-react';
import cx from 'classnames';

import { Paragraph } from 'typography/Paragraph';

/**
 * An icon card displays a large icon isolated on a card.
 * @return {Object}
 */
export const Component = ({
  isDisabled,
  isFilled,
  isLeftAligned,
  label,
  name,
}) => (
  <Label className={cx({ 'left aligned': isLeftAligned })} basic={!isFilled}>
    <Icon
      color={isDisabled ? 'grey' : undefined}
      inverted={isDisabled}
      name={name}
      size="big"
    />
    {label && <Paragraph>{label}</Paragraph>}
  </Label>
);

Component.displayName = 'IconCard';

Component.defaultProps = {
  isDisabled: false,
  isFilled: false,
  isLeftAligned: false,
  label: null,
};

Component.propTypes = {
  /** Is the icon card disabled. */
  isDisabled: PropTypes.bool,
  /** Is the icon card filled. */
  isFilled: PropTypes.bool,
  /** Is the content of the icon card left aligned. */
  isLeftAligned: PropTypes.bool,
  /** A visible label to display with the icon card. */
  label: PropTypes.string,
  /**
   * The name of the icon to display.
   * [See Semantic UI for the full list.](https://react.semantic-ui.com/elements/IconCard)
   */
  name: PropTypes.string.isRequired,
};
