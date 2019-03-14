import React, { PureComponent } from 'react';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';

import { getIsVisible } from './utils/getIsVisible';

/**
 * A wrapper that renders components when they are visible.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export class Component extends PureComponent {
  state = {
    shouldRender: false,
  };

  componentDidMount = () => {
    this.addEventListeners();
    this.shouldComponentRender();
  };

  componentWillUnmount = () => this.removeEventListeners();

  shouldComponentRender = () => {
    if (!this.component || !this.component.getBoundingClientRect) return;

    const windowHeight = window.innerHeight;
    const boundingClientRect = this.component.getBoundingClientRect();

    const isComponentVisible = getIsVisible(boundingClientRect, windowHeight);

    if (isComponentVisible) {
      this.setState({
        shouldRender: isComponentVisible,
      });

      this.removeEventListeners();
    }
  };

  debouncedShouldComponentRender = debounce(this.shouldComponentRender, 10);

  addEventListeners = () => {
    global.window.addEventListener(
      'scroll',
      this.debouncedShouldComponentRender
    );
    global.window.addEventListener(
      'resize',
      this.debouncedShouldComponentRender
    );
  };

  removeEventListeners = () => {
    global.window.removeEventListener(
      'scroll',
      this.debouncedShouldComponentRender
    );
    global.window.removeEventListener(
      'resize',
      this.debouncedShouldComponentRender
    );
  };

  createComponentRef = component => (this.component = component);

  render = () => {
    const { lazyComponent, lazyProps, componentProps } = this.props;

    const componentToRenderProps =
      componentProps !== undefined && this.state.shouldRender
        ? {
            ...lazyProps,
            ...componentProps,
          }
        : componentProps;

    const componentToRender =
      lazyProps !== undefined || this.state.shouldRender
        ? React.cloneElement(lazyComponent, componentToRenderProps)
        : null;

    return <div ref={this.createComponentRef}>{componentToRender}</div>;
  };
}

Component.displayName = 'LazyLoader';

Component.defaultProps = {
  componentProps: undefined,
  lazyProps: undefined,
};

Component.propTypes = {
  /** The props that will be passed to the component regardless of it's visibility. */
  // eslint-disable-next-line react/forbid-prop-types
  componentProps: PropTypes.object,
  /** The component that will be render when visible. */
  lazyComponent: PropTypes.node.isRequired,
  /** The props that will be passed to the component when it's visible. */
  // eslint-disable-next-line react/forbid-prop-types
  lazyProps: PropTypes.object,
};
