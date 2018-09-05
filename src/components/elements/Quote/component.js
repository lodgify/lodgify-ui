import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { Paragraph } from 'typography/Paragraph';

import { getQuoteSource } from './utils/getQuoteSource';

/**
 * A quote displays text with indentation and a left border.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ quoteDateTime, quoteSource, quoteText }) => (
  <blockquote className="ui quote">
    <Grid>
      <GridRow>
        <GridColumn>
          <Paragraph>{quoteText}</Paragraph>
        </GridColumn>
      </GridRow>
      <GridRow horizontalAlignContent="right">
        <GridColumn>
          <Paragraph size="tiny">
            {getQuoteSource(quoteSource, quoteDateTime)}
          </Paragraph>
        </GridColumn>
      </GridRow>
    </Grid>
  </blockquote>
);

Component.displayName = 'Quote';

Component.propTypes = {
  /** The time of the quote. */
  quoteDateTime: PropTypes.string.isRequired,
  /** The name of the individual being quoted. */
  quoteSource: PropTypes.string.isRequired,
  /** The text for the quote. */
  quoteText: PropTypes.string.isRequired,
};
