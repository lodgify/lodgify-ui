import React from 'react';

import { Checkbox } from '../Checkbox';

/**
 * A toogle shows an on or off choice.
 * @param  {Object} props
 * @return {Object}
 * */
export const Component = props => <Checkbox isToggle {...props} />;

Component.displayName = 'Toggle';
