import { size } from 'lodash';

/**
 * @param  {Object[]|undefined}  guestsOptions
 * @param  {Object[]|undefined}  locationOptions
 * @return {boolean}
 */
export const hasSearchBarOptions = (guestsOptions, locationOptions) =>
  size(guestsOptions) > 0 || size(locationOptions) > 0;
