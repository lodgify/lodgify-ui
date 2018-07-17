import React from 'react';
import PropTypes from 'prop-types';

import { getParagraphsFromStrings } from 'utils/get-paragraphs-from-strings';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { getFirstFourItems } from 'utils/get-first-four-items';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Subheading } from 'typography/Subheading';
import { Paragraph } from 'typography/Paragraph';
import { Link } from 'elements/Link';
import { Icon } from 'elements/Icon';
import { Modal } from 'elements/Modal';

/**
 * The standard widget for displaying the description of a property.
 * @returns {Object}
 */
export const Component = ({
  descriptionText,
  extraDescriptionText,
  icons,
  propertyType,
}) => (
  <Grid stackable>
    <GridColumn computer={7} tablet={12}>
      <Subheading>{propertyType}</Subheading>
      {getParagraphsFromStrings(descriptionText).map((paragraphText, index) => (
        <Paragraph key={buildKeyFromStrings(paragraphText, index)}>
          {paragraphText}
        </Paragraph>
      ))}
      {!!extraDescriptionText && (
        <Modal trigger={<Link>View more</Link>}>
          {getParagraphsFromStrings(descriptionText, extraDescriptionText).map(
            (paragraphText, index) => (
              <Paragraph key={buildKeyFromStrings(paragraphText, index)}>
                {paragraphText}
              </Paragraph>
            )
          )}
        </Modal>
      )}
    </GridColumn>
    <GridColumn computer={5} tablet={12} verticalAlignContent="middle">
      <Grid>
        {getFirstFourItems(icons).map(({ iconName, labelText }, index) => (
          <GridColumn key={buildKeyFromStrings(labelText, index)} width={6}>
            <Icon labelText={labelText} name={iconName} />
          </GridColumn>
        ))}
      </Grid>
    </GridColumn>
  </Grid>
);

Component.displayName = 'Description';

Component.defaultProps = {
  extraDescriptionText: null,
};

Component.propTypes = {
  /** The description text to display. */
  descriptionText: PropTypes.string.isRequired,
  /** Extra text to display in a modal. */
  extraDescriptionText: PropTypes.string,
  /** The icons to display. Maximum four. */
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The name of the icon to display.
       * [See Semantic UI for the full list.](https://react.semantic-ui.com/elements/Icon)
       */
      iconName: PropTypes.string.isRequired,
      /** A visible label to display for the key fact. */
      labelText: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** The name of the type of the property. */
  propertyType: PropTypes.string.isRequired,
};
