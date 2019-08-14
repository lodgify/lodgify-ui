import { getZoomedState } from './getZoomedState';

describe('getZoomedState', () => {
  describe('if `state.areBoundsChangedProgramatically` is true', () => {
    it('should return the right object', () => {
      const actual = getZoomedState({ areBoundsChangedProgramatically: true });

      expect(actual).toEqual({ areBoundsChangedProgramatically: false });
    });
  });

  describe('if `state.areBoundsChangedProgramatically` is false', () => {
    it('should return the right object', () => {
      const actual = getZoomedState({ areBoundsChangedProgramatically: false });

      expect(actual).toEqual({ isZoomed: true });
    });
  });
});
