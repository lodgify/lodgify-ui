import React from 'react';

import { Grid } from 'layout/Grid';
import { GridRow } from 'layout/GridRow';
import { SearchBar } from 'general-widgets/SearchBar';

/**
 * @param  {Object} props
 * @return {Object}
 */
export const getSearchBarMarkup = props => (
  <Grid areColumnsCentered>
    <GridRow horizontalAlignContent="center">
      <SearchBar willDropdownsOpenAbove {...props} />
    </GridRow>
  </Grid>
);
