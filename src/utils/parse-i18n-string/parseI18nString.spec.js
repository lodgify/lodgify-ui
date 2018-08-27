import { parseI18nString } from './parseI18nString';

describe('utils/parseI18nString', () => {
  it('should correctly parse the locale string', () => {
    const localeString = 'Check out: {time}';
    const templateTags = {
      time: '12:00pm',
    };

    const actual = parseI18nString(localeString, templateTags);

    expect(actual).toBe('Check out: 12:00pm');
  });

  it('should correctly return a string if tags are not defined', () => {
    // eslint-disable-next-line no-console
    console.warn = jest.fn();

    const localeString = 'Check out: {time}';
    const templateTags = {};

    const actual = parseI18nString(localeString, templateTags);

    // eslint-disable-next-line no-console
    expect(console.warn).toHaveBeenCalledWith(
      expect.any(String),
      'A template tag has not been passed'
    );

    expect(actual).toBe('Check out: {time}');
  });
});
