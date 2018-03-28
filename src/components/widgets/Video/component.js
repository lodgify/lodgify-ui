import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { getVideoContent } from './utils';

/**
 * The Video widget. It allows the consumer to render videos given a URL or
 * an embeddable HTML snippet.
 * @extends {React.PureComponent}
 * @returns {Object}
 */
export class Component extends PureComponent {
  render() {
    const { videoSource } = this.props;

    return getVideoContent(videoSource);
  }
}

Component.displayName = 'Video';

Component.defaultProps = {
  videoSource: null,
};

Component.propTypes = {
  /** The string that will be used to build the video player.
   *  A URL pointing to a Youtube, Vimeo, ... video is valid.
   *  A embeddable HTML video snippet is also valid (iframes, video, audio, objects)
   *  An invalid input throws an error.
   */
  videoSource: PropTypes.string,
};
