import React from 'react';
import { shallow, mount } from 'enzyme';
import Responsive from 'semantic-ui-react/dist/commonjs/addons/Responsive';
import {
  expectComponentToBe,
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import { withResponsive } from './withResponsive';

const WrappedComponent = () => <div>🚸</div>;
const WrapperComponent = withResponsive(WrappedComponent);

describe('withResponsive', () => {
  it('should be return a Wrapper component', () => {
    const actual = withResponsive(WrappedComponent);

    expect(actual).toBeInstanceOf(Function);
  });

  describe('the Wrapper component', () => {
    const getWrapper = () => shallow(<WrapperComponent some="prop" />);

    it('should render a Semantic UI `Responsive` component', () => {
      const wrapper = getWrapper();

      expectComponentToBe(wrapper, Responsive);
    });

    describe('the `Responsive` component', () => {
      it('should get the right props', () => {
        const wrapper = getWrapper();

        expectComponentToHaveProps(wrapper, {
          as: WrappedComponent,
          onUpdate: expect.any(Function),
          isUserOnMobile: expect.any(Boolean),
          windowInnerWidth: global.innerWidth,
          some: 'prop',
        });
      });
    });

    it('should have `displayName` `Amenities`', () => {
      const component = withResponsive(WrappedComponent);

      expectComponentToHaveDisplayName(component, 'WithResponsive(undefined)');
    });

    describe('Event: onUpdate', () => {
      it('should persist the window innerWidth in component state', () => {
        const event = { target: { innerWidth: '🐸' } };
        const wrapper = mount(<WrapperComponent some="prop" />);
        const responsiveComponent = wrapper.find(Responsive);

        responsiveComponent.prop('onUpdate')(event);
        const actual = wrapper.state('windowInnerWidth');

        expect(actual).toBe(event.target.innerWidth);
      });
    });
  });
});
