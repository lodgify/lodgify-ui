import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

import { getParagraphsFromStrings } from 'lib/get-paragraphs-from-strings';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { Icon } from 'elements/Icon';

/**
 * The standard widget for displaying the rules of a property.
 * @returns {Object}
 */
export const Component = ({ checkInTime, checkOutTime, rules }) => (
  <Grid stackable>
    <GridColumn width={12}>
      <Heading size="small">House Rules</Heading>
    </GridColumn>
    <GridColumn width={3}>
      <List items={getParagraphsFromStrings(rules.join('\n'))} />
    </GridColumn>
    <GridColumn width={2}>
      <Grid verticalAlign="middle">
        <GridColumn width={3}>
          <Icon name="bed" />
        </GridColumn>
        <GridColumn width={9}>
          <div>
            <b>Check-in</b>
          </div>
          <span className="header">{checkInTime}</span>
        </GridColumn>
      </Grid>
    </GridColumn>
    <GridColumn width={2}>
      <Grid verticalAlign="middle">
        <GridColumn width={3}>
          <Icon name="question mark" />
        </GridColumn>
        <GridColumn width={9}>
          <div>
            <b>Check-out</b>
          </div>
          <span className="header">{checkOutTime}</span>
        </GridColumn>
      </Grid>
    </GridColumn>
  </Grid>
);

Component.displayName = 'Rules';

Component.propTypes = {
  /** The propery check-in time. */
  checkInTime: PropTypes.string.isRequired,
  /** The propery check-out time. */
  checkOutTime: PropTypes.string.isRequired,
  /** The collection of rules. */
  rules: PropTypes.arrayOf(PropTypes.string).isRequired,
};
