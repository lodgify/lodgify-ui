import React from 'react';

import * as logo from './logo.png';

export const component = ({ hasNoMargin }) => (
  <img
    src={logo.default}
    style={{ height: 100, marginLeft: hasNoMargin ? 0 : 20 }}
  />
);
