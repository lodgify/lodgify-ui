import { getTransportOptionLabel } from './getTransportOptionLabel';

describe('getTransportOptionLabel', () => {
  it('should return a string composed from the `distance` and `label` arguments', () => {
    const distance = '🚣';
    const label = 'someLabel';
    const actual = getTransportOptionLabel(distance, label);
    expect(actual).toBe(`
  ${distance}
  ${label}
`);
  });
});
