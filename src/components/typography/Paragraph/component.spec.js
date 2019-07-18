import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Paragraph } from './component';

const children = ['🚸', 2];

const getParagraph = props =>
  mount(<Paragraph children={children} {...props} />);

describe('<Paragraph />', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getParagraph();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.isCompact` is passed', () => {
    it('should render the right structure', () => {
      const actual = getParagraph({ isCompact: true });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.size` === tiny', () => {
    it('should render the right structure', () => {
      const actual = getParagraph({ size: 'tiny' });

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have displayName `Paragraph`', () => {
    expectComponentToHaveDisplayName(Paragraph, 'Paragraph');
  });
});
