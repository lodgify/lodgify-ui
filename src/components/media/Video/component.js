import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import ReactPlayer from 'react-player';
import isValidUrl from 'is-url';
import isValidHTML from 'is-html';

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
    const { videoSource } = this.props;

    // In case a URL is informed
    if (isValidUrl(videoSource)) {
      return (
        <div className="video is-url">
          <ReactPlayer url={videoSource} />
        </div>
      );
    }

    // Case where it's not an URL -> Expected to be HTML content
    if (isValidHTML(videoSource)) {
      return (
        <div
          className="video is-html"
          dangerouslySetInnerHTML={{
            __html: this.state.cleanHTMLString,
          }}
        />
      );
    }

    throw new Error('getVideoContent - wrong videoSource provided');
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
