import React, { Fragment } from 'react';

import { TextPlaceholder } from 'elements/TextPlaceholder';
import { Divider } from 'elements/Divider';

/**
 * @return {Object}
 */
export const getCurrencyDropdownPlaceholderMarkup = () => (
  <Fragment>
    <TextPlaceholder length="full" />
    <TextPlaceholder length="full" />
    <Divider />
  </Fragment>
);
