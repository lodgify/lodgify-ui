import React from 'react';
import PropTypes from 'prop-types';

/**
 * The HTML widget sanitises and renders HTML strings.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ children, htmlString }) =>
  children ? (
    <div>
      <div
        className="html-container"
        dangerouslySetInnerHTML={{ __html: htmlString }}
      />
      {children}
    </div>
  ) : (
    <div
      className="html-container"
      dangerouslySetInnerHTML={{ __html: htmlString }}
    />
  );

Component.displayName = 'HTML';

Component.defaultProps = {
  htmlString: '',
  children: null,
};

Component.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** HTML content */
  htmlString: PropTypes.string,
};
