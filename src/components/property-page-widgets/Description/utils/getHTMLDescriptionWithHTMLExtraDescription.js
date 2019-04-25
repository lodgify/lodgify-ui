import React, { Fragment } from 'react';

import { HTML } from 'general-widgets/HTML';

import { getExtraDescriptionModal } from './getExtraDescriptionModal';

/**
 * @param  {string} descriptionText
 * @param  {string} extraDescriptionText
 * @param  {string} extraDescriptionButtonText
 * @return {Object}
 */
export const getHTMLDescriptionWithHTMLExtraDescription = (
  descriptionText,
  extraDescriptionText,
  extraDescriptionButtonText
) => (
  <Fragment>
    <HTML htmlString={descriptionText} />
    {getExtraDescriptionModal(
      <HTML htmlString={extraDescriptionText} />,
      extraDescriptionButtonText
    )}
  </Fragment>
);
