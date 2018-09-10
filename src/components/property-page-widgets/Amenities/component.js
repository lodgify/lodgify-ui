import React from 'react';
import PropTypes from 'prop-types';

import { VIEW_MORE } from 'utils/default-strings';
import { VerticalGutters } from 'layout/VerticalGutters';

import { getAmenityMarkup } from './utils/getAmenityMarkup';

/**
 * The standard widget for displaying the amenities of a property.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  amenities,
  hasExtraItemsInModal,
  headingText,
  isNested,
  isStacked,
  modalTriggerText,
}) =>
  isNested ? (
    getAmenityMarkup(
      amenities,
      hasExtraItemsInModal,
      headingText,
      isStacked,
      modalTriggerText
    )
  ) : (
    <VerticalGutters>
      {getAmenityMarkup(
        amenities,
        hasExtraItemsInModal,
        headingText,
        isStacked,
        modalTriggerText
      )}
    </VerticalGutters>
  );

Component.displayName = 'Amenities';

Component.defaultProps = {
  hasExtraItemsInModal: false,
  headingText: null,
  isNested: false,
  isStacked: false,
  modalTriggerText: VIEW_MORE,
};

Component.propTypes = {
  /** The amenity categories. */
  amenities: PropTypes.arrayOf(
    PropTypes.shape({
      /** The name of the icon to display for the category.
       * [See here for the full list of valid icon names](https://github.com/lodgify/lodgify-ui/blob/production/src/components/elements/Icon/constants.js)
       */
      iconName: PropTypes.string.isRequired,
      /** The list of amenities */
      items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      /** The category name */
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** Are the extra items displayed in a modal. */
  hasExtraItemsInModal: PropTypes.bool,
  /** The text to display as a heading at the top of the amenities. */
  headingText: PropTypes.string,
  /** Is the component nested in another component */
  isNested: PropTypes.bool,
  /** Are the amenities displayed stacked on top of one another */
  isStacked: PropTypes.bool,
  /** The text for the modal trigger */
  modalTriggerText: PropTypes.string,
};
