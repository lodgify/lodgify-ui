import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

/**
 * The HTML widget sanitises and renders HTML strings.
 * @returns {Object}
 */

export class Component extends PureComponent {
  render() {
    const { htmlString, children } = this.props;

    return children ? (
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlString) }}
        />
        {children}
      </div>
    ) : (
      <div
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlString) }}
      />
    );
  }
}

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
