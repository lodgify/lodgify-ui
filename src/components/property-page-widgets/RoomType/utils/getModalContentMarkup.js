import React from 'react';
import { Modal, Rating, List } from 'semantic-ui-react';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Amenities } from 'property-page-widgets/Amenities';
import { Divider } from 'elements/Divider';
import { Paragraph } from 'typography/Paragraph';
import { Button } from 'elements/Button';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { Slideshow } from 'media/Slideshow';

/**
 * @param  {Object[]}    amenities
 * @param  {Function}    onClickCheckAvailability
 * @param  {string}      description
 * @param  {Object[]}    extraFeatures
 * @param  {Object[]}    features
 * @param  {string}      name
 * @param  {string}      nightPrice
 * @param  {number}      ratingNumber
 * @param  {Object[]}    slideShowImages
 * @return {Object}
 */
export const getModalContentMarkup = (
  amenities,
  onClickCheckAvailability,
  description,
  extraFeatures,
  features,
  name,
  nightPrice,
  ratingNumber,
  slideShowImages
) => (
  <Modal.Content>
    <Heading>{name}</Heading>
    <Rating
      disabled
      maxRating={5}
      rating={Math.round(ratingNumber)}
      size="small"
    />
    <span>{Math.round(ratingNumber)}</span>
    <Divider size="small" />
    <Slideshow additionalClass="no-shadow" images={slideShowImages} />
    <Paragraph>{description}</Paragraph>
    <List horizontal>
      {[...features, ...extraFeatures].map(({ labelText }, index) => (
        <List.Item key={buildKeyFromStrings(index, labelText, 'feature')}>
          <Paragraph weight="heavy">{labelText}</Paragraph>
        </List.Item>
      ))}
    </List>
    <Divider hasLine />
    <Amenities amenities={amenities} headingText="Room Amenities" />
    <Grid>
      <GridColumn verticalAlignContent="bottom" width={6}>
        <Paragraph>
          from
          <strong>{` ${nightPrice} `}</strong>
          /night
        </Paragraph>
      </GridColumn>
      <GridColumn verticalAlignContent="bottom" width={6}>
        <Button isPositionedRight isRounded onClick={onClickCheckAvailability}>
          Check Availability
        </Button>
      </GridColumn>
    </Grid>
  </Modal.Content>
);
