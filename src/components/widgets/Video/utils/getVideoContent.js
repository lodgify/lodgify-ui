import React from 'react';
import DOMPurify from 'dompurify';
import ReactPlayer from 'react-player';
import isValidUrl from 'is-url';
import isValidHTML from 'is-html';

/**
 * Given an input, returns the Video React Element
 * @param {Boolean} isUrl
 * @param {String} videoInput
 * @returns {Object}
 */
export const getVideoContent = (isUrl, videoInput) => {
  // In case a URL is informed
  if (isUrl && isValidUrl(videoInput)) {
    return (
      <div className="video is-url">
        <ReactPlayer url={videoInput} />
      </div>
    );
  }

  // Case where it's not an URL -> Expected to be HTML content
  if (isValidHTML(videoInput)) {
    return (
      <div
        className="video is-html"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(videoInput) }}
      />
    );
  }

  // Otherwise
  return null;
};
