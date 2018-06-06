import React from 'react';
import PropTypes from 'prop-types';
import { List, Item } from 'semantic-ui-react';

import { Heading } from 'typography/Heading';
import { Grid } from 'layout/Grid';
import { GridRow } from 'layout/GridRow';
import { GridColumn } from 'layout/GridColumn';
import { Paragraph } from 'typography/Paragraph';

/**
 * The standard widget for displaying the property host information.
 * @returns {Object}
 */
export const Component = ({
  avatarUrl,
  name,
  description,
  email,
  phone,
  languages,
}) => (
  <Grid textAlign="left">
    <GridRow>
      <GridColumn width={12}>
        <Heading>Your Host</Heading>
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
        <Heading size="small">Contact Information</Heading>
        <List relaxed size="medium">
          {!!email && (
            <List.Item>
              <span>Email: </span>
              <span>{email}</span>
            </List.Item>
          )}
          {!!phone && (
            <List.Item>
              <span>Phone: </span>
              <span>{phone}</span>
            </List.Item>
          )}
          {!!languages && (
            <List.Item>
              <span>Languages: </span>
              <span>{languages.join(', ')}</span>
            </List.Item>
          )}
        </List>
      </GridColumn>
    </GridRow>
  </Grid>
);

Component.displayName = 'HostProfile';

Component.defaultProps = {
  avatarUrl: null,
  email: null,
  phone: null,
  languages: null,
};

Component.propTypes = {
  /** A url pointing to a picture of the property host */
  avatarUrl: PropTypes.string,
  /** The description of the property host. */
  description: PropTypes.string.isRequired,
  /** The email of the property host. */
  email: PropTypes.string,
  /** The languages the property host speaks. */
  languages: PropTypes.arrayOf(PropTypes.string),
  /** The name of the property host. */
  name: PropTypes.string.isRequired,
  /** The phone number of the property host. */
  phone: PropTypes.string,
};
