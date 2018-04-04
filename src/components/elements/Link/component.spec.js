import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'semantic-ui-react';

import { Component as Link } from './component';

const URL = 'https://lodgify.com';
const getLink = props =>
  shallow(
    <Link {...props} href={URL}>
      Press me
    </Link>
  );

describe('<Link />', () => {
  it('should render a single Semantic UI `Button` component', () => {
    const actual = getLink().find(Button).length;
    expect(actual).toBe(1);
  });

  it('should pass the `Button` component the right props', () => {
    const actual = getLink()
      .find(Button)
      .props();

    expect(actual).toEqual(
      expect.objectContaining({
        as: 'a',
        href: URL,
        target: '_self',
        floated: 'left',
        onClick: Function.prototype,
      })
    );
  });

  describe('if `props.isPositionedRight` is true', () => {
    it('should pass the `Button` component `floated="right"`', () => {
      const actual = getLink({ isPositionedRight: true })
        .find(Button)
        .prop('floated');
      expect(actual).toBe('right');
    });
  });

  describe('if `props.willOpenInNewTab` is true', () => {
    it('should pass the `Button` component `target="_blank"`', () => {
      const actual = getLink({ willOpenInNewTab: true })
        .find(Button)
        .props();
      expect(actual).toEqual(
        expect.objectContaining({
          target: '_blank',
        })
      );
    });
  });

  it('should render the `children`', () => {
    const actual = getLink().contains('Press me');
    expect(actual).toBe(true);
  });
});
