import React from 'react';
import { mount } from 'enzyme';

import { testidSelectorFactory } from 'utils/testid';

import { Component as Gallery } from './component';

const props = {
  images: [
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

const testid = testidSelectorFactory('gallery');
const shallowGallery = props => mount(<Gallery {...props} />);

describe('`Gallery`', () => {
  it('should render a `Gallery` component', () => {
    const component = shallowGallery(props);

    expect(component.find(testid()).length).toEqual(1);
  });
});
