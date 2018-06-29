import React from 'react';
import { shallow } from 'enzyme';
import { Segment } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Component as FullBleed } from './component';

const props = {
  children: '🚸',
  imageUrl: '🐱🐱',
};

const getFullBleed = () => shallow(<FullBleed {...props} />);
const getSegment = () => getFullBleed().find(Segment);

describe('<FullBleed />', () => {
  it('should render a single Semantic UI `Segment` component', () => {
    const wrapper = getFullBleed();
    expectComponentToBe(wrapper, Segment);
  });

  describe('the `Segment` component', () => {
    it('should have the right props', () => {
      const wrapper = getSegment();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          children: props.children,
          className: 'full-bleed',
          style: { backgroundImage: expect.stringContaining(props.imageUrl) },
          vertical: true,
        })
      );
    });
  });

  it('should have `displayName` `FullBleed`', () => {
    expectComponentToHaveDisplayName(FullBleed, 'FullBleed');
  });
});
