/**
 * Adapts the parameters passed to the onChange function.
 * @param  {Function} onChange
 * @return {Function}
 */
export const adaptOnChange = (onChange, name) => (event, data) =>
  onChange({ name, value: data.value });
