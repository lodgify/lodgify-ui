import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

/**
 * The standard HTML Widget
 * @returns {Object}
 */
export const Component = ({ htmlString, children }) =>
  children ? (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlString) }}
      />
      {children}
    </div>
  ) : (
    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlString) }} />
  );

Component.displayName = 'HTML';

Component.defaultProps = {
  htmlString: '',
  children: null,
};

Component.propTypes = {
  /** HTML content */
  htmlString: PropTypes.string,
  /** Children nodes */
  children: PropTypes.node,
};
