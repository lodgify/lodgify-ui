import React from 'react';
import { Modal, List } from 'semantic-ui-react';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Amenities } from 'property-page-widgets/Amenities';
import { Divider } from 'elements/Divider';
import { Paragraph } from 'typography/Paragraph';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { Rating } from 'elements/Rating';
import { Slideshow } from 'media/Slideshow';

/**
 * @param  {Object[]}    amenities
 * @param  {string}      description
 * @param  {Object[]}    extraFeatures
 * @param  {Object[]}    features
 * @param  {string}      name
 * @param  {string}      nightPrice
 * @param  {number}      ratingNumber
 * @param  {Object[]}    slideShowImages
 * @param  {boolean}     isUserOnMobile
 * @return {Object}
 */
export const getModalContentMarkup = (
  amenities,
  description,
  extraFeatures,
  features,
  name,
  nightPrice,
  ratingNumber,
  slideShowImages,
  isUserOnMobile
) => (
  <Modal.Content>
    <Heading>{name}</Heading>
    {!!ratingNumber && <Rating ratingNumber={ratingNumber} />}
    <Divider size="small" />
    <Slideshow additionalClass="no-shadow" images={slideShowImages} />
    {!!description ? (
      <Paragraph>{description}</Paragraph>
    ) : (
      <Divider size="small" />
    )}
    <List horizontal>
      {[...features, ...extraFeatures].map(({ labelText }, index) => (
        <List.Item key={buildKeyFromStrings(index, labelText, 'feature')}>
          <Paragraph weight="heavy">{labelText}</Paragraph>
        </List.Item>
      ))}
    </List>
    <Divider hasLine />
    <Amenities
      amenities={amenities}
      headingText="Room Amenities"
      isStacked={isUserOnMobile}
    />
    <Grid>
      <GridColumn verticalAlignContent="bottom" width={12}>
        <Paragraph>
          from
          <strong>{` ${nightPrice} `}</strong>
          /night
        </Paragraph>
      </GridColumn>
    </Grid>
  </Modal.Content>
);
