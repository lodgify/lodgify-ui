import 'semantic-ui-styles/menu.less';
import React from 'react';
import { Menu } from 'semantic-ui-react';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';

/**
 * @param  {Object} item
 * @param  {String} item.href
 * @param  {String} item.text
 * @param  {Number} index
 * @return {Object}
 */
// eslint-disable-next-line react/prop-types
export const getMenuItemMarkup = ({ href, text, target }, index) => (
  <Menu.Item
    href={href}
    key={buildKeyFromStrings(text, index)}
    link
    target={target}
  >
    {text}
  </Menu.Item>
);
