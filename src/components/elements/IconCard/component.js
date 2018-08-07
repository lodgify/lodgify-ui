import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';
import cx from 'classnames';

import { getParagraphsFromStrings } from 'utils/get-paragraphs-from-strings';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Icon } from 'elements/Icon';
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
  <Label
    basic={!isFilled}
    className={cx('icon-card', { 'left aligned': isLeftAligned })}
  >
    <Icon isDisabled={isDisabled} name={name} size="big" />
    {label &&
      getParagraphsFromStrings(label).map((paragraph, index) => (
        <Paragraph key={buildKeyFromStrings(paragraph, index)}>
          {paragraph}
        </Paragraph>
      ))}
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
   * [See here for the full list of valid icon names](https://github.com/lodgify/lodgify-ui/tree/production/src/constants/icon-names.js)
   */
  name: PropTypes.string.isRequired,
};
