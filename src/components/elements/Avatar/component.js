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
  /** The firstname used for the placeholder. */
  firstname: string,
  /** The image url to show as Avatar. */
  image: string,
  /** The lastname used for the placeholder. */
  lastname: string,
};
