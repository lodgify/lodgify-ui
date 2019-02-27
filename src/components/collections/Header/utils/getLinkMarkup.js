import React from 'react';
import { Menu } from 'semantic-ui-react';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';

/**
 * @param  {string} text
 * @param  {string} href
 * @param  {string} target
 * @param  {number} index
 * @param  {number} activeNavigationItemIndex
 * @return {Object}
 */
export const getLinkMarkup = (
  text,
  href,
  target,
  index,
  activeNavigationItemIndex
) => (
  <Menu.Item
    active={index === activeNavigationItemIndex}
    href={href}
    key={buildKeyFromStrings(text, index)}
    link
    target={target}
  >
    {text}
  </Menu.Item>
);
