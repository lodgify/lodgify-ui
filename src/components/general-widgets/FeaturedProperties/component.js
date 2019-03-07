import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Heading } from 'typography/Heading';
import { FeaturedProperty } from 'general-widgets/FeaturedProperty';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';

import { PLACEHOLDERS } from './constants';

/**
 * The standard widget for displaying a list of featured properties.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  featuredProperties,
  headingText,
  isShowingPlaceholder,
}) => {
  const featuredPropertiesToMap =
    isShowingPlaceholder && featuredProperties.length === 0
      ? PLACEHOLDERS
      : featuredProperties;

  return (
    <Fragment>
      {headingText && <Heading>{headingText}</Heading>}
      {featuredPropertiesToMap.map((featuredProperty, index) => (
        <FeaturedProperty
          isShowingPlaceholder={isShowingPlaceholder}
          key={buildKeyFromStrings(featuredProperty.propertyName, index)}
          {...featuredProperty}
        />
      ))}
    </Fragment>
  );
};

Component.displayName = 'FeaturedProperties';

Component.defaultProps = {
  featuredProperties: [],
  headingText: null,
  isShowingPlaceholder: false,
};

Component.propTypes = {
  /** An array of [`FeaturedProperty`](#/FeaturedProperty) props objects. */
  featuredProperties: PropTypes.arrayOf(PropTypes.object),
  /** The text to display as a heading at the top of the widget. */
  headingText: PropTypes.string,
  /** Is the component showing placeholders to reserve space for content which will appear. */
  isShowingPlaceholder: PropTypes.bool,
};
