import ReactPlayer from 'react-player';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import isValidUrl from 'is-url';
import isValidHTML from 'is-html';
import getClassNames from 'classnames';

import { getPlayerCss } from './utils/getPlayerCss';
import { getReactPlayerProps } from './utils/getReactPlayerProps';
import { logWarning } from './utils/logWarning';

/**
 * The Video widget. It allows the consumer to render videos given a URL or
 * an embeddable HTML snippet.
 * @extends {React.PureComponent}
 * @returns {Object}
 */
export class Component extends PureComponent {
  state = {
    cleanHTMLString: null,
  };

  componentDidMount = () => {
    const { videoSource } = this.props;

    isValidHTML(videoSource) &&
      this.setState({
        // `DOMPurify.sanitize` is in `componentDidMount` so that it
        // is not called during server side rendering.
        // Reason: DOMPurify depends on browser features.
        cleanHTMLString: DOMPurify.sanitize(videoSource, {
          SANITIZE_DOM: true,
          ALLOWED_TAGS: ['iframe', 'object', 'video', 'audio'],
        }),
      });
  };

  render() {
    const { videoSource, isResponsive, width, height } = this.props;

    const playerWrapperProps = {
      className: getClassNames('video', 'player-wrapper', {
        'is-url': isValidUrl(videoSource),
        'is-html': isValidHTML(videoSource),
        'is-responsive': isResponsive,
      }),
      style: getPlayerCss(isResponsive, width, height),
    };

    switch (true) {
      case isValidUrl(videoSource):
        return (
          <div {...playerWrapperProps}>
            <ReactPlayer {...getReactPlayerProps(isResponsive, videoSource)} />
          </div>
        );
      case isValidHTML(videoSource):
        return (
          <div
            {...playerWrapperProps}
            dangerouslySetInnerHTML={{
              __html: this.state.cleanHTMLString,
            }}
          />
        );
      default:
        logWarning(videoSource);
        return null;
    }
  }
}

Component.displayName = 'Video';

Component.defaultProps = {
  height: 315,
  isResponsive: false,
  videoSource: null,
  width: 560,
};

Component.propTypes = {
  /** The height of the video to determine the aspect ratio of the video */
  height: PropTypes.number,
  /** Should the video be responsive */
  isResponsive: PropTypes.bool,
  /** The string that will be used to build the video player.
   *  A URL pointing to a Youtube, Vimeo, ... video is valid.
   *  A embeddable HTML video snippet is also valid (iframes, video, audio, objects)
   *  An invalid input throws an error.
   */
  videoSource: PropTypes.string,
  /** The width of the component to determine aspect ratio */
  width: PropTypes.number,
};
