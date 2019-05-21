import React from 'react';

import { TextInput } from 'inputs/TextInput';

import { getInputWidth } from './getInputWidth';

describe('getInputWidth', () => {
  it('should return `props.width` if it exists', () => {
    const width = 'six';
    const inputs = [<input width={width} />, <TextInput width={width} />];

    inputs.forEach(input => {
      const actual = getInputWidth(input);

      expect(actual).toBe(width);
    });
  });

  it('should return undefined if `props.width` does not exist', () => {
    const inputs = [{}, <input />, <TextInput />];

    inputs.forEach(input => {
      const actual = getInputWidth(input);

      expect(actual).toBeUndefined();
    });
  });
});
