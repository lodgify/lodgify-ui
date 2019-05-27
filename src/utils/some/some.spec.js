import { some } from './some';

const collection = { a: 1, b: 2 };

describe('some', () => {
  describe('if the collection is an empty object', () => {
    it('should retun the correct value', () => {
      const actual = some({});

      expect(actual).toBe(false);
    });
  });

  describe('if the collection is a populated object and predicate is not undefined', () => {
    const predicate = jest.fn();

    beforeEach(() => {
      some(collection, predicate);
    });
    it('should call `predicate` the correct number of times', () => {
      expect(predicate).toHaveBeenCalledTimes(Object.keys(collection).length);
    });

    it('should call `predicate` with the correct arguments', () => {
      expect(predicate.mock.calls[0][0]).toBe(1);
      expect(predicate.mock.calls[1][0]).toBe(2);
    });
  });

  describe('if predicates condition is met at least once', () => {
    it('should return the correct value', () => {
      const predicate = value => value === collection.a;
      const actual = some(collection, predicate);

      expect(actual).toBe(true);
    });
  });
});
