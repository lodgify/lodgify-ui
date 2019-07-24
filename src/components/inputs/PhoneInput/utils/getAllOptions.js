import React, { Fragment } from 'react';

import { getIconOrFlag } from './getIconOrFlag';
import { getDiallingCode } from './getDiallingCode';

const optionCache = {};

/**
 * @param  {Object[]} options
 * @return {Object[]}
 */
export const getAllOptions = options =>
  options.map(({ value, label }) => {
    if (!optionCache[label]) {
      const iconOrFlag = getIconOrFlag(value);

      optionCache[label] = {
        name: label,
        text: iconOrFlag,
        value,
        content: (
          <Fragment>
            {iconOrFlag}
            {`${label} ${getDiallingCode(value)}`}
          </Fragment>
        ),
      };
    }

    return optionCache[label];
  });
