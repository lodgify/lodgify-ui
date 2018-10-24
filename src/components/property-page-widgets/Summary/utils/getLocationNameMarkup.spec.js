import React from 'react';
import { shallow } from 'enzyme';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
} from '@lodgify/enzyme-jest-expect-helpers';
import { expectComponentToHaveProps } from '@lodgify/enzyme-jest-expect-helpers/lib/expectComponentToHaveProps';

import { Icon, ICON_NAMES } from 'elements/Icon';

import { getLocationNameMarkup } from './getLocationNameMarkup';

const locationName = 'Alpha-Centauri';

const getMarkupAsRenderedComponent = () =>
  shallow(<div>{getLocationNameMarkup(locationName)}</div>).children();

describe('getLocationNameMarkup', () => {
  it('should render a single `Segment` component', () => {
    const wrapper = getMarkupAsRenderedComponent();

    expectComponentToBe(wrapper, Segment);
  });

  describe('the `Segment` component', () => {
    it('should render the right children', () => {
      const wrapper = getMarkupAsRenderedComponent().find(Segment);

      expectComponentToHaveChildren(wrapper, locationName, Icon);
    });

    describe('the `Icon` component', () => {
      it('should have the right props', () => {
        const wrapper = getMarkupAsRenderedComponent().find(Icon);

        expectComponentToHaveProps(wrapper, {
          color: 'yellow',
          name: ICON_NAMES.MAP_PIN,
          size: 'small',
        });
      });
    });
  });
});
