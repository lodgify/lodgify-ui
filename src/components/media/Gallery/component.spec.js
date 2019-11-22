import React from 'react';
import { shallow } from 'enzyme';

import { testidSelectorFactory } from 'utils/testid';

import { Component as Gallery } from './component';

const images = [
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
];

const trigger = 'someTrigger';

const testid = testidSelectorFactory('gallery');
const shallowGallery = () =>
  shallow(<Gallery images={images} trigger={trigger} />);

describe('`Gallery`', () => {
  it('should render a `Gallery` component', () => {
    const component = shallowGallery();

    expect(component.find(testid()).length).toEqual(1);
  });
});
