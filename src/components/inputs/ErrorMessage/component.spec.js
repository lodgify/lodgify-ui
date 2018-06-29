import React from 'react';
import { shallow } from 'enzyme';
import { Label } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Component as ErrorMessage } from './component';

const errorMessage = '🔥';

describe('<ErrorMessage />', () => {
  it('should render a single Semantic UI `Label` component', () => {
    const wrapper = shallow(<ErrorMessage errorMessage={errorMessage} />);
    expectComponentToBe(wrapper, Label);
  });

  it('should pass the right props to `Label`', () => {
    const textInput = shallow(<ErrorMessage errorMessage={errorMessage} />);
    const actual = textInput.find('Label').props();
    expect(actual).toEqual(
      expect.objectContaining({ color: 'red', pointing: 'below' })
    );
  });

  it('should render `props.errorMessage`', () => {
    const textInput = shallow(<ErrorMessage errorMessage={errorMessage} />);
    const actual = textInput.contains(errorMessage);
    expect(actual).toBe(true);
  });

  it('should have displayName `ErrorMessage`', () => {
    expectComponentToHaveDisplayName(ErrorMessage, 'ErrorMessage');
  });
});
