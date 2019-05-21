import { forEach } from './forEach';

const iteratee = jest.fn();
const collection = { a: 1, b: 2 };

describe('forEach', () => {
  describe("if collection is `typeof` 'object' and does not equal null", () => {
    beforeEach(() => {
      forEach(collection, iteratee);
    });

    it('should call iteratee the correct number of times', () => {
      expect(iteratee).toHaveBeenCalledTimes(Object.keys(collection).length);
    });

    it('should pass the correct arguments to `iteratee`', () => {
      expect(iteratee.mock.calls[0][0]).toBe(1);
      expect(iteratee.mock.calls[0][1]).toBe('a');
      expect(iteratee.mock.calls[1][0]).toBe(2);
      expect(iteratee.mock.calls[1][1]).toBe('b');
    });
  });

  describe("if collection is `typeof` 'object' and is equal to null", () => {
    it('should return the right value', () => {
      const actual = forEach(null);

      expect(actual).toEqual(null);
    });
  });

  describe("if collection is not `typeof` 'object'", () => {
    it('should return the right value', () => {
      const actual = forEach(1);

      expect(actual).toEqual(1);
    });
  });
});
