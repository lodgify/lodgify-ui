import { shallow } from 'enzyme';

import { getVideoContent } from './getVideoContent';

describe('getVideoContent', () => {
  it('should return null if nothing is provided', () => {
    expect(() => getVideoContent()).toThrow();
  });

  it('should return null if invalid params are provided', () => {
    expect(() => getVideoContent(NaN)).toThrow();
    expect(() => getVideoContent(undefined)).toThrow();
    expect(() => getVideoContent(undefined)).toThrow();
    expect(() => getVideoContent(undefined)).toThrow();
    expect(() => getVideoContent('')).toThrow();
  });

  it('should return null if invalid URLs are provided', () => {
    expect(() => getVideoContent('')).toThrow();
    expect(() => getVideoContent('https::://')).toThrow();
    expect(() => getVideoContent('/happy')).toThrow();
  });

  it('should return null if invalid HTML snippets are provided', () => {
    expect(() => getVideoContent('')).toThrow();
    expect(() => getVideoContent('<iframe<ifram')).toThrow();
    expect(() => getVideoContent('https://')).toThrow();
  });

  it('should return a div if proper params are provided', () => {
    expect(
      shallow(getVideoContent('https://lodgify.com')).find('div')
    ).toHaveLength(1);
    expect(
      shallow(getVideoContent('<iframe></iframe>')).find('div')
    ).toHaveLength(1);
  });
});
