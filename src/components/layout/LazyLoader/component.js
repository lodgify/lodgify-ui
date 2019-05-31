import React, { PureComponent, Fragment } from 'react';
import { debounce } from 'debounce';
import PropTypes from 'prop-types';

import { getIsTopComponentVisible } from './utils/getIsTopComponentVisible';
import { getComponentToRender } from './utils/getComponentToRender';
import { getComponentToRenderProps } from './utils/getComponentToRenderProps';
import { getIsBottomComponentVisible } from './utils/getIsBottomComponentVisible';
import { getComponentPosition } from './utils/getComponentPosition';

/**
 * A wrapper which intercepts props being passed to a child
 * component until it is inside the client viewport
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export class Component extends PureComponent {
  state = {
    shouldRender: false,
  };

  componentDidMount = () => {
    this.addEventListeners();
    this.getShouldComponentRender();
  };

  componentWillUnmount = () => this.removeEventListeners();

  getShouldComponentRender = () => {
    if (
      !getComponentPosition(this.topComponent) ||
      !getComponentPosition(this.bottomComponent)
    )
      return;

    const windowHeight = window.innerHeight;

    const isTopComponentVisible = getIsTopComponentVisible(
      getComponentPosition(this.topComponent),
      windowHeight
    );

    const isBottomComponentVisible = getIsBottomComponentVisible(
      getComponentPosition(this.bottomComponent),
      windowHeight
    );

    if (isTopComponentVisible || isBottomComponentVisible) {
      this.setState({
        shouldRender: true,
      });

      this.removeEventListeners();
    }
  };

  debouncedGetShouldComponentRender = debounce(
    this.getShouldComponentRender,
    10
  );

  addEventListeners = () => {
    global.window.addEventListener(
      'scroll',
      this.debouncedGetShouldComponentRender,
      true
    );
    global.window.addEventListener(
      'resize',
      this.debouncedGetShouldComponentRender,
      true
    );
  };

  removeEventListeners = () => {
    global.window.removeEventListener(
      'scroll',
      this.debouncedGetShouldComponentRender,
      true
    );
    global.window.removeEventListener(
      'resize',
      this.debouncedGetShouldComponentRender,
      true
    );
  };

  createTopComponentRef = component => (this.topComponent = component);

  createBottomComponentRef = component => (this.bottomComponent = component);

  render = () => {
    const { lazyComponent, lazyProps, componentProps } = this.props;
    const { shouldRender } = this.state;
    const componentToRenderProps = getComponentToRenderProps(
      shouldRender,
      componentProps,
      lazyProps
    );
    const componentToRender = getComponentToRender(
      lazyComponent,
      shouldRender,
      componentToRenderProps,
      lazyProps
    );

    return (
      <Fragment>
        <div ref={this.createTopComponentRef} />
        {componentToRender}
        <div ref={this.createBottomComponentRef} />
      </Fragment>
    );
  };
}

Component.displayName = 'LazyLoader';

Component.defaultProps = {
  componentProps: undefined,
  lazyProps: undefined,
};

Component.propTypes = {
  /** The props that will be passed to the component. */
  // eslint-disable-next-line react/forbid-prop-types
  componentProps: PropTypes.object,
  /** The component to render when scrolled to component's position. */
  lazyComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    .isRequired,
  /** The props that will be passed when scrolled to the component's position. */
  // eslint-disable-next-line react/forbid-prop-types
  lazyProps: PropTypes.object,
};
