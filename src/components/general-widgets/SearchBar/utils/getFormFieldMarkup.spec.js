import React from 'react';
import { shallow } from 'enzyme';

import { getFormFieldMarkup } from './getFormFieldMarkup';

const componentProps = {
  getIsDayBlocked: Function.prototype,
  locationOptions: [],
  searchButton: <div />,
};

const willLocationDropdownOpenAbove = true;

const getMarkup = overrideProps =>
  shallow(
    <div>
      {getFormFieldMarkup(
        {
          ...componentProps,
          ...overrideProps,
        },
        Function.prototype,
        willLocationDropdownOpenAbove
      )}
    </div>
  );

describe('getFormFieldMarkup', () => {
  it('should render the right structure`', () => {
    const wrapper = getMarkup();

    expect(wrapper).toMatchSnapshot();
  });

  describe('if `props.locationOptions` size is greater than 0', () => {
    it('should render the right structure', () => {
      const wrapper = getMarkup({ locationOptions: [{ text: 'yo' }] });

      expect(wrapper).toMatchSnapshot();
    });
  });
});
