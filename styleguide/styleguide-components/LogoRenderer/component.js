import React from 'react';

import { getIsDevelopmentServer } from '../utils/getIsDevelopmentServer';

import logo from './logo.png';

export const component = ({ hasNoMargin }) => (
  <a href={getIsDevelopmentServer() ? '/' : '/lodgify-ui/'}>
    <img
      alt="Lodgify UI"
      src={logo}
      style={{ display: 'block', margin: `0${hasNoMargin ? '' : ' auto'}`, width: '110px', }}
    />
  </a>
);
