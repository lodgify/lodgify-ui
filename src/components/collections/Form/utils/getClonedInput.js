import React from 'react';
import { Form } from 'semantic-ui-react';

import { getInputWidth } from './getInputWidth';

/**
 * @param  {Object} input
 * @param  {Object} parent
 * @return {Object}
 */
export const getClonedInput = (input, parent) =>
  React.createElement(Form.Field, {
    children: React.cloneElement(input, {
      onBlur: () => parent.handleInputBlur(input.props.name),
      onChange: (name, value) => {
        parent.handleInputChange(name, value);
        input.props.onChange && input.props.onChange(name, value);
      },
      ...parent.state[input.props.name],
    }),
    width: getInputWidth(input),
  });
