import React from 'react';
import { Modal } from 'semantic-ui-react';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Amenities } from 'property-page-widgets/Amenities';
import { Divider } from 'elements/Divider';
import { Paragraph } from 'typography/Paragraph';
import { Button } from 'elements/Button';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { Slideshow } from 'media/Slideshow';

import { getRatingMarkup } from './getRatingMarkup';

/**
 * @param  {Object[]} amenities
 * @param  {Function} onClickCheckAvailability
 * @param  {String} description
 * @param  {Object[]} extraFeatures
 * @param  {Object[]} features
 * @param  {String} name
 * @param  {String} nightPrice
 * @param  {Number} ratingNumber
 * @param  {Object[]} slideShowImages
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
    {getRatingMarkup(ratingNumber)}
    <Divider />
    <Slideshow additionalClass="no-shadow" images={slideShowImages} />
    <Paragraph>{description}</Paragraph>
    <Grid columns={4} stackable>
      {[...features, ...extraFeatures].map(({ labelText }, index) => (
        <GridColumn key={buildKeyFromStrings(index, labelText, 'feature')}>
          <Paragraph weight="heavy">{labelText}</Paragraph>
        </GridColumn>
      ))}
    </Grid>
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
