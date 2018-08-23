import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

import { HOUSE_RULES } from 'utils/default-strings';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Divider } from 'elements/Divider';
import { Heading } from 'typography/Heading';
import { Paragraph } from 'typography/Paragraph';
import { Icon, ICON_NAMES } from 'elements/Icon';

import { getCheckInOrOutTimeLabel } from './utils/getCheckInOrOutTimeLabel';

/**
 * The standard widget for displaying the rules of a property.
 * @returns {Object}
 */
export const Component = ({
  checkInTime,
  checkOutTime,
  headingText,
  rules,
}) => (
  <Grid stackable>
    <GridColumn width={12}>
      <Heading>{headingText}</Heading>
    </GridColumn>
    <GridColumn computer={3} tablet={5}>
      <List
        items={rules.map(rule => (
          <Paragraph>{rule}</Paragraph>
        ))}
      />
    </GridColumn>
    <GridColumn computer={9} tablet={7}>
      <Icon
        labelText={getCheckInOrOutTimeLabel(checkInTime)}
        name={ICON_NAMES.QUESTION_MARK}
      />
      <Divider />
      <Icon
        labelText={getCheckInOrOutTimeLabel(checkOutTime, true)}
        name={ICON_NAMES.QUESTION_MARK}
      />
    </GridColumn>
  </Grid>
);

Component.displayName = 'Rules';

Component.defaultProps = {
  headingText: HOUSE_RULES,
};

Component.propTypes = {
  /** The propery check-in time. */
  checkInTime: PropTypes.string.isRequired,
  /** The propery check-out time. */
  checkOutTime: PropTypes.string.isRequired,
  /** The text to display as a heading at the top of the rules. */
  headingText: PropTypes.string,
  /** The collection of rules. */
  rules: PropTypes.arrayOf(PropTypes.string).isRequired,
};
