import React from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';

import { Paragraph } from 'typography/Paragraph';
import { getBackgroundImageUrl } from 'lib/get-background-image-url';

/**
 * The standard element for displaying a thumbnail.
 * @returns {Object}
 */
export const Component = ({
  alternativeText,
  imageUrl,
  isCircular,
  isRoundEdged,
  isSquare,
  label,
  size,
}) => (
  <div className="ui thumbnail">
    <div
      className={getClassNames('ui', 'image', size, {
        circular: isCircular,
        square: isSquare,
        rounded: isRoundEdged,
      })}
      style={{ backgroundImage: getBackgroundImageUrl(imageUrl) }}
    >
      <span role="img" aria-label={alternativeText} />
    </div>
    {!!label ? <Paragraph>{label}</Paragraph> : null}
  </div>
);

Component.displayName = 'Thumbnail';

Component.defaultProps = {
  alternativeText: 'Thumbnail element',
  isCircular: false,
  isRoundEdged: false,
  isSquare: false,
  label: null,
  size: null,
};

Component.propTypes = {
  /** Alternative text to show if the image can't be loaded by the browser */
  alternativeText: PropTypes.string,
  /** URL pointing to the image to render */
  imageUrl: PropTypes.string.isRequired,
  /** Whether to render a circular thumbnail */
  isCircular: PropTypes.bool,
  /** Whether to render a round edged thumbnail */
  isRoundEdged: PropTypes.bool,
  /** Whether to render a square thumbnail */
  isSquare: PropTypes.bool,
  /** A visible label for the thumbnail */
  label: PropTypes.string,
  /** The size of the thumbnail */
  size: PropTypes.oneOf(['small', 'large', 'huge']),
};
