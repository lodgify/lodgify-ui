import React from 'react';
import { shallow } from 'enzyme';
import { Label, Icon } from 'semantic-ui-react';

import { Paragraph } from 'typography/Paragraph';

import { Component as IconCard } from './component';

const name = 'steam';

const getIconCard = props => shallow(<IconCard name={name} {...props} />);
const getLabel = () => getIconCard().find(Label);

describe('<IconCard />', () => {
  it('should render a single Semantic UI `Label` component', () => {
    const wrapper = getIconCard();
    const actual = wrapper.find(Label);
    expect(actual).toHaveLength(1);
  });

  describe('the `Label` component', () => {
    it('should get the right props', () => {
      const wrapper = getLabel();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          basic: true,
          className: '',
        })
      );
    });

    it('should render a single Semantic UI `Icon` component', () => {
      const wrapper = getLabel();
      const actual = wrapper.find(Icon);
      expect(actual).toHaveLength(1);
    });
  });

  describe('the `Icon` component', () => {
    it('should get the right props', () => {
      const wrapper = getIconCard().find(Icon);
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          color: undefined,
          inverted: false,
          name,
          size: 'big',
        })
      );
    });
  });

  describe('if a label prop is passed', () => {
    it('should render a single Lodgify UI `Paragraph` component', () => {
      const label = '🐘';
      const wrapper = getIconCard({ label });
      const actual = wrapper.find(Paragraph);
      expect(actual).toHaveLength(1);
    });
  });

  describe('the Lodgify UI `Paragraph` component', () => {
    it('should get the right children prop', () => {
      const label = '🐘';
      const wrapper = getIconCard({ label });
      const actual = wrapper.find(Paragraph).prop('children');
      expect(actual).toBe(label);
    });
  });

  it('should have displayName `IconCard`', () => {
    const actual = IconCard.displayName;
    expect(actual).toBe('IconCard');
  });
});
