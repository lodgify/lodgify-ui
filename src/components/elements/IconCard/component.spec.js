import React from 'react';
import { shallow } from 'enzyme';
import { Label } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveProps,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Icon } from 'elements/Icon';
import { Paragraph } from 'typography/Paragraph';

import { Component as IconCard } from './component';

const name = 'phone';

const getIconCard = props => shallow(<IconCard name={name} {...props} />);
const getLabel = () => getIconCard().find(Label);

describe('<IconCard />', () => {
  it('should render a single Semantic UI `Label` component', () => {
    const wrapper = getIconCard();
    expectComponentToBe(wrapper, Label);
  });

  describe('the `Label` component', () => {
    it('should get the right props', () => {
      const wrapper = getLabel();
      expectComponentToHaveProps(wrapper, {
        basic: true,
        className: 'icon-card',
      });
    });

    it('should render a single Lodgify UI `Icon` component', () => {
      const wrapper = getLabel();
      expectComponentToHaveChildren(wrapper, Icon);
    });
  });

  describe('the `Icon` component', () => {
    it('should get the right props', () => {
      const wrapper = getIconCard().find(Icon);
      expectComponentToHaveProps(wrapper, {
        isDisabled: false,
        name,
        size: 'big',
      });
    });
  });

  describe('if a single line string label prop is passed', () => {
    it('should render a single Lodgify UI `Paragraph` component', () => {
      const label = '🐘';
      const wrapper = getIconCard({ label });
      expectComponentToHaveChildren(wrapper, Icon, Paragraph);
    });
  });

  describe('if a multiline string label prop is passed', () => {
    it('should render more than one Lodgify UI `Paragraph` component', () => {
      const label = `
        🐘
        🐘
      `;
      const wrapper = getIconCard({ label });
      expectComponentToHaveChildren(wrapper, Icon, Paragraph, Paragraph);
    });
  });

  describe('each Lodgify UI `Paragraph` component', () => {
    it('should have the right children', () => {
      const label = '🐘';
      const wrapper = getIconCard({ label }).find(Paragraph);
      expectComponentToHaveChildren(wrapper, label);
    });
  });

  it('should have displayName `IconCard`', () => {
    expectComponentToHaveDisplayName(IconCard, 'IconCard');
  });
});
