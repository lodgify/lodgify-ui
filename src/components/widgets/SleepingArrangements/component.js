import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';

import { getUniqueKey } from 'lib/get-unique-key';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { IconCard } from 'elements/IconCard';

/**
 * The standard widget for displaying the sleeping arrangments for a property.
 * @returns {Object}
 */
export const Component = ({ sleepingArrangements, width }) => (
  <GridColumn width={width}>
    <Heading size="tiny">Sleeping arrangements</Heading>
    <Label.Group>
      {sleepingArrangements.map(({ iconName, label }, index) => (
        <IconCard
          isLeftAligned
          key={getUniqueKey(label, index)}
          label={label}
          name={iconName}
        />
      ))}
    </Label.Group>
  </GridColumn>
);

Component.displayName = 'SleepingArrangements';

Component.defaultProps = {
  width: 12,
};

Component.propTypes = {
  /** The sleeping arrangements to display as icon cards. */
  sleepingArrangements: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The name of the icon to display.
       * [See Semantic UI for the full list.](https://react.semantic-ui.com/elements/IconCard)
       */
      iconName: PropTypes.string.isRequired,
      /** A visible label to display for the sleeping arrangement. */
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** The number of columns the widget occupies. */
  width: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
};
