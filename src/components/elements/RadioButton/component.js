import React from 'react';

import { Checkbox } from '../Checkbox';

/**
 * A radio button allows a user to select a value from a small set of options, often binary.
 * @param  {Object} props
 * @return {Object}
 * */
export const Component = props => <Checkbox isRadioButton {...props} />;

Component.displayName = 'RadioButton';
