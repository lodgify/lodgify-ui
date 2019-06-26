import React from 'react';
import { mount, shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { ComponentWithResponsive as CheckboxInputSegment } from './component';

const props = {
  heading: '🧢',
  checkboxes: [
    {
      label: 'yo',
    },
  ],
};

const getCheckboxInputSegment = () =>
  shallow(<CheckboxInputSegment {...props} />);

const getWrappedCheckboxInputSegment = (isUserOnMobile = false) => {
  const Child = getCheckboxInputSegment().prop('as');

  return mount(<Child {...props} isUserOnMobile={isUserOnMobile} />);
};

describe('<CheckboxInputSegment />', () => {
  describe('by default', () => {
    it('should return the right structure', () => {
      const actual = getWrappedCheckboxInputSegment();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `isUserOnMobile` === true', () => {
    it('should return the right structure', () => {
      const actual = getWrappedCheckboxInputSegment(true);

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have displayName `CheckboxInputSegment`', () => {
    const component = shallow(<CheckboxInputSegment />).prop('as');

    expectComponentToHaveDisplayName(component, 'CheckboxInputSegment');
  });
});
