import React from 'react';
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';

/**
 * @param  {string} text
 * @param  {string} href
 * @param  {number} index
 * @param  {number} activeNavigationItemIndex
 * @return {Object}
 */
export const getLinkMarkup = (text, href, index, activeNavigationItemIndex) => (
  <Menu.Item
    active={index === activeNavigationItemIndex}
    href={href}
    key={buildKeyFromStrings(text, index)}
    link
  >
    {text}
  </Menu.Item>
);
