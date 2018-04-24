import { pick } from 'lodash';

/**
 * @param  {Object} state
 * @return {Object}
 */
export const pickDatesFromState = state =>
  pick(state, ['endDate', 'startDate']);
