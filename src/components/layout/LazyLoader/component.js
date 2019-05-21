import React, { PureComponent } from 'react';
import { debounce } from 'debounce';
import PropTypes from 'prop-types';

import { getIsVisible } from './utils/getIsVisible';
import { getComponentToRender } from './utils/getComponentToRender';
import { getComponentToRenderProps } from './utils/getComponentToRenderProps';

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

  createComponentRef = component => (this.component = component);

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

    return <div ref={this.createComponentRef}>{componentToRender}</div>;
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
