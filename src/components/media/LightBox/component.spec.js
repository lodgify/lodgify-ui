import React from 'react';
import { mount } from 'enzyme';

import { testidSelectorFactory } from 'utils/testid';

import { Component as LigthBox } from './component';

const props = {
  slideShowImages: [
    {
      url: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
      descriptionText: 'Two cats',
    },
    {
      url: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
      descriptionText: 'Two more cats',
    },
    {
      url: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
      descriptionText: 'Much cats',
    },
  ],
};

const testid = testidSelectorFactory('lightbox');
const shallowLightBox = props => mount(<LigthBox {...props} />);

describe('`LightBox`', () => {
  it('should render a `LightBox` component', () => {
    const component = shallowLightBox(props);

    expect(component.find(testid()).length).toEqual(1);
  });
});
