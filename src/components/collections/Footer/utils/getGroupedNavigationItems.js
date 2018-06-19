/**
 * @param  {Object[]} items
 * @return {Object[]}
 */
export const getGroupedNavigationItems = items =>
  items.reduce((accumulator, item) => {
    // If `item` has no `href` (i.e. it represents a group rather than a link)
    if (!item.href) {
      // make `item` a new item in `accumulator`
      return [...accumulator, item];
    }

    // If navigationItem has `href` (i.e. it is a link outside a group)...

    // Store the last index and item of `accumulator`
    const lastIndexOfAccumulator = accumulator.length - 1;
    const lastItemOfAccumulator = accumulator[lastIndexOfAccumulator];

    // If the last item in `accumulator` doesn't exist or is a group
    if (!lastItemOfAccumulator || lastItemOfAccumulator.text) {
      // make `item` the first item in the `subItems` of a new item in `accumulator`
      return [...accumulator, { subItems: [item] }];
    }

    // Else add `item` to the `subitems` of the last item of `accumulator`
    return [
      ...accumulator.slice(0, lastIndexOfAccumulator),
      {
        subItems: [...(lastItemOfAccumulator.subItems || []), item],
      },
    ];
  }, []);
