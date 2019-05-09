import 'semantic-ui-styles/html.less';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

/**
 * The HTML widget sanitises and renders HTML strings.
 * @extends {React.PureComponent}
 * @returns {Object}
 */
export class Component extends PureComponent {
  state = {
    cleanHTMLString: null,
  };

  componentDidMount = () => {
    this.setState({
      // `DOMPurify.sanitize` is in `componentDidMount` so that it
      // is not called during server side rendering.
      // Reason: DOMPurify depends on browser features.
      cleanHTMLString: DOMPurify.sanitize(this.props.htmlString, {
        ADD_ATTR: ['target'],
      }),
    });
  };

  render() {
    const { cleanHTMLString } = this.state;
    const { children } = this.props;

    return children ? (
      <div>
        <div
          className="html-container"
          dangerouslySetInnerHTML={{ __html: cleanHTMLString }}
        />
        {children}
      </div>
    ) : (
      <div
        className="html-container"
        dangerouslySetInnerHTML={{ __html: cleanHTMLString }}
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
  /** Children nodes */
  children: PropTypes.node,
  /** HTML content */
  htmlString: PropTypes.string,
};
