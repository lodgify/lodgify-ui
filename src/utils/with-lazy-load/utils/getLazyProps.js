/**
 * @param  {Object} props
 * @param  {string[]} propKeys
 * @return {Object}
 */
export const getLazyProps = (props, propKeys) =>
  !!propKeys
    ? propKeys.reduce((previousValue, currentValue) => {
        return {
          ...previousValue,
          [currentValue]: props[currentValue],
        };
      }, {})
    : {};
