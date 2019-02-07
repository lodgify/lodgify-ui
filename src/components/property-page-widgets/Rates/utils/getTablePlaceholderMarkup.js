import React, { Fragment } from 'react';

import { TextPlaceholder } from 'elements/TextPlaceholder';
import { Divider } from 'elements/Divider';
import { BlockPlaceholder } from 'elements/BlockPlaceholder';

/**
 * @return {Object}
 */
export const getTablePlaceholderMarkup = () => (
  <Fragment>
    <TextPlaceholder length="full" />
    <TextPlaceholder length="full" />
    <Divider />
    <BlockPlaceholder />
    <Divider />
    <BlockPlaceholder />
    <Divider />
    <BlockPlaceholder />
    <Divider />
  </Fragment>
);
