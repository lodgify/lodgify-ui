import React from 'react';
import { shallow } from 'enzyme';
import { Container as SemanticContainer } from 'semantic-ui-react';
import {
  expectComponentToHaveDisplayName,
  expectComponentToBe,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Container } from './component';

const getContainer = props => shallow(<Container {...props} />);

describe('<Container />', () => {
  it('should render a single Semantic UI `Container` component', () => {
    const wrapper = getContainer();

    expectComponentToBe(wrapper, SemanticContainer);
  });

  it('should have displayName `Container`', () => {
    expectComponentToHaveDisplayName(Container, 'Container');
  });
});
