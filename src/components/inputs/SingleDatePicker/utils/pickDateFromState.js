import { pick } from 'lodash';

/**
 * @param  {Object} state
 * @return {Object}
 */
export const pickDateFromState = state => pick(state, ['date']);
