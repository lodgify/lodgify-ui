import { adaptOnChangeEvent } from './adaptOnChangeEvent';

describe('adaptOnChangeEvent', () => {
  it('should return the correct value', () => {
    const checked = 'yoyo';
    const name = 'yoyo';
    const actual = adaptOnChangeEvent({}, { name, checked });

    expect(actual).toEqual({ name, value: checked });
  });
});
