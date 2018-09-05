import { PATH_DESCRIPTIONS } from './pathDescriptions';

/**
 * @param  {string} name
 * @param  {string} path
 * @return {string}
 */
export const getPath = (name, path) =>
  // 1. If a named path exists in PATH_DESCRIPTIONS, return it.
  // 2. Else return the custom path passed down by the consumer.
  // 3. Default to the question mark icon.
  PATH_DESCRIPTIONS[name] || path || PATH_DESCRIPTIONS['question mark'];
