import 'semantic-ui-styles/card.less';
import React, { Fragment } from 'react';
import { Card } from 'semantic-ui-react';

import { BlockPlaceholder } from 'elements/BlockPlaceholder';
import { Divider } from 'elements/Divider';
import { TextPlaceholder } from 'elements/TextPlaceholder';

/**
 * @return {Object}
 */
export const getCardPlaceholderMarkup = () => (
  <Fragment>
    <BlockPlaceholder isRectangular />
    <Card.Content>
      <Card.Header>
        <Divider size="small" />
        <TextPlaceholder length="medium" />
        <TextPlaceholder length="long" />
        <TextPlaceholder length="long" />
      </Card.Header>
    </Card.Content>
  </Fragment>
);
