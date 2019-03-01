import React from 'react';
import { Menu, Image } from 'semantic-ui-react';

import { Heading } from 'typography/Heading';

/**
 * @param  {string} logoHref
 * @param  {string} logoText
 * @param  {string} logoSrc
 * @param  {string} logoSizes
 * @param  {string} logoSrcSet
 * @return {Object}
 */
export const getLogoMarkup = (
  logoHref,
  logoText,
  logoSrc,
  logoSizes,
  logoSrcSet
) => (
  <Menu.Item href={logoHref} link>
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
  </Menu.Item>
);
