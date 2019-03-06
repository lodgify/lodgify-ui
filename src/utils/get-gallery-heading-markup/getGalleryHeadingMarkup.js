import React from 'react';

import { Heading } from 'typography/Heading';
import { Rating } from 'elements/Rating';

/**
 * @param  {string} propertyName
 * @param  {number} ratingNumber
 * @return {Object}
 */
export const getGalleryHeadingMarkup = (propertyName, ratingNumber) =>
  propertyName && (
    <div className="heading-with-rating">
      <Heading>{propertyName}</Heading>
      {ratingNumber > 0 && <Rating ratingNumber={ratingNumber} />}
    </div>
  );
