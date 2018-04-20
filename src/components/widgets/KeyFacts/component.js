import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';

import { getUniqueKey } from 'lib/get-unique-key';
import { Heading } from 'typography/Heading';
import { IconCard } from 'elements/IconCard';

/**
 * The standard widget for displaying key facts about a property.
 * @returns {Object}
 */
export const Component = ({ keyFacts }) => (
  <div>
    <Heading>Key facts</Heading>
    <Label.Group>
      {keyFacts.map(({ iconName, isDisabled, label }, index) => (
        <IconCard
          isDisabled={isDisabled}
          isFilled
          key={getUniqueKey(label, index)}
          label={label}
          name={iconName}
        />
      ))}
    </Label.Group>
  </div>
);

Component.displayName = 'KeyFacts';

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
};
