import React, { Component } from 'react';
import { Responsive } from 'semantic-ui-react';

import { TABLET_BREAKPOINT } from './constants';

/**
 * @param  {Function} WrappedComponent
 * @return {Function}
 */
export const withResponsive = WrappedComponent =>
  class WrapperComponent extends Component {
    state = {
      windowInnerWidth: undefined,
    };

    handleUpdate = event => {
      this.setState({ windowInnerWidth: event.target.innerWidth });
    };

    render = () => (
      <Responsive
        // Props consumed by `semantic-ui-react` `Responsive`.
        as={WrappedComponent}
        onUpdate={this.handleUpdate}
        // Props passed to `WrappedComponent` by this component.
        isUserOnMobile={this.state.windowInnerWidth < TABLET_BREAKPOINT}
        windowInnerWidth={this.state.windowInnerWidth}
        // All other props passed to `WrappedComponent`.
        {...this.props}
      />
    );

    static displayName = `WithResponsive(${WrappedComponent.displayName})`;
  };
