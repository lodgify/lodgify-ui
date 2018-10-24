import React from 'react';
import PropTypes from 'prop-types';
import List from 'semantic-ui-react/dist/commonjs/elements/List';
import { size } from 'lodash';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { HOUSE_RULES } from 'utils/default-strings';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Divider } from 'elements/Divider';
import { Heading } from 'typography/Heading';
import { Paragraph } from 'typography/Paragraph';
import { Icon, ICON_NAMES } from 'elements/Icon';

import { getLabelAndValueString } from './utils/getLabelAndValueString';

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
  <Grid stackable>
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
    <GridColumn computer={9} tablet={7}>
      <Icon
        labelText={getLabelAndValueString(checkInTimeLabel, checkInTime)}
        name={ICON_NAMES.CHECK_IN}
      />
      <Divider />
      <Icon
        labelText={getLabelAndValueString(checkOutTimeLabel, checkOutTime)}
        name={ICON_NAMES.CHECK_OUT}
      />
    </GridColumn>
  </Grid>
);

Component.displayName = 'Rules';

Component.defaultProps = {
  checkInTimeLabel: 'Check in',
  checkOutTimeLabel: 'Check out',
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
