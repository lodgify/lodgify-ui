import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { getVideoContent } from './utils';

/**
 * The standard widget for owner login.
 * @returns {Object}
 */
export class Component extends PureComponent {
  render() {
    const { isUrl, videoSource } = this.props;
    return getVideoContent(isUrl, videoSource);
  }
}

Component.displayName = 'Video';

Component.defaultProps = {
  isUrl: false,
  videoSource: null,
};

Component.propTypes = {
  /** Whether the input is an url or not
   */
  isUrl: PropTypes.bool,
  /** The string that will be used to build the video player. It could be
   *  whether a URL or a embeddable HTML snippet.
   */
  videoSource: PropTypes.string,
};
