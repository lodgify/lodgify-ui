import React from 'react';
import { Menu } from 'semantic-ui-react';

import { ResponsiveImage } from 'media/ResponsiveImage';
import { Heading } from 'typography/Heading';

/**
 * @param  {string} logoText
 * @param  {string} logoSrc
 * @param  {string} logoSizes
 * @param  {string} logoSrcSet
 * @return {Object}
 */
export const getLogoMarkup = (logoText, logoSrc, logoSizes, logoSrcSet) => (
  <Menu.Item href="/" link>
    {logoSrc ? (
      <ResponsiveImage
        alt={logoText}
        imageUrl={logoSrc}
        sizes={logoSizes}
        srcSet={logoSrcSet}
      />
    ) : (
      <Heading size="small">{logoText}</Heading>
    )}
  </Menu.Item>
);
