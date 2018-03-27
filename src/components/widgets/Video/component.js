import PropTypes from 'prop-types';

import { getVideoContent } from './utils';

/**
 * The standard widget for owner login.
 * @returns {Object}
 */
export const Component = ({ isUrl, videoInput }) =>
  getVideoContent(isUrl, videoInput);

Component.displayName = 'Video';

Component.defaultProps = {
  isUrl: false,
  videoInput: null,
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
