import { getPlayerCss } from './getPlayerCss';

describe('getPlayerCss', () => {
  it('should correctly set the right padding top value with 300 by 300', () => {
    const componentCss = getPlayerCss(true, '300', '300');

    expect(componentCss).toEqual({
      paddingTop: '100%',
    });
  });

  it('should correctly set the right padding top value with 600 by 450', () => {
    const componentCss = getPlayerCss(true, '600', '450');

    expect(componentCss).toEqual({
      paddingTop: '75%',
    });
  });
});
