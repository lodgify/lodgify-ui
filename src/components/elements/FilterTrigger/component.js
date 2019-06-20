import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Icon } from 'elements/Icon';
import { MORE_FILTERS } from 'utils/default-strings';

/**
 * A filter trigger removes filters and displays the available filters.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  onFiltersClick,
  onClearFiltersClick,
  filterTriggerText,
  hasFiltersSelected,
}) => (
  <div
    className={classNames('filter-trigger', {
      'has-filter': !!hasFiltersSelected,
    })}
  >
    <button onClick={onFiltersClick}>
      <Icon labelText={filterTriggerText} name="filter" />
    </button>
    {hasFiltersSelected && (
      <button onClick={onClearFiltersClick}>
        <Icon name="close" />
      </button>
    )}
  </div>
);

Component.displayName = 'FilterTrigger';

Component.defaultProps = {
  filterTriggerText: MORE_FILTERS,
  hasFiltersSelected: false,
  onClearFiltersClick: Function.prototype,
  onFiltersClick: Function.prototype,
};

Component.propTypes = {
  /** The text inside the filter trigger. */
  filterTriggerText: PropTypes.string,
  /** Filters are selected. */
  hasFiltersSelected: PropTypes.bool,
  /** The function to call when the clear filters button is clicked.
   *  @param {Object} event
   */
  onClearFiltersClick: PropTypes.func,
  /** The function to call when the filters button is clicked.
   *  @param {Object} event
   */
  onFiltersClick: PropTypes.func,
};
