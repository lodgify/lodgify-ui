import { withLazyLoad } from 'utils/with-lazy-load';

import { IMAGE_URL, SRC_SET } from './constants';
import { Component } from './component';

export const ResponsiveImage = withLazyLoad(IMAGE_URL, SRC_SET)(Component);
