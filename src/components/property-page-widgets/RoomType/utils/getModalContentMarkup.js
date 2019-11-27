import React from 'react';
import { Modal, List } from 'semantic-ui-react';
import isValidHTML from 'is-html';

import { size } from 'utils/size';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Amenities } from 'property-page-widgets/Amenities';
import { Divider } from 'elements/Divider';
import { Paragraph } from 'typography/Paragraph';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { Rating } from 'elements/Rating';
import { Slideshow } from 'media/Slideshow';
import { HTML } from 'general-widgets/HTML';
import { getParagraphMarkup } from 'utils/get-paragraph-markup';

/**
 * @param  {Object[]}    amenities
 * @param  {string}      amenitiesConjunctionText
 * @param  {string}      amenitiesHeadingText
 * @param  {string}      description
 * @param  {Object[]}    extraFeatures
 * @param  {Object[]}    features
 * @param  {string}      name
 * @param  {string}      periodText
 * @param  {string}      pricePerPeriod
 * @param  {string}      pricePerPeriodPrefix
 * @param  {number}      ratingNumber
 * @param  {Object[]}    images
 * @param  {boolean}     isUserOnMobile
 * @return {Object}
 */
export const getModalContentMarkup = (
  amenities,
  amenitiesConjunctionText,
  amenitiesHeadingText,
  description,
  extraFeatures,
  features,
  name,
  periodText,
  pricePerPeriod,
  pricePerPeriodPrefix,
  ratingNumber,
  images,
  isUserOnMobile
) => (
  <Modal.Content className="has-room-type-gallery">
    <Heading>{name}</Heading>
    {!!ratingNumber && <Rating ratingNumber={ratingNumber} />}
    <Divider size="small" />
    <Slideshow
      images={images}
      isShowingBulletNavigation={size(images) > 1}
    />
    {!!description ? (
      <Grid>
        <GridColumn>
          {isValidHTML(description) ? (
            <HTML htmlString={description} />
          ) : (
            getParagraphMarkup(description)
          )}
        </GridColumn>
      </Grid>
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
    {!!size(amenities) && (
      <Amenities
        amenities={amenities}
        amenitiesConjunctionText={amenitiesConjunctionText}
        headingText={amenitiesHeadingText}
        isStacked={isUserOnMobile}
      />
    )}
    <Grid>
      <GridColumn verticalAlignContent="bottom" width={12}>
        <Paragraph>
          {`${pricePerPeriodPrefix}`}
          <strong>{` ${pricePerPeriod} `}</strong>
          {`${periodText}`}
        </Paragraph>
      </GridColumn>
    </Grid>
  </Modal.Content>
);
