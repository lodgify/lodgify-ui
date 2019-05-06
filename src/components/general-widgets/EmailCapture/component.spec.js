import React from 'react';
import { mount, shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { ComponentWithResponsive as EmailCapture } from './component';

const props = {
  isUserOnMobile: false,
};

const getEmailCapture = overrideProps =>
  shallow(<EmailCapture {...overrideProps} />);

const getWrappedEmailCapture = (overrideProps = {}) => {
  const Child = getEmailCapture().prop('as');

  return mount(<Child {...props} {...overrideProps} />);
};

describe('<EmailCapture />', () => {
  it('should render the right structure', () => {
    const wrapper = getEmailCapture();

    expect(wrapper).toMatchSnapshot();
  });

  describe('the wrapped component', () => {
    it('should render the right structure', () => {
      const wrapper = getWrappedEmailCapture();

      expect(wrapper).toMatchSnapshot();
    });

    describe('if `props.errorMessage` is passed', () => {
      it('should render the right structure', () => {
        const wrapper = getWrappedEmailCapture({ errorMessage: 'Nurrrrrrr' });

        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('if `props.isUserOnMobile === true` and `props.isPrivacyConsentRequired === true`', () => {
      it('should render the right structure', () => {
        const actual = getWrappedEmailCapture({
          isPrivacyConsentRequired: true,
          isUserOnMobile: true,
        });

        expect(actual).toMatchSnapshot();
      });
    });

    describe('if `props.successMessage` is passed', () => {
      it('should render the right structure', () => {
        const wrapper = getWrappedEmailCapture({ successMessage: 'Yurrrrrrr' });

        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('if `props.isUserOnMobile === false` and `props.isPrivacyConsentRequired === true`', () => {
      it('should render the right structure', () => {
        const actual = getWrappedEmailCapture({
          isPrivacyConsentRequired: true,
        });

        expect(actual).toMatchSnapshot();
      });
    });
  });

  it('should have `displayName` EmailCapture', () => {
    const component = getEmailCapture().prop('as');

    expectComponentToHaveDisplayName(component, 'EmailCapture');
  });
});
