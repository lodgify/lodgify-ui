import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { images } from './mock-data/images';
import { Component as Pictures } from './component';

const getPictures = () =>
  mount(<Pictures galleryImages={images} thumbnailImages={images} />);

describe('<Pictures />', () => {
  it('should render the correct structure', () => {
    const actual = getPictures();

    expect(actual).toMatchSnapshot();
  });

  it('should have `displayName` `Pictures`', () => {
    expectComponentToHaveDisplayName(Pictures, 'Pictures');
  });
});
