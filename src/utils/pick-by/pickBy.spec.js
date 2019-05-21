import { pickBy } from './pickBy';

const falsyItem = { falsy: false };
const truthyItem = { truthy: true };
const collection = {
  a: falsyItem,
  b: truthyItem,
  c: truthyItem,
};

describe('pickBy', () => {
  describe('if the `collection` typeof is an object and not null', () => {
    const predicate = jest.fn();

    beforeEach(() => {
      pickBy(collection, predicate);
    });

    it('should call `predicate` the correct number of times', () => {
      expect(predicate).toHaveBeenCalledTimes(Object.keys(collection).length);
    });

    it('should call `predicate` with the correct arguments', () => {
      expect(predicate.mock.calls[0][0]).toBe(falsyItem);
      expect(predicate.mock.calls[1][0]).toBe(truthyItem);
    });
  });

  describe('if predicates condition is met', () => {
    it('should return the correct value', () => {
      const predicate = value => value.truthy === true;
      const actual = pickBy(collection, predicate);

      expect(actual).toEqual({ b: truthyItem, c: truthyItem });
    });
  });

  describe('if the `collection` is equal to null', () => {
    it('should return the correct value', () => {
      const actual = pickBy(null);

      expect(actual).toBe(null);
    });
  });

  describe('if the `collection` typeof is not equal to an object', () => {
    it('should return the correct value', () => {
      const actual = pickBy(1);

      expect(actual).toBe(1);
    });
  });
});
