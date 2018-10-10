import React from 'react';
import { mount } from 'enzyme';

import { Component as IconCard } from './component';

const name = 'phone';

const getIconCard = props => mount(<IconCard name={name} {...props} />);

describe('<IconCard />', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getIconCard();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.isDisabled` is `true`', () => {
    it('should render the right structure', () => {
      const actual = getIconCard({ isDisabled: true });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.isFilled` is `true`', () => {
    it('should render the right structure', () => {
      const actual = getIconCard({ isFilled: true });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.isLeftAligned` is `true`', () => {
    it('should render the right structure', () => {
      const actual = getIconCard({ isLeftAligned: true });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.label` is defined', () => {
    it('should render the right structure', () => {
      const actual = getIconCard({ label: '🔺' });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.size` is `large`', () => {
    it('should render the right structure', () => {
      const actual = getIconCard({ label: 'large' });

      expect(actual).toMatchSnapshot();
    });
  });
});
