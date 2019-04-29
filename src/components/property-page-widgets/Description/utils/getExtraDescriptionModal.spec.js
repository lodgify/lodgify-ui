import { getExtraDescriptionModal } from './getExtraDescriptionModal';

describe('getExtraDescriptionModal', () => {
  it('should render the right structure', () => {
    const actual = getExtraDescriptionModal('button', 'text');

    expect(actual).toMatchSnapshot();
  });
});
