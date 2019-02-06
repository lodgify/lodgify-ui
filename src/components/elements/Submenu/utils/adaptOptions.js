import getClassNames from 'classnames';

import { getHasObjectProperty } from 'utils/get-has-object-property';

/**
 * If no options specify an label,
 * Add unique key to each option in an array.
 * @param  {Object[]} options
 * @return {Object[]}
 */
export const adaptOptions = options => {
  if (getHasObjectProperty(options, 'label')) {
    return options.map(({ label, text, ...otherProps }) => ({
      className: getClassNames({
        'has-label': true,
      }),
      label,
      text,
      ...otherProps,
    }));
  }

  return options.map(option => ({ key: option.text, ...option }));
};
