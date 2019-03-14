import React from 'react';

/**
 * @typedef {Object} null
 * @param   {Function|string} lazyComponent
 * @param   {boolean}         shouldRender
 * @param   {Object}          componentToRenderProps
 * @param   {Object}          lazyProps
 * @return  {Function|string|null}
 */
export const getComponentToRender = (
  lazyComponent,
  shouldRender,
  componentToRenderProps,
  lazyProps
) =>
  lazyProps !== undefined || shouldRender
    ? React.createElement(lazyComponent, componentToRenderProps)
    : null;
