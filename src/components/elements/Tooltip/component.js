import 'semantic-ui-styles/popup.less';
import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'semantic-ui-react';

import { getTriggerMarkup } from './getTriggerMarkup';

/**
 * A tooltip helps a user understand an element or some content.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ content, size }) => (
  <Popup
    color="grey"
    content={content}
    inverted
    position="top center"
    size={size}
    trigger={getTriggerMarkup(size)}
  />
);

Component.displayName = 'Tooltip';

Component.defaultProps = {
  size: 'small',
};

Component.propTypes = {
  /** The text content of the tooltip. */
  content: PropTypes.string.isRequired,
  /** The size of the tooltip icon. */
  size: PropTypes.oneOf(['small', 'tiny']),
};
