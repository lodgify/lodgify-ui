import React, { Children } from 'react';
import { Form } from 'semantic-ui-react';

import { getClonedInput } from './getClonedInput';

/**
 * @typedef {Object} null
 * @param  {boolean|string|null}  child
 * @param  {Object}                 parent
 * @return {boolean|null}
 */
export const getFormChild = (child, parent) => {
  if (!child) return child;

  if (typeof child === 'string') {
    return React.createElement(Form.Field, { children: child });
  }

  if (child.type === Form.Group) {
    return React.cloneElement(child, {
      children: Children.map(child.props.children, nestedChild =>
        getFormChild(nestedChild, parent)
      ),
      widths: 'equal',
    });
  }

  return getClonedInput(child, parent);
};
