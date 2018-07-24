import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Paragraph } from './component';

const getParagraph = props => shallow(<Paragraph {...props} />);

const children = ['🚸', 2];

describe('<Paragraph />', () => {
  it('should default render a single `p` element', () => {
    const wrapper = getParagraph({ children });

    expectComponentToBe(wrapper, 'p');
  });

  it('should default to adding no className', () => {
    const header = getParagraph({ children });
    const actual = header.find('p.tiny');

    expect(actual).toHaveLength(0);
  });

  it('should add no className if `props.size` is `medium`', () => {
    const header = getParagraph({ children, size: 'medium' });
    const actual = header.find('p.medium');

    expect(actual).toHaveLength(0);
  });

  it('should add className `tiny` if `props.size` is `tiny`', () => {
    const header = getParagraph({ children, size: 'tiny' });
    const actual = header.find(`p.tiny`);

    expect(actual).toHaveLength(1);
  });

  it('should render children', () => {
    const header = getParagraph({ children });
    const actual = header.contains(children);

    expect(actual).toBe(true);
  });

  it('should have displayName `Paragraph`', () => {
    expectComponentToHaveDisplayName(Paragraph, 'Paragraph');
  });
});
