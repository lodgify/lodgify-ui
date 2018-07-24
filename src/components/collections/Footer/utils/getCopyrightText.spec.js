import { getCopyrightText } from './getCopyrightText';

describe('getCopyrightText', () => {
  it('should return the right string', () => {
    const businessName = 'Corporation Inc.';
    const actual = getCopyrightText(businessName);

    expect(actual).toBe(`\u00A9 2018 ${businessName}. All rights reserved.`);
  });
});
