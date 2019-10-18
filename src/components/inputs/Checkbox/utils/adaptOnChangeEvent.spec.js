import { adaptOnChangeEvent } from './adaptOnChangeEvent';

describe('adaptOnChangeEvent', () => {
  it('should return the correct value', () => {
    const checked = 'yoyo';
    const actual = adaptOnChangeEvent(null, { checked });

    expect(actual).toEqual(checked);
  });
});
