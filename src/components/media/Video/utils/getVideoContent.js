import React from 'react';
import DOMPurify from 'dompurify';
import ReactPlayer from 'react-player';
import isValidUrl from 'is-url';
import isValidHTML from 'is-html';

/**
 * Given an input, returns the Video React Element
 * @param {String} videoSource
 * @returns {Object}
 */
export const getVideoContent = videoSource => {
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
          __html: DOMPurify.sanitize(videoSource, {
            SANITIZE_DOM: true,
            ALLOWED_TAGS: ['iframe', 'object', 'video', 'audio'],
          }),
        }}
      />
    );
  }

  throw new Error('getVideoContent - wrong videoSource provided');
};
