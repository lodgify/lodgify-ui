import React, { Children } from 'react';
import PropTypes from 'prop-types';

import { Grid } from 'collections/Grid';
import { GridRow } from 'collections/Grid/GridRow';
import { GridColumn } from 'collections/Grid/GridColumn';
import { COLUMNS } from 'collections/Grid';

/**
 * A container which renders widgets inside of it
 * A 12-columns based grid width can also be specified
 */
export const Component = ({ children, width }) => (
  <Grid>
    <GridRow>
      <GridColumn width={width}>
        {Children.map(children, (child, index) =>
          React.cloneElement(child, { key: index })
        )}
      </GridColumn>
    </GridRow>
  </Grid>
);

Component.displayName = 'Container';

Component.defaultProps = {
  children: null,
  width: COLUMNS,
};

Component.propTypes = {
  /** The child components and elements. */
  children: PropTypes.node,
  /** How many columns the widget should span */
  width: PropTypes.number,
};
