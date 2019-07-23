/**
 * @param  {Object[]} options
 * @param  {string}   searchValue
 * @return {Object[]}
 */
export const getOptionsWithSearch = (options, searchValue) => {
  const regExp = new RegExp(`^${searchValue.replace('+', '\\+')}`, 'i');

  return options.filter(
    ({ name, value }) => regExp.test(name) || regExp.test(value)
  );
};
