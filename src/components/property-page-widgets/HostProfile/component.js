import React from 'react';
import PropTypes from 'prop-types';
import { List, Item } from 'semantic-ui-react';

import {
  CONTACT_INFORMATION,
  EMAIL,
  LANGUAGES,
  PHONE,
  YOUR_HOST,
} from 'utils/default-strings';
import { Heading } from 'typography/Heading';
import { Grid } from 'layout/Grid';
import { GridRow } from 'layout/GridRow';
import { GridColumn } from 'layout/GridColumn';
import { Paragraph } from 'typography/Paragraph';
import { VerticalGutters } from 'layout/VerticalGutters';

import { getStringWithColonSuffix } from './utils/getStringWithColonSuffix';

/**
 * The standard widget for displaying the property host information.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  avatarUrl,
  contactInformationHeadingText,
  description,
  email,
  emailLabel,
  headingText,
  languages,
  languagesLabel,
  name,
  phone,
  phoneLabel,
}) => (
  <VerticalGutters>
    <Grid textAlign="left">
      <GridRow>
        <GridColumn width={12}>
          <Heading>{headingText}</Heading>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn width={12}>
          <Item.Group unstackable>
            <Item>
              <Item.Image avatar size="tiny" src={avatarUrl} />
              <Item.Header as="h4" verticalAlign="middle">
                {name}
              </Item.Header>
            </Item>
          </Item.Group>
        </GridColumn>
      </GridRow>
      <GridRow verticalAlign="top">
        <GridColumn computer={7} mobile={12} tablet={12}>
          <Paragraph size="medium">{description}</Paragraph>
        </GridColumn>
        <GridColumn computer={5} mobile={12} tablet={12}>
          <Heading size="small">{contactInformationHeadingText}</Heading>
          <List relaxed size="medium">
            {!!email && (
              <List.Item>
                <span>{getStringWithColonSuffix(emailLabel)}</span>
                <span>{email}</span>
              </List.Item>
            )}
            {!!phone && (
              <List.Item>
                <span>{getStringWithColonSuffix(phoneLabel)}</span>
                <span>{phone}</span>
              </List.Item>
            )}
            {!!languages && (
              <List.Item>
                <span>{getStringWithColonSuffix(languagesLabel)}</span>
                <span>{languages.join(', ')}</span>
              </List.Item>
            )}
          </List>
        </GridColumn>
      </GridRow>
    </Grid>
  </VerticalGutters>
);

Component.displayName = 'HostProfile';

Component.defaultProps = {
  avatarUrl: null,
  contactInformationHeadingText: CONTACT_INFORMATION,
  email: null,
  emailLabel: EMAIL,
  headingText: YOUR_HOST,
  languages: null,
  languagesLabel: LANGUAGES,
  phone: null,
  phoneLabel: PHONE,
};

Component.propTypes = {
  /** The url pointing to a picture of the property host. */
  avatarUrl: PropTypes.string,
  /** The text for the contact information heading. */
  contactInformationHeadingText: PropTypes.string,
  /** The description of the property host. */
  description: PropTypes.string.isRequired,
  /** The email of the property host. */
  email: PropTypes.string,
  /** The label for the contact email address. */
  emailLabel: PropTypes.string,
  /** The text to display as a heading at the top of the widget. */
  headingText: PropTypes.string,
  /** The languages the property host speaks. */
  languages: PropTypes.arrayOf(PropTypes.string),
  /** The label for the contact languages. */
  languagesLabel: PropTypes.string,
  /** The name of the property host. */
  name: PropTypes.string.isRequired,
  /** The phone number of the property host. */
  phone: PropTypes.string,
  /** The label for the contact phone number. */
  phoneLabel: PropTypes.string,
};
