import React, { Children } from 'react';
import PropTypes from 'prop-types';

import { GridColumn } from 'collections/Grid/GridColumn';
import { FULL_WIDTH_COLUMN } from 'collections/Grid';

/**
 * A container which renders a column which spans to a given width
 * and render its children
 */
export const Component = ({ children, width }) => (
  <GridColumn width={width}>
    {Children.map(children, (child, index) =>
      React.cloneElement(child, { key: index })
    )}
  </GridColumn>
);

Component.displayName = 'Container';

Component.defaultProps = {
  children: null,
  width: FULL_WIDTH_COLUMN,
};

Component.propTypes = {
  /** The child components and elements. */
  children: PropTypes.node,
  /** How many columns the widget should span */
  width: PropTypes.number,
};
