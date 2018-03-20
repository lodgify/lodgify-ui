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
  onLoad,
  isFluid,
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
          onLoad={onLoad}
          fluid={isFluid}
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
          onLoad={onLoad}
          fluid={isFluid}
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
  onLoad: Function.prototype,
  isFluid: true,
};

Component.propTypes = {
  /** URL pointing to the image to render */
  imageUrl: PropTypes.string,
  /** Collection of objects to specify different image sources
   *  See https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
   *  for further info
   */
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      srcset: PropTypes.string.isRequired,
      media: PropTypes.string.isRequired,
    })
  ),
  /** Alternative text to show if the image can't be loaded by the browser */
  alternativeText: PropTypes.string,
  /** Title of the image to show when hovering it on desktop browsers */
  imageTitle: PropTypes.string,
  /** Custom class name string to customize the resulting img */
  className: PropTypes.string,
  /** Whether to render fluidly the image or not */
  isFluid: PropTypes.bool,
  /** The function to call when the image is loaded */
  onLoad: PropTypes.func,
};
