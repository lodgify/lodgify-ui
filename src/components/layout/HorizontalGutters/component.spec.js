import React from 'react';
import { shallow } from 'enzyme';
import { Container } from 'semantic-ui-react';
import {
  expectComponentToHaveDisplayName,
  expectComponentToBe,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Component as HorizontalGutters } from './component';

const getHorizontalGutters = props => shallow(<HorizontalGutters {...props} />);

describe('<HorizontalGutters />', () => {
  it('should render a single Semantic UI `Container` component', () => {
    const wrapper = getHorizontalGutters();

    expectComponentToBe(wrapper, Container);
  });

  it('should have displayName `HorizontalGutters`', () => {
    expectComponentToHaveDisplayName(HorizontalGutters, 'HorizontalGutters');
  });
});
