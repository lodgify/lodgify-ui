import React from 'react';
import { shallow } from 'enzyme';
import { Divider as SemanticDivider } from 'semantic-ui-react';

import { Component as Divider } from './component';

describe('<Divider />', () => {
  it('should render a single Semantic UI `Divider` component', () => {
    const divider = shallow(<Divider />);
    const actual = divider.find(SemanticDivider).length;
    expect(actual).toBe(1);
  });

  it('should pass the `Divider` component the right props', () => {
    const textInput = shallow(<Divider />);
    const actual = textInput.find('Divider').props();
    expect(actual).toEqual(
      expect.objectContaining({
        hidden: true,
      })
    );
  });

  it('should have `displayName` Divider', () => {
    const actual = Divider.displayName;
    expect(actual).toBe('Divider');
  });
});
