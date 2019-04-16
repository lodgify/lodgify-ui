import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as EmailCapture } from './component';

const getEmailCapture = props => mount(<EmailCapture {...props} />);

describe('<EmailCapture />', () => {
  it('should render the right structure', () => {
    const wrapper = getEmailCapture();

    expect(wrapper).toMatchSnapshot();
  });

  describe('if `props.errorMessage` is passed', () => {
    it('should render the right structure', () => {
      const wrapper = getEmailCapture({ errorMessage: 'Nurrrrrrr' });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.successMessage` is passed', () => {
    it('should render the right structure', () => {
      const wrapper = getEmailCapture({ successMessage: 'Yurrrrrrr' });

      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should have `displayName` EmailCapture', () => {
    expectComponentToHaveDisplayName(EmailCapture, 'EmailCapture');
  });
});
