import React from 'react';
import { string } from 'prop-types';

import { Thumbnail } from 'media/Thumbnail';
import { testidFactory } from 'utils/testid';

const testid = testidFactory('avatar');

export const Component = ({ firstname, lastname, image }) => (
  <div className="avatar" data-testid={testid()}>
    {!!image ? (
      <Thumbnail data-testid={testid('image')} imageUrl={image} isCircular />
    ) : (
      <p data-testid={testid('text')}>
        {`${firstname[0]}${lastname[0]}`.toUpperCase()}
      </p>
    )}
  </div>
);

Component.displayName = 'Avatar';
Component.defaultProps = {
  firstname: ' ',
  lastname: ' ',
  image: null,
};
Component.propTypes = {
  firstname: string,
  image: string,
  lastname: string,
};
