import React from 'react';
import { mount } from 'enzyme';
import {
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { CHECK_OUR_AVAILABILITY } from 'utils/default-strings';
import { Button } from 'elements/Button';

import { Component as PropertyPageSearchBar } from './component';

const { guestsOptions } = require('./mock-data/options');

const getPropertyPageSearchBar = props =>
  mount(<PropertyPageSearchBar guestsOptions={guestsOptions} {...props} />);

const props = {
  guestsOptions: guestsOptions,
  isFixed: true,
  summaryElement: null,
  modalTrigger: (
    <Button isPositionedRight isRounded>
      {CHECK_OUR_AVAILABILITY}
    </Button>
  ),
  modalSummaryElement: null,
  searchButton: (
    <Button isPositionedRight isRounded>
      {CHECK_OUR_AVAILABILITY}
    </Button>
  ),
};

describe('<PropertyPageSearchBar />', () => {
  it('should have the right structure', () => {
    const actual = getPropertyPageSearchBar();

    expect(actual).toMatchSnapshot();
  });

  it('should have the right props', () => {
    const wrapper = getPropertyPageSearchBar();

    expectComponentToHaveProps(wrapper, props);
  });

  it('should have the right `displayName`', () => {
    expectComponentToHaveDisplayName(
      PropertyPageSearchBar,
      'PropertyPageSearchBar'
    );
  });
});
