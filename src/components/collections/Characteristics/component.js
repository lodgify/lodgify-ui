import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { getFirstFourItems } from 'utils/get-first-four-items';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Icon } from 'elements/Icon';
import { ShowOn } from 'layout/ShowOn';

/**
 * The standard widget for displaying a collection of characteristics for a property or a room.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ spaceCharacteristics }) => (
  <Grid columns={1}>
    <GridColumn width={12}>
      <ShowOn
        computer
        parent={List}
        parentProps={{ horizontal: true }}
        tablet
        widescreen
      >
        {getFirstFourItems(spaceCharacteristics).map(
          ({ iconName, text }, index) => (
            <List.Item key={buildKeyFromStrings(text, index)}>
              <Icon labelText={text} name={iconName} />
            </List.Item>
          )
        )}
      </ShowOn>
      <ShowOn mobile parent={Grid} parentProps={{ columns: 1 }}>
        {getFirstFourItems(spaceCharacteristics).map(
          ({ iconName, text }, index) => (
            <GridColumn
              computer={3}
              key={buildKeyFromStrings(text, index)}
              mobile={6}
            >
              <Icon labelText={text} name={iconName} />
            </GridColumn>
          )
        )}
      </ShowOn>
    </GridColumn>
  </Grid>
);

Component.displayName = 'Characteristics';

Component.defaultProps = {
  spaceCharacteristics: [],
};

Component.propTypes = {
  /** The main characteristics to display. Maximum four. */
  spaceCharacteristics: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The name of the icon to display.
       * [See here for the full list of valid icon names](https://github.com/lodgify/lodgify-ui/blob/master/src/components/elements/Icon/constants.js)
       */
      iconName: PropTypes.string.isRequired,
      /** A visible label to display for the key fact. */
      text: PropTypes.string.isRequired,
    })
  ),
};
