import 'semantic-ui-styles/list.less';
import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import { size } from 'lodash';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { HOUSE_RULES } from 'utils/default-strings';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { Paragraph } from 'typography/Paragraph';
import { CHECK_IN, CHECK_OUT } from 'utils/default-strings';

import { getCheckInAndCheckOutMarkup } from './utils/getCheckInAndCheckOutMarkup';

/**
 * The standard widget for displaying the rules of a property.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  checkInTime,
  checkInTimeLabel,
  checkOutTime,
  checkOutTimeLabel,
  headingText,
  rules,
}) => (
  <Grid isStackable>
    <GridColumn width={12}>
      <Heading>{headingText}</Heading>
    </GridColumn>
    {size(rules) > 0 && (
      <GridColumn computer={3} tablet={5}>
        <List
          items={rules.map((rule, index) => (
            <Paragraph key={buildKeyFromStrings(rule, index)}>{rule}</Paragraph>
          ))}
        />
      </GridColumn>
    )}
    {getCheckInAndCheckOutMarkup(
      checkInTimeLabel,
      checkInTime,
      checkOutTimeLabel,
      checkOutTime
    )}
  </Grid>
);

Component.displayName = 'Rules';

Component.defaultProps = {
  checkInTimeLabel: CHECK_IN,
  checkOutTimeLabel: CHECK_OUT,
  headingText: HOUSE_RULES,
};

Component.propTypes = {
  /** The propery check-in time. */
  checkInTime: PropTypes.string.isRequired,
  /** The label displayed next to the check-in time. */
  checkInTimeLabel: PropTypes.string,
  /** The propery check-out time. */
  checkOutTime: PropTypes.string.isRequired,
  /** The label displayed next to the check-out time. */
  checkOutTimeLabel: PropTypes.string,
  /** The text to display as a heading at the top of the widget. */
  headingText: PropTypes.string,
  /** The collection of rules. */
  rules: PropTypes.arrayOf(PropTypes.string).isRequired,
};
