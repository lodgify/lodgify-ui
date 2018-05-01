import React from 'react';

import * as logo from './logo.png';

export const component = ({ hasNoMargin }) => (
  <a href="/">
    <img
      src={logo.default}
      style={{ display: 'block', margin: `0${hasNoMargin ? '' : ' auto'}`, width: '110px', }}
    />
  </a>
);
