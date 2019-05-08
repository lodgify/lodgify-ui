import 'semantic-ui-styles/card.less';
import React, { Fragment } from 'react';
import { Card } from 'semantic-ui-react';

import { TextPlaceholder } from 'elements/TextPlaceholder';
import { Divider } from 'elements/Divider';

/**
 * @return {Object}
 */
export const getCardsPlaceholderMarkup = () => (
  <Fragment>
    {['first', 'second', 'third'].map(item => (
      <Card fluid key={item}>
        <Card.Content>
          <Divider />
          <TextPlaceholder length="short" />
          <Divider />
          <TextPlaceholder length="medium" />
          <TextPlaceholder length="medium" />
          <TextPlaceholder length="medium" />
          <Divider size="huge" />
          <TextPlaceholder />
          <Divider />
          <TextPlaceholder />
          <Divider />
          <TextPlaceholder />
          <Divider />
        </Card.Content>
      </Card>
    ))}
  </Fragment>
);
