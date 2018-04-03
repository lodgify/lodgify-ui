import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'semantic-ui-react';

/**
 * A divider adds whitespace between other elements.
 * @return {Object}
 */
export const Component = ({ hasLine }) => <Divider hidden={!hasLine} />;

Component.displayName = 'Divider';

Component.defaultProps = {
  hasLine: false,
};

Component.propTypes = {
  /** Does the divider have a visible line. */
  hasLine: PropTypes.bool,
};
