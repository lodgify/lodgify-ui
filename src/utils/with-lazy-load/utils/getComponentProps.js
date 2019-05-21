/**
 * @param  {Object} props
 * @param  {string[]} propKeys
 * @return {Object}
 */
export const getComponentProps = (props, propKeys) =>
  !!propKeys
    ? Object.keys(props).reduce((previousValue, currentValue) => {
        if (propKeys.some(key => key === currentValue)) return previousValue;

        return {
          ...previousValue,
          [currentValue]: props[currentValue],
        };
      }, {})
    : props;
