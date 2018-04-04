import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';

import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { IconCard } from 'elements/IconCard';

/**
 * The standard widget for displaying key facts about a property.
 * @returns {Object}
 */
export const Component = ({ keyFacts, width }) => (
  <GridColumn width={width}>
    <Heading size="tiny">Key facts</Heading>
    <Label.Group>
      {keyFacts.map(({ iconName, isDisabled, label }) => (
        <IconCard
          isDisabled={isDisabled}
          isFilled
          key={label}
          label={label}
          name={iconName}
        />
      ))}
    </Label.Group>
  </GridColumn>
);

Component.displayName = 'KeyFacts';

Component.defaultProps = {
  width: 12,
};

Component.propTypes = {
  /** The key facts to display as icon cards. */
  keyFacts: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The name of the icon to display.
       * [See Semantic UI for the full list.](https://react.semantic-ui.com/elements/IconCard)
       */
      iconName: PropTypes.string.isRequired,
      /** Is the key fact disabled. */
      isDisabled: PropTypes.bool,
      /** A visible label to display for the key fact. */
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** The number of columns the widget occupies. */
  width: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
};
