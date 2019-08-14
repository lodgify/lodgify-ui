/**
 * @param  {Object}  state
 * @param  {boolean} state.areBoundsChangedProgramatically
 * @return {Object}
 */
export const getZoomedState = ({ areBoundsChangedProgramatically }) =>
  areBoundsChangedProgramatically
    ? { areBoundsChangedProgramatically: false }
    : { isZoomed: true };
