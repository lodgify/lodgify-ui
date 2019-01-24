import React from 'react';
import { Item, Image } from 'semantic-ui-react';

import { Heading } from 'typography/Heading';

/**
 * @param  {string} logoText
 * @param  {string} logoSrc
 * @param  {string} logoSizes
 * @param  {string} logoSrcSet
 * @return {Object}
 */
export const getLogoMarkup = (logoText, logoSrc, logoSizes, logoSrcSet) => (
  <Item href="/">
    {logoSrc ? (
      <Image
        alt={logoText}
        sizes={logoSizes}
        src={logoSrc}
        srcSet={logoSrcSet}
      />
    ) : (
      <Heading size="small">{logoText}</Heading>
    )}
  </Item>
);
