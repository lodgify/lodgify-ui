import React from 'react';
import { shallow } from 'enzyme';
import { Label } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Component as ErrorMessage } from './component';

const errorMessage = '🔥';

const getErrorMessage = () =>
  shallow(<ErrorMessage errorMessage={errorMessage} />);

describe('<ErrorMessage />', () => {
  it('should render a single Semantic UI `Label` component', () => {
    const wrapper = getErrorMessage();
    expectComponentToBe(wrapper, Label);
  });

  describe('`Label`', () => {
    const getLabel = () => getErrorMessage().find('Label');

    it('should have the right props', () => {
      const wrapper = getLabel();
      expectComponentToHaveProps(wrapper, { color: 'red', pointing: 'below' });
    });

    it('should render the right children', () => {
      const wrapper = getErrorMessage();
      expectComponentToHaveChildren(wrapper, errorMessage);
    });
  });

  it('should have displayName `ErrorMessage`', () => {
    expectComponentToHaveDisplayName(ErrorMessage, 'ErrorMessage');
  });
});
