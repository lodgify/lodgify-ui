import React from 'react';
import { shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { propertyCharacteristics } from './mock-data/props';
import { Component as Characteristics } from './component';

const props = {
  spaceCharacteristics: propertyCharacteristics,
};

const getCharacteristics = props => shallow(<Characteristics {...props} />);

describe('<Characteristics />', () => {
  it('should have the correct structure', () => {
    const wrapper = getCharacteristics(props);

    expect(wrapper).toMatchSnapshot();
  });
  it('should have the correct structure', () => {
    const wrapper = getCharacteristics({ propertyCharacteristics: [] });

    expect(wrapper).toMatchSnapshot();
  });

  it('should have `displayName` `Characteristics`', () => {
    expectComponentToHaveDisplayName(Characteristics, 'Characteristics');
  });
});
