jest.mock('uniqid');
jest.mock('react-dates', () => {
  const { Component } = require('react');

  class DateRangePicker extends Component {
    render() {
      return <div />;
    }
  }

  return { DateRangePicker };
});

import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { CHECK_OUR_AVAILABILITY } from 'utils/default-strings';
import { Button } from 'elements/Button';

import { Component as PropertyPageSearchBar } from './component';

const props = {
  getIsDayBlocked: Function.prototype,
  isFixed: true,
  modalTrigger: (
    <Button isPositionedRight isRounded>
      {CHECK_OUR_AVAILABILITY}
    </Button>
  ),
  onChangeInput: Function.prototype,
  onSubmit: Function.prototype,
  searchButton: (
    <Button isPositionedRight isRounded>
      {CHECK_OUR_AVAILABILITY}
    </Button>
  ),
  summaryLocationName: 'Location',
  summaryPricePerPeriod: '250€',
  summaryPricePerPeriodPrefix: 'morf',
  summaryPropertyName: 'Property',
  summaryRatingNumber: 4.5,
};

const getPropertyPageSearchBar = extraProps =>
  mount(<PropertyPageSearchBar {...props} {...extraProps} />);

describe('<PropertyPageSearchBar />', () => {
  it('should have the right structure', () => {
    const actual = getPropertyPageSearchBar();

    expect(actual).toMatchSnapshot();
  });

  it('should have the right `displayName`', () => {
    expectComponentToHaveDisplayName(
      PropertyPageSearchBar,
      'PropertyPageSearchBar'
    );
  });

  describe('if `isShowingPlaceholder` === true', () => {
    it('should have the right structure', () => {
      const actual = getPropertyPageSearchBar({ isShowingPlaceholder: true });

      expect(actual).toMatchSnapshot();
    });
  });
});
