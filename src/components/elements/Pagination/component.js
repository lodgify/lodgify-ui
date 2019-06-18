import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'semantic-ui-react';
import classNames from 'classnames';

import { getPageItemMarkup } from './utils/getPageItemMarkup';
import { getNextItemMarkup } from './utils/getNextItemMarkup';
import { getPreviousItemMarkup } from './utils/getPreviousItemMarkup';
import { getBoundryRange } from './utils/getBoundryRange';
import { getSiblingRange } from './utils/getSiblingRange';

/**
 * A pagination control enables a user to navigate a set of items or views.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  isShowingPageNumbers,
  onPageChange,
  startingPage,
  totalPages,
}) => (
  <Pagination
    boundaryRange={getBoundryRange(isShowingPageNumbers)}
    className={classNames({ 'has-page-numbers': isShowingPageNumbers })}
    defaultActivePage={startingPage}
    firstItem={null}
    lastItem={null}
    nextItem={getNextItemMarkup(isShowingPageNumbers)}
    onPageChange={onPageChange}
    pageItem={getPageItemMarkup(isShowingPageNumbers)}
    prevItem={getPreviousItemMarkup(isShowingPageNumbers)}
    secondary
    siblingRange={getSiblingRange(isShowingPageNumbers)}
    totalPages={totalPages}
  />
);

Component.displayName = 'Pagination';

Component.defaultProps = {
  isShowingPageNumbers: false,
  onPageChange: Function.prototype,
  startingPage: 1,
};

Component.propTypes = {
  /** Items are displayed as numbers. */
  isShowingPageNumbers: PropTypes.bool,
  /**
   * A function called each time the page changes.
   * @param {Object}  event - The synthetic event
   * @param {Object}  props - The props of the pagination component at the time of the change
   */
  onPageChange: PropTypes.func,
  /** The active page when the pagination component first renders. */
  startingPage: PropTypes.number,
  /** The total number of pages. */
  totalPages: PropTypes.number.isRequired,
};
