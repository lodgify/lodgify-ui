import React, { Fragment } from 'react';

import { Heading } from 'typography/Heading';
import { Rating } from 'elements/Rating';

/**
 * @param  {string} propertyName
 * @param  {number} ratingNumber
 * @return {Object}
 */
export const getGalleryHeadingMarkup = (propertyName, ratingNumber) =>
  propertyName && (
    <Fragment>
      <Heading>{propertyName}</Heading>
      {ratingNumber && <Rating ratingNumber={ratingNumber} />}
    </Fragment>
  );
