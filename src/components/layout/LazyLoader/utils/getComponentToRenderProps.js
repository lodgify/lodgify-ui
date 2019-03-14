/**
 * @param  {boolean} shouldRender
 * @param  {Object}  componentProps
 * @param  {Object}  lazyProps
 * @return {Object}
 */
export const getComponentToRenderProps = (
  shouldRender,
  componentProps,
  lazyProps
) =>
  componentProps !== undefined && shouldRender
    ? {
        ...lazyProps,
        ...componentProps,
      }
    : componentProps;
