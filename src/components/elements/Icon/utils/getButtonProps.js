/**
 * @param  {boolean} isButton
 * @return {Object}
 */
export const getButtonProps = isButton =>
  isButton
    ? {
        role: 'button',
        tabIndex: 0,
      }
    : {};
