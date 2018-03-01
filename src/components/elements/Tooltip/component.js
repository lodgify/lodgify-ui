import React from 'react';
import PropTypes from 'prop-types';
import { Popup, Icon } from 'semantic-ui-react';

/**
 * A tooltip helps a user understand an element or some content.
 * @return {Object}
 */
export const Component = ({ content, size }) => (
  <Popup
    color="grey"
    content={content}
    inverted
    position="top center"
    size={size}
    trigger={<Icon name="info" color="grey" inverted circular size={size} />}
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
