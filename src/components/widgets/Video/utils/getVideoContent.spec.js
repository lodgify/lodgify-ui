import { shallow } from 'enzyme';

import { getVideoContent } from './getVideoContent';

describe('getVideoContent', () => {
  it('should return null if nothing is provided', () => {
    expect(getVideoContent()).toEqual(null);
  });

  it('should return null if invalid params are provided', () => {
    expect(getVideoContent(NaN, NaN)).toEqual(null);
    expect(getVideoContent(undefined, undefined)).toEqual(null);
    expect(getVideoContent(true, undefined)).toEqual(null);
    expect(getVideoContent(false, undefined)).toEqual(null);
    expect(getVideoContent(false, '')).toEqual(null);
  });

  it('should return null if invalid URLs are provided', () => {
    expect(getVideoContent(true, '')).toEqual(null);
    expect(getVideoContent(true, 'https::://')).toEqual(null);
    expect(getVideoContent(true, '/happy')).toEqual(null);
  });

  it('should return null if invalid HTML snippets are provided', () => {
    expect(getVideoContent(false, '')).toEqual(null);
    expect(getVideoContent(false, '<iframe<ifram')).toEqual(null);
    expect(getVideoContent(false, 'https://')).toEqual(null);
  });

  it('should return a div if proper params are provided', () => {
    expect(
      shallow(getVideoContent(true, 'https://lodgify.com')).find('div')
    ).toHaveLength(1);
    expect(
      shallow(getVideoContent(false, '<iframe></iframe>')).find('div')
    ).toHaveLength(1);
  });
});
