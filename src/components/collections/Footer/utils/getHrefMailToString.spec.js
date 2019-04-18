import { getHrefMailToString } from './getHrefMailToString';

describe('getHrefMailToString', () => {
  it('should return the right string', () => {
    const emailAddress = 'gobabygo@babygobaby.com';
    const actual = getHrefMailToString(emailAddress);

    expect(actual).toBe('mailto:gobabygo@babygobaby.com');
  });
});
