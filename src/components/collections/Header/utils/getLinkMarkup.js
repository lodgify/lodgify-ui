import React from 'react';
import { Menu } from 'semantic-ui-react';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';

/**
 * @param  {String} text
 * @param  {String} href
 * @param  {Number} index
 * @param  {Number} activeNavigationItemIndex
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
