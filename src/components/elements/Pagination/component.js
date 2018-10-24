import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'semantic-ui-react/dist/commonjs/addons/Pagination';

import { nextItem, pageItem, prevItem } from './navigationMarkup';

/**
 * A pagination control enables a user to navigate a set of items or views.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ onPageChange, startingPage, totalPages }) => (
  <Pagination
    boundaryRange={10}
    defaultActivePage={startingPage}
    firstItem={null}
    lastItem={null}
    nextItem={nextItem}
    onPageChange={onPageChange}
    pageItem={pageItem}
    prevItem={prevItem}
    secondary
    totalPages={totalPages}
  />
);

Component.displayName = 'Pagination';

Component.defaultProps = {
  onPageChange: Function.prototype,
  startingPage: 1,
};

Component.propTypes = {
  /**
   * A function called each time the page changes
   * @param {Object}  event - The synthetic event
   * @param {Object}  props - The props of the pagination component at the time of the change
   */
  onPageChange: PropTypes.func,
  /** The active page when the pagination component first renders */
  startingPage: PropTypes.number,
  /** The total number of pages */
  totalPages: PropTypes.number.isRequired,
};
