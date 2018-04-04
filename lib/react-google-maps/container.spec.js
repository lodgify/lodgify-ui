import React from 'react';
import { mount } from 'enzyme';

import { Container } from './container';

const props = {
  latitude: 0,
  longitude: 0,
};

const getReactGoogleMaps = () => mount(<Container {...props} />);

describe('<ReactGoogleMaps />', () => {
  it('should render `withProps` as the top level HOC', () => {
    const wrapper = getReactGoogleMaps();
    const actual = wrapper.name();
    expect(actual).toEqual(expect.stringMatching(/^withProps/));
  });

  describe('the `withProps` HOC', () => {
    it('should get the right props', () => {
      const wrapper = getReactGoogleMaps();
      const actual = wrapper.props();
      expect(actual).toEqual(expect.objectContaining(props));
    });
  });

  it('should render `withScriptjs` as the second level HOC', () => {
    const wrapper = getReactGoogleMaps();
    const actual = wrapper.childAt(0).name();
    expect(actual).toEqual(expect.stringMatching(/^withScriptjs/));
  });

  describe('the `withScriptjs` HOC', () => {
    it('should get the right props', () => {
      const wrapper = getReactGoogleMaps();
      const actual = wrapper.childAt(0).props();
      expect(actual).toEqual(
        expect.objectContaining({
          googleMapURL: expect.any(String),
          loadingElement: expect.any(Object),
        })
      );
    });
  });

  it('should render `withGoogleMap` as the third level HOC', () => {
    const wrapper = getReactGoogleMaps();
    console.log('before:');
    console.log(
      wrapper
        .childAt(0)
        .childAt(0)
        .name()
    );
    wrapper
      .childAt(0)
      .instance()
      .handleLoaded();
    console.log('after:');
    console.log(
      wrapper
        .childAt(0)
        .childAt(0)
        .name()
    );
    const actual = wrapper
      .childAt(0)
      .childAt(0)
      .name();
    expect(actual).toEqual(expect.stringMatching(/^withGoogleMap/));
  });

  // describe('the `withGoogleMap` HOC', () => {
  //   it('should get the right props', () => {
  //     const wrapper = getReactGoogleMaps();
  //     console.log(wrapper.childAt(0).name());
  //     const actual = wrapper
  //       .childAt(0)
  //       .childAt(0)
  //       .props();
  //     expect(actual).toEqual(
  //       expect.objectContaining({
  //         googleMapURL: expect.any(String),
  //         loadingElement: expect.any(Object),
  //       })
  //     );
  //   });
  // });
});
