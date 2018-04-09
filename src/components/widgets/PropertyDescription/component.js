import React from 'react';
import PropTypes from 'prop-types';

import { getUniqueKey } from 'lib/get-unique-key';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Paragraph } from 'typography/Paragraph';
import { Link } from 'elements/Link';
import { Icon } from 'elements/Icon';
import { Modal } from 'elements/Modal';

import { getParagraphsFromStrings } from './utils/getParagraphsFromStrings';
import { getFirstFourItems } from './utils/getFirstFourItems';

/**
 * The standard widget for displaying the description of a property.
 * @returns {Object}
 */
export const Component = ({
  descriptionText,
  extraDescriptionText,
  icons,
  propertyType,
  width,
}) => (
  <GridColumn width={width}>
    <Grid>
      <GridColumn width={7}>
        <Paragraph size="tiny">{propertyType}</Paragraph>
        {getParagraphsFromStrings(descriptionText).map((paragraphText, i) => (
          <Paragraph key={getUniqueKey(paragraphText, i)}>
            {paragraphText}
          </Paragraph>
        ))}
      </GridColumn>
      <GridColumn verticalAlignContent="middle" width={5}>
        <Grid areColumnsCentered>
          {getFirstFourItems(icons).map(({ iconName, label }, i) => (
            <GridColumn key={getUniqueKey(label, i)} width={5}>
              <Icon label={label} name={iconName} />
            </GridColumn>
          ))}
        </Grid>
      </GridColumn>
      {!!extraDescriptionText && (
        <GridColumn width={12}>
          <Modal trigger={<Link>View more</Link>}>
            {getParagraphsFromStrings(
              descriptionText,
              extraDescriptionText
            ).map((paragraphText, i) => (
              <Paragraph key={getUniqueKey(paragraphText, i)}>
                {paragraphText}
              </Paragraph>
            ))}
          </Modal>
        </GridColumn>
      )}
    </Grid>
  </GridColumn>
);

Component.displayName = 'PropertyDescription';

Component.defaultProps = {
  extraDescriptionText: null,
  width: 12,
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
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** The name of the type of the property. */
  propertyType: PropTypes.string.isRequired,
  /** The number of columns the widget occupies. */
  width: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
};
