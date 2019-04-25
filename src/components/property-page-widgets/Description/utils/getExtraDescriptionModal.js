import React from 'react';
import { Button } from 'semantic-ui-react';

import { Modal } from 'elements/Modal';

/**
 * @param  {string|Object} extraDescription
 * @param  {string} extraDescriptionButtonText
 * @return {Object}
 */
export const getExtraDescriptionModal = (
  extraDescription,
  extraDescriptionButtonText
) => (
  <Modal
    hasPadding
    trigger={<Button basic>{extraDescriptionButtonText}</Button>}
  >
    {extraDescription}
  </Modal>
);
