import { getDefaultValue } from './getDefaultValue';
import { getValue } from './getValue';

/**
 * @param  {Object}   props
 * @param  {string}   props.children
 * @param  {Object[]} props.items
 * @param  {boolean}  props.isSelectedDisabled
 * @return {Object}
 */
export const getAdditionalProps = ({ children, items, isSelectedDisabled }) => {
  const value = getValue(isSelectedDisabled);

  return value
    ? {
        value,
      }
    : { defaultValue: getDefaultValue(children, items) };
};
