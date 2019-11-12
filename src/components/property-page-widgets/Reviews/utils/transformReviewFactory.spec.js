import { transformReviewFactory } from './transformReviewFactory';

describe('transformReviewFactory', () => {
  it('check if the result is a function', () => {
    expect(transformReviewFactory() instanceof Function).toBe(true);
  });
  describe('when none parameter are passed', () => {
    it('should return an identity function', () => {
      const tranformer = transformReviewFactory();

      const result = tranformer({ reviewerStayDate: 'bar' });

      expect(result).toEqual({
        reviewerStayDate: 'bar',
      });
    });
  });
  describe('when the right parameter is passed', () => {
    describe('stayDatePrefix', () => {
      describe('with review with `reviewerStayDate`', () => {
        it('should return it prefixed', () => {
          const review = {
            reviewerStayDate: 'foo',
          };
          const result = transformReviewFactory({ stayDatePrefix: 'bar' })(
            review
          );

          expect(result).toMatchObject({ reviewerStayDate: 'bar foo' });
        });
      });
    });
    describe('with review without `reviewerStayDate`', () => {
      it('should return undefined', () => {
        const review = {};
        const result = transformReviewFactory({ stayDatePrefix: 'bar' })(
          review
        );

        expect(result).toMatchObject({ reviewerStayDate: undefined });
      });
    });
  });
});
