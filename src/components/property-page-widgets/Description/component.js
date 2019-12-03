import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import isValidHTML from 'is-html';

import { size } from 'utils/size';
import { HOME_HIGHLIGHTS, VIEW_MORE } from 'utils/default-strings';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { Icon } from 'elements/Icon';
import { Subheading } from 'typography/Subheading';
import { MultiParagraph } from 'typography/MultiParagraph';
import { Characteristics } from 'collections/Characteristics';

/**
 * The standard widget for displaying the description of a property.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  id,
  descriptionText,
  extraDescriptionButtonText,
  homeHighlights,
  homeHighlightsHeadingText,
  mainCharacteristics,
  propertyName,
  propertyType,
}) => (
  <Grid columns={1} id={id}>
    <GridColumn width={12}>
      <Subheading>{propertyType}</Subheading>
      <Heading size="large">{propertyName}</Heading>
    </GridColumn>
    {!!size(mainCharacteristics) && (
      <Characteristics spaceCharacteristics={mainCharacteristics} />
    )}
    {descriptionText && (
      <GridColumn width={12}>
        <MultiParagraph
          content={descriptionText}
          isHtml={isValidHTML(descriptionText)}
          showMoreLabel={extraDescriptionButtonText}
        />
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
  id: null,
  descriptionText: null,
  homeHighlightsHeadingText: HOME_HIGHLIGHTS,
  mainCharacteristics: [],
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
  /** The html id of the container dom element. */
  id: PropTypes.string,
  /** The main characteristics to display. Maximum four. */
  mainCharacteristics: PropTypes.arrayOf(
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
  /** The name of the property to display. */
  propertyName: PropTypes.string.isRequired,
  /** The name of the type of the property to display. */
  propertyType: PropTypes.string.isRequired,
};
