import React from 'react';
import PropTypes from 'prop-types';

import { getParagraphsFromStrings } from 'lib/get-paragraphs-from-strings';
import { getUniqueKey } from 'lib/get-unique-key';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { Paragraph } from 'typography/Paragraph';
import { IconCard } from 'elements/IconCard';

/**
 * The standard widget for displaying the rules of a property.
 * @returns {Object}
 */
export const Component = ({ checkInTime, checkOutTime, rules }) => (
  <Grid>
    <GridColumn width={12}>
      <Heading size="tiny">House Rules</Heading>
    </GridColumn>
    <GridColumn width={3}>
      {getParagraphsFromStrings(rules.join('\n')).map(
        (paragraphText, index) => (
          <Paragraph key={getUniqueKey(paragraphText, index)}>
            {paragraphText}
          </Paragraph>
        )
      )}
    </GridColumn>
    <GridColumn width={3}>
      <Grid>
        <GridColumn width={6}>
          <IconCard name="home" label={checkInTime} />
        </GridColumn>
        <GridColumn width={6}>
          <IconCard name="home" label={checkOutTime} />
        </GridColumn>
      </Grid>
    </GridColumn>
  </Grid>
);

Component.displayName = 'PropertyRules';

Component.propTypes = {
  /** The propery check-in time. */
  checkInTime: PropTypes.string.isRequired,
  /** The propery check-out time. */
  checkOutTime: PropTypes.string.isRequired,
  /** The collection of rules. */
  rules: PropTypes.arrayOf(PropTypes.string).isRequired,
};
