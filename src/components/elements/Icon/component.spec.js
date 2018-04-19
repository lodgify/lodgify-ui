import React from 'react';
import { shallow } from 'enzyme';
import { Icon as SemanticIcon } from 'semantic-ui-react';

import { Paragraph } from 'typography/Paragraph';

import { Component as Icon } from './component';

const name = 'steam';

const getIcon = props => shallow(<Icon name={name} {...props} />);

describe('<Icon />', () => {
  it('should render a single Lodgify UI `Icon` component', () => {
    const wrapper = getIcon();
    const actual = wrapper.find(SemanticIcon);
    expect(actual).toHaveLength(1);
  });

  describe('the Lodgify UI `Icon` component', () => {
    it('should get the right props', () => {
      const wrapper = getIcon().find(SemanticIcon);
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          color: undefined,
          inverted: false,
          name,
          size: 'large',
        })
      );
    });
  });

  describe('if a label prop is passed', () => {
    it('should render a single Lodgify UI `Paragraph` component', () => {
      const label = '🐘';
      const wrapper = getIcon({ label });
      const actual = wrapper.find(Paragraph);
      expect(actual).toHaveLength(1);
    });
  });

  describe('the Lodgify UI `Paragraph` component', () => {
    it('should get the right children prop', () => {
      const label = '🐘';
      const wrapper = getIcon({ label });
      const actual = wrapper.find(Paragraph).prop('children');
      expect(actual).toBe(label);
    });
  });

  it('should have displayName `Icon`', () => {
    const actual = Icon.displayName;
    expect(actual).toBe('Icon');
  });
});
