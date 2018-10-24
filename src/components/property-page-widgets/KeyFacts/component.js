import React from 'react';
import PropTypes from 'prop-types';
import Label from 'semantic-ui-react/dist/commonjs/elements/Label';

import { KEY_FACTS } from 'utils/default-strings';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Heading } from 'typography/Heading';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { IconCard } from 'elements/IconCard';

/**
 * The standard widget for displaying key facts about a property.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ keyFacts, headingText }) => (
  <Grid>
    <GridColumn width={12}>
      <Heading>{headingText}</Heading>
    </GridColumn>
    <GridColumn width={12}>
      <Label.Group>
        {keyFacts.map(({ iconName, isDisabled, label }, index) => (
          <IconCard
            isDisabled={isDisabled}
            isFilled
            key={buildKeyFromStrings(label, index)}
            label={label}
            name={iconName}
          />
        ))}
      </Label.Group>
    </GridColumn>
  </Grid>
);

Component.displayName = 'KeyFacts';

Component.defaultProps = {
  headingText: KEY_FACTS,
};

Component.propTypes = {
  /** The text to display as a heading at the top of the widget. */
  headingText: PropTypes.string,
  /** The key facts to display as icon cards. */
  keyFacts: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The name of the icon to display.
       * [See here for the full list of valid icon names](https://github.com/lodgify/lodgify-ui/blob/production/src/components/elements/Icon/constants.js)
       */
      iconName: PropTypes.string.isRequired,
      /** Is the key fact disabled. */
      isDisabled: PropTypes.bool,
      /** A visible label to display for the key fact. */
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
