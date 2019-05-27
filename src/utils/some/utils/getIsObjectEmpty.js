/**
 * @param  {Object} object
 * @return {boolean}
 */
export const getIsObjectEmpty = object => {
  const objectKeys = Object.keys(object);

  return (
    objectKeys.length === 0 || objectKeys.every(key => object[key] === null)
  );
};
