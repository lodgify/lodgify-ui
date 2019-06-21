/**
 * @param  {number[]} [valueArrayOne=[]]
 * @param  {number[]} [valueArrayTwo=[]]
 * @return {boolean}
 */
export const getIsValueEqual = (valueArrayOne = [], valueArrayTwo = []) =>
  valueArrayOne.length === valueArrayTwo.length &&
  valueArrayOne.reduce(
    (accumulator, item, index) => accumulator && item === valueArrayTwo[index],
    true
  );
