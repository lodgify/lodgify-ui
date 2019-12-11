import React from 'react';
import { string } from 'prop-types';

import { Thumbnail } from 'media/Thumbnail';
import { testidFactory } from 'utils/testid';

const testid = testidFactory('avatar');

export const Component = ({ firstName, lastName, image }) => (
  <div className="avatar" data-testid={testid()}>
    {!!image ? (
      <Thumbnail data-testid={testid('image')} imageUrl={image} isCircular />
    ) : (
      <p data-testid={testid('text')}>
        {`${firstName[0]}${lastName[0]}`.toUpperCase()}
      </p>
    )}
  </div>
);

Component.displayName = 'Avatar';
Component.defaultProps = {
  firstName: ' ',
  lastName: ' ',
  image: null,
};
Component.propTypes = {
  /** The first name used for the placeholder. */
  firstName: string,
  /** The image url to show as Avatar. */
  image: string,
  /** The last name used for the placeholder. */
  lastName: string,
};
