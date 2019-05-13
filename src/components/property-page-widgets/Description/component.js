import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import isValidHTML from 'is-html';

import { size } from 'utils/size';
import { HOME_HIGHLIGHTS, VIEW_MORE } from 'utils/default-strings';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { getFirstFourItems } from 'utils/get-first-four-items';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { Icon } from 'elements/Icon';
import { Subheading } from 'typography/Subheading';
import { ShowOn } from 'layout/ShowOn';
import { HTML } from 'general-widgets/HTML';

import { getDescriptionTextMarkup } from './utils/getDescriptionTextMarkup';

/**
 * The standard widget for displaying the description of a property.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  descriptionText,
  extraDescriptionButtonText,
  homeHighlights,
  homeHighlightsHeadingText,
  propertyMainCharacteristics,
  propertyName,
  propertyType,
}) => (
  <Grid columns={1}>
    <GridColumn width={12}>
      <Subheading>{propertyType}</Subheading>
      <Heading size="large">{propertyName}</Heading>
    </GridColumn>
    <GridColumn width={12}>
      <ShowOn
        computer
        parent={List}
        parentProps={{ horizontal: true }}
        tablet
        widescreen
      >
        {getFirstFourItems(propertyMainCharacteristics).map(
          ({ iconName, text }, index) => (
            <List.Item key={buildKeyFromStrings(text, index)}>
              <Icon labelText={text} name={iconName} />
            </List.Item>
          )
        )}
      </ShowOn>
      <ShowOn mobile parent={Grid} parentProps={{ columns: 1 }}>
        {getFirstFourItems(propertyMainCharacteristics).map(
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
    {descriptionText && (
      <GridColumn width={12}>
        {isValidHTML(descriptionText) ? (
          <HTML htmlString={descriptionText} />
        ) : (
          getDescriptionTextMarkup(descriptionText, extraDescriptionButtonText)
        )}
      </GridColumn>
    )}
    {size(homeHighlights) > 0 && (
      <Fragment>
        <GridColumn width={12}>
          <Subheading>{homeHighlightsHeadingText}</Subheading>
        </GridColumn>
        <GridColumn width={12}>
          {homeHighlights.map(({ iconName, text }) => (
            <Icon
              hasBorder
              key={buildKeyFromStrings(text)}
              labelText={text}
              name={iconName}
            />
          ))}
        </GridColumn>
      </Fragment>
    )}
  </Grid>
);

Component.displayName = 'Description';

Component.defaultProps = {
  descriptionText: null,
  homeHighlightsHeadingText: HOME_HIGHLIGHTS,
  extraDescriptionButtonText: VIEW_MORE,
};

Component.propTypes = {
  /** The description text to display. Long text will be partially displayed in a modal. HTML strings of any length will be respected. */
  descriptionText: PropTypes.string,
  /** The text for the button that opens the extra description modal. */
  extraDescriptionButtonText: PropTypes.string,
  /** The home highlights to display. */
  homeHighlights: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The name of the icon to display.
       * [See Semantic UI for the full list.](https://react.semantic-ui.com/elements/Icon)
       */
      iconName: PropTypes.string,
      /** A visible label to display. */
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** The heading displayed above the home highlights. */
  homeHighlightsHeadingText: PropTypes.string,
  /** The main characteristics to display. Maximum four. */
  propertyMainCharacteristics: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The name of the icon to display.
       * [See here for the full list of valid icon names](https://github.com/lodgify/lodgify-ui/blob/master/src/components/elements/Icon/constants.js)
       */
      iconName: PropTypes.string.isRequired,
      /** A visible label to display for the key fact. */
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** The name of the property to display. */
  propertyName: PropTypes.string.isRequired,
  /** The name of the type of the property to display. */
  propertyType: PropTypes.string.isRequired,
};
