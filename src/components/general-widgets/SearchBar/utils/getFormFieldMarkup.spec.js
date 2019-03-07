import React from 'react';
import { shallow } from 'enzyme';

import { getFormFieldMarkup } from './getFormFieldMarkup';

const componentProps = {
  isShowingSummary: true,
  isShowingLocationDropdown: true,
  getIsDayBlocked: Function.prototype,
  locationOptions: [],
  guestsOptions: [],
  searchButton: <div />,
};

const willDropdownsOpenAbove = true;

const getMarkup = overrideProps =>
  shallow(
    <div>
      {getFormFieldMarkup(
        {
          ...componentProps,
          ...overrideProps,
        },
        Function.prototype,
        false,
        willDropdownsOpenAbove
      )}
    </div>
  );

describe('getFormFieldMarkup', () => {
  it('should render the right structure`', () => {
    const wrapper = getMarkup();

    expect(wrapper).toMatchSnapshot();
  });

  describe('if `props.locationOptions` size is greater than 0', () => {
    const getMerkupWithLocationOptions = () =>
      getMarkup({ locationOptions: [{ text: 'yo' }] });

    it('should render the right structure', () => {
      const wrapper = getMerkupWithLocationOptions();

      expect(wrapper).toMatchSnapshot();
    });
  });
});
