import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
  expectComponentToHaveChildren,
  expectComponentToBe,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Component as FlexContainer } from './component';

const children = '🚸';

const getFlexContainer = props =>
  shallow(<FlexContainer {...props}>{children}</FlexContainer>);

describe('<FlexContainer />', () => {
  it('should render a single `div`', () => {
    const wrapper = getFlexContainer();

    expectComponentToBe(wrapper, 'div');
  });

  it('should get the right props', () => {
    const flexProps = {
      alignContent: 'flex-start',
      alignItems: 'flex-start',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
    };
    const wrapper = getFlexContainer(flexProps);

    expectComponentToHaveProps(wrapper, {
      style: {
        display: 'flex',
        flexGrow: '1',
        height: '100%',
        ...flexProps,
      },
    });
  });

  it('should have the right children', () => {
    const wrapper = getFlexContainer();

    expectComponentToHaveChildren(wrapper, children);
  });

  it('should have displayName `FlexContainer`', () => {
    expectComponentToHaveDisplayName(FlexContainer, 'FlexContainer');
  });
});
