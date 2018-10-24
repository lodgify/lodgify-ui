import React from 'react';
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';

/**
 * @param  {Object} item
 * @param  {String} item.href
 * @param  {String} item.text
 * @param  {Number} index
 * @return {Object}
 */
// eslint-disable-next-line react/prop-types
export const getMenuItemMarkup = ({ href, text }, index) => (
  <Menu.Item href={href} key={buildKeyFromStrings(text, index)} link>
    {text}
  </Menu.Item>
);
