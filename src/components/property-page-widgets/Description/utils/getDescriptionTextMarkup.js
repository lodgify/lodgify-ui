import React, { Fragment } from 'react';
import { Button } from 'semantic-ui-react';

import { Modal } from 'elements/Modal';
import { getParagraphMarkup } from 'utils/get-paragraph-markup';

/**
 * @param  {string} descriptionText
 * @param  {string} extraDescriptionButtonText
 * @return {Object}
 */
export const getDescriptionTextMarkup = (
  descriptionText,
  extraDescriptionButtonText
) => {
  const descriptionArray = descriptionText.split(' ');

  return descriptionArray.length > 100 ? (
    <Fragment>
      {getParagraphMarkup(`${descriptionArray.slice(0, 100).join(' ')}...`)}
      <Modal
        hasPadding
        trigger={<Button basic>{extraDescriptionButtonText}</Button>}
      >
        {getParagraphMarkup(descriptionText)}
      </Modal>
    </Fragment>
  ) : (
    getParagraphMarkup(descriptionText)
  );
};
