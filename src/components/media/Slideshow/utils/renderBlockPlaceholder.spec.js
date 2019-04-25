import { BlockPlaceholder } from 'elements/BlockPlaceholder';

import { renderBlockPlaceholder } from './renderBlockPlaceholder';

describe('`renderBlockPlaceholder`', () => {
  it(' should return a single Semantic UI `BlockPlaceholder` component', () => {
    const actual = renderBlockPlaceholder().type;

    expect(actual).toBe(BlockPlaceholder);
  });
});
