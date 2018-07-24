import { getReactPlayerProps } from './getReactPlayerProps';

describe('getReactPlayerProps', () => {
  it('should get the default component and responsive props', () => {
    const componentProps = getReactPlayerProps(true, 'url');

    expect(componentProps).toEqual({
      className: 'react-player',
      controls: true,
      height: '100%',
      url: 'url',
      width: '100%',
    });
  });

  it('should only get the default component props', () => {
    const componentProps = getReactPlayerProps(false, 'url');

    expect(componentProps).toEqual({
      className: 'react-player',
      controls: true,
      url: 'url',
    });
  });
});
