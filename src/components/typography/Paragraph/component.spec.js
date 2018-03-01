import React from 'react';
import { shallow } from 'enzyme';

import { Component as Paragraph } from './component';

const children = '🚸';

describe('<Paragraph />', () => {
  it('should render a single `p`', () => {
    const header = shallow(<Paragraph>{children}</Paragraph>);
    const actual = header.find('p').length;
    expect(actual).toBe(1);
  });

  it('should default to adding no className', () => {
    const header = shallow(<Paragraph>{children}</Paragraph>);
    const actual = header.find('p.tiny').length;
    expect(actual).toBe(0);
  });

  it('should add no className if `props.size` is `medium`', () => {
    const header = shallow(<Paragraph size="medium">{children}</Paragraph>);
    const actual = header.find('p.medium').length;
    expect(actual).toBe(0);
  });

  it('should add className `tiny` if `props.size` is `tiny`', () => {
    const header = shallow(<Paragraph size="tiny">{children}</Paragraph>);
    const actual = header.find(`p.tiny`).length;
    expect(actual).toBe(1);
  });

  it('should render children', () => {
    const header = shallow(<Paragraph>{children}</Paragraph>);
    const actual = header.contains(children);
    expect(actual).toBe(true);
  });

  it('should have displayName `Paragraph`', () => {
    const actual = Paragraph.displayName;
    expect(actual).toBe('Paragraph');
  });
});
