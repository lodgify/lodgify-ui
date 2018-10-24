import React from 'react';
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';

import { Heading } from 'typography/Heading';

/**
 * @param  {string} logoSrc
 * @param  {string} logoText
 * @return {Object}
 */
export const getLogoMarkup = (logoSrc, logoText) => (
  <Menu.Item href="/" link>
    {logoSrc ? (
      <Image alt={logoText} src={logoSrc} />
    ) : (
      <Heading size="small">{logoText}</Heading>
    )}
  </Menu.Item>
);
