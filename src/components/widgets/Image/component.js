import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Image, Label } from 'semantic-ui-react';

const LEGACY_CLASSNAME = 'img-responsive';

/**
 * The standard Image widget
 * @returns {Object}
 */
export const Component = ({
  imageUrl,
  sources,
  alternativeText,
  imageTitle,
  className,
}) => (
  <div>
    {!!imageUrl.length && (
      <picture role="figure">
        {sources.map(({ srcset, media }) => (
          <source srcset={srcset} media={media} />
        ))}
        <Image
          src={imageUrl}
          alt={alternativeText}
          className={cx(LEGACY_CLASSNAME, className)}
          title={imageTitle}
          fluid
        />
      </picture>
    )}
    {!imageUrl.length && (
      <picture role="figure">
        {sources.map(({ srcset, media }) => (
          <source srcset={srcset} media={media} />
        ))}
        <Image
          src={imageUrl}
          alt={alternativeText}
          className={cx(LEGACY_CLASSNAME, className)}
          title={imageTitle}
          fluid
        >
          <Label content="Image not found!" icon="warning" />
        </Image>
      </picture>
    )}
  </div>
);

Component.displayName = 'Image';

Component.defaultProps = {
  imageUrl: '',
  alternativeText: 'Image Widget',
  imageTitle: 'Image title',
  className: null,
  sources: [],
};

Component.propTypes = {
  /** URL pointing to the image to render
   *  @param {Object} imageUrl - The base image URL
   */
  imageUrl: PropTypes.string,
  /** Collection of objects to specify different image sources
   *  See https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
   *  for further info
   *  @param {Object} sources - Collection of image sources
   */
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      srcset: PropTypes.string.isRequired,
      media: PropTypes.string.isRequired,
    })
  ),
  /** Alternative text to show if the image can't be loaded by the browser
   *  @param {Object} alternativeText - Alternative text
   */
  alternativeText: PropTypes.string,
  /** Title of the image to show when hovering it on desktop browsers
   *  @param {Object} imageTitle - Title string
   */
  imageTitle: PropTypes.string,
  /** Custom class name string to customize the resulting img
   *  @param {Object} className - Custom class name to style the image
   */
  className: PropTypes.string,
};
