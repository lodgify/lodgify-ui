import React from 'react';
import { shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as ErrorMessage } from './component';

const errorMessage = '🔥';

describe('<ErrorMessage />', () => {
  it('should render a single Semantic UI `Label` component', () => {
    const textInput = shallow(<ErrorMessage errorMessage={errorMessage} />);
    const actual = textInput.find('Label').length;
    expect(actual).toBe(1);
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
