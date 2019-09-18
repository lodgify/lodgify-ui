jest.mock('semantic-ui-react', () => {
  const { Component } = require('react');

  class Pushable extends Component {
    render() {
      // eslint-disable-next-line react/prop-types
      return <div>{this.props.children}</div>;
    }
  }

  class Pusher extends Component {
    render() {
      // eslint-disable-next-line react/prop-types
      return <div>{this.props.children}</div>;
    }
  }

  class Sidebar extends Component {
    static Pushable = Pushable;
    static Pusher = Pusher;
    render() {
      // eslint-disable-next-line react/prop-types
      return <div>{this.props.children}</div>;
    }
  }
  return { Sidebar };
});

import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Sidebar } from './component';

const renderSidebarContent = () => <div>Some content</div>;

const getSidebar = props =>
  mount(
    <Sidebar renderSidebarContent={renderSidebarContent} {...props}>
      '🚸'
    </Sidebar>
  );

describe('<Sidebar />', () => {
  it('should render the right structure', () => {
    const wrapper = getSidebar();

    expect(wrapper).toMatchSnapshot();
  });

  describe('if `hasCloseIcon` is `true`', () => {
    it('should render the right structure', () => {
      const wrapper = getSidebar({
        hasCloseIcon: true,
        onClickCloseIcon: () => {},
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `isVisible` is `true`', () => {
    it('should render the right structure', () => {
      const wrapper = getSidebar({
        isVisible: true,
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `willSlideFromTop` is `true`', () => {
    it('should render the right structure', () => {
      const wrapper = getSidebar({
        willSlideFromTop: true,
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should have displayName `Sidebar`', () => {
    expectComponentToHaveDisplayName(Sidebar, 'Sidebar');
  });
});
