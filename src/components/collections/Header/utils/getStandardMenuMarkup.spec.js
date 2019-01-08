import React from 'react';
import { mount } from 'enzyme';

import { navigationItems } from '../mock-data/navigationItems';

import { getStandardMenuMarkup } from './getStandardMenuMarkup';

const getMarkupAsRenderedComponent = extraProps =>
  mount(
    <div>
      {getStandardMenuMarkup({
        activeNavigationItemIndex: 1,
        navigationItems,
        ...extraProps,
      })}
    </div>
  );

describe('getStandardMenuMarkup', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getMarkupAsRenderedComponent();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.primaryCTA` is passed', () => {
    const primaryCTA = { onClick: Function.prototype, text: 'someText' };

    it('should render the right structure', () => {
      const actual = getMarkupAsRenderedComponent({ primaryCTA });

      expect(actual).toMatchSnapshot();
    });
  });
});
