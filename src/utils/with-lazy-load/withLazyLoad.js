import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { omit, pick } from 'lodash';

import { LazyLoader } from 'layout/LazyLoader';

/**
 * @param  {string[]} lazyPropsKeys
 * @return {Function}
 */
export const withLazyLoad = (...lazyPropsKeys) => WrappedComponent =>
  class WrapperComponent extends Component {
    static displayName = `withLazyLoad(${WrappedComponent.displayName})`;

    static defaultProps = {
      isLazyLoaded: false,
    };

    static propTypes = {
      isLazyLoaded: PropTypes.bool,
    };

    render = () => {
      const lazyProps = pick(this.props, lazyPropsKeys);
      const componentProps = omit(this.props, lazyPropsKeys);
      const { isLazyLoaded } = this.props;

      if (isLazyLoaded) {
        return (
          <LazyLoader
            componentProps={componentProps}
            lazyComponent={WrappedComponent}
            lazyProps={lazyProps}
          />
        );
      }

      return <WrappedComponent {...this.props} />;
    };
  };
