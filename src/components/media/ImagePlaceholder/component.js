import React from 'react';
import { string, oneOfType, number } from 'prop-types';
import classnames from 'classnames';

import { testidFactory } from 'utils/testid';
import { Icon } from 'elements/Icon';

const TEST_PREFIX = 'image-placeholder';
const testid = testidFactory(TEST_PREFIX);

export const Component = ({ className, title, width, height }) => (
  <figure
    className={classnames('image-placeholder', className)}
    data-testid={testid()}
    title={title}
  >
    <Icon name="placeholder" />
  </figure>
);

Component.displayName = 'ImagePlaceholder';
Component.defaultProps = {
  title: null,
  className: '',
};

Component.propTypes = {
  /** Additional ClassName to customize the placeholder. */
  className: string,
  /** The title of the figure that replace the image. */
  title: string
};
