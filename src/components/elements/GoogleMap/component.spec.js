// import React from 'react';
// import { shallow } from 'enzyme';

import { Component as GoogleMap } from './component';

// const getMap = props => shallow(<Map {...props} />);

describe('<GoogleMap />', () => {
  it('should have `displayName` GoogleMap', () => {
    const actual = GoogleMap.displayName;
    expect(actual).toBe('GoogleMap');
  });
});
