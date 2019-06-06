import React from 'react';
import { shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as PropertySearchResult } from './component';

const getPropertySearchResult = () => shallow(<PropertySearchResult />);

describe('<PropertySearchResult />', () => {
  it('should render the right structure', () => {
    const actual = getPropertySearchResult();

    expect(actual).toMatchSnapshot();
  });

  it('should have `displayName` `PropertySearchResult`', () => {
    expectComponentToHaveDisplayName(
      PropertySearchResult,
      'PropertySearchResult'
    );
  });
});
