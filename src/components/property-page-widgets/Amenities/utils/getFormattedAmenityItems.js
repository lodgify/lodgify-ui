/**
 * @param  {string[]} items
 * @param  {string}   amenitiesConjunctionText
 * @return {string[]}
 */
export const getFormattedAmenityItems = (items, amenitiesConjunctionText) =>
  items.map((item, index) => {
    // Is penultimate item in array
    if (index === items.length - 2) {
      return `${item} ${amenitiesConjunctionText} `;
    }
    // Is last item in array
    if (index === items.length - 1) {
      return item;
    }

    return `${item}, `;
  });
