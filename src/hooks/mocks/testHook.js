import React from 'react';
import { mount } from 'enzyme';

export const TestComponent = ({ callback }) => {
  callback();
  return null;
};

export const testHook = callback =>
  mount(<TestComponent callback={callback} />);
