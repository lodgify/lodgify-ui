import React from 'react';
import PropTypes from 'prop-types';
import List from 'semantic-ui-react/dist/commonjs/elements/List';

import { HOME_HIGHLIGHTS } from 'utils/default-strings';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { getFirstFourItems } from 'utils/get-first-four-items';
import { getParagraphsFromStrings } from 'utils/get-paragraphs-from-strings';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { Icon } from 'elements/Icon';
import { Paragraph } from 'typography/Paragraph';
import { Subheading } from 'typography/Subheading';
import { ShowOnDesktop } from 'layout/ShowOnDesktop';
import { ShowOnMobile } from 'layout/ShowOnMobile';

import { formatParagraphWithModal } from './utils/formatParagraphWithModal';
import { isDescriptionDisplayingWithEllipsis } from './utils/isDescriptionDisplayingWithEllipsis';

/**
 * The standard widget for displaying the description of a property.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  descriptionText,
  extraDescriptionText,
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
      <ShowOnDesktop parent={List} parentProps={{ horizontal: true }}>
        {getFirstFourItems(propertyMainCharacteristics).map(
          ({ iconName, text }, index) => (
            <List.Item key={buildKeyFromStrings(text, index)}>
              <Icon labelText={text} name={iconName} />
            </List.Item>
          )
        )}
      </ShowOnDesktop>
      <ShowOnMobile parent={Grid} parentProps={{ columns: 1 }}>
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
      </ShowOnMobile>
    </GridColumn>
    <GridColumn width={12}>
      {getParagraphsFromStrings(descriptionText).map(
        (paragraphText, index, descriptionTextArray) => (
          <Paragraph key={buildKeyFromStrings(paragraphText, index)}>
            {isDescriptionDisplayingWithEllipsis(
              index,
              descriptionTextArray,
              extraDescriptionText
            )
              ? formatParagraphWithModal(
                  paragraphText,
                  descriptionText,
                  extraDescriptionText
                )
              : paragraphText}
          </Paragraph>
        )
      )}
    </GridColumn>
    <GridColumn width={12}>
      <Subheading>{homeHighlightsHeadingText}</Subheading>
    </GridColumn>
    <GridColumn width={12}>
      {homeHighlights.map(({ iconName, text }) => (
        <Icon
          hasBorder
          key={buildKeyFromStrings(iconName, text)}
          labelText={text}
          name={iconName}
        />
      ))}
    </GridColumn>
  </Grid>
);

Component.displayName = 'Description';

Component.defaultProps = {
  extraDescriptionText: null,
  homeHighlightsHeadingText: HOME_HIGHLIGHTS,
};

Component.propTypes = {
  /** The description text to display. */
  descriptionText: PropTypes.string.isRequired,
  /** Extra text to display in a modal. */
  extraDescriptionText: PropTypes.string,
  /** The home highlights to display. */
  homeHighlights: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The name of the icon to display.
       * [See Semantic UI for the full list.](https://react.semantic-ui.com/elements/Icon)
       */
      iconName: PropTypes.string,
      /** A visible label to display. */
      text: PropTypes.string,
    })
  ).isRequired,
  /** The heading displayed above the home highlights. */
  homeHighlightsHeadingText: PropTypes.string,
  /** The main characteristics to display. Maximum four. */
  propertyMainCharacteristics: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The name of the icon to display.
       * [See here for the full list of valid icon names](https://github.com/lodgify/lodgify-ui/blob/production/src/components/elements/Icon/constants.js)
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
