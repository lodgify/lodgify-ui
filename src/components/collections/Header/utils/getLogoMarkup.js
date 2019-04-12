import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import getClassNames from 'classnames';

import { Heading } from 'typography/Heading';
import { Paragraph } from 'typography/Paragraph';
import { FlexContainer } from 'layout/FlexContainer';

/**
 * @param  {string} logoHref
 * @param  {string} logoSubText
 * @param  {string} logoText
 * @param  {string} logoSrc
 * @param  {string} logoSizes
 * @param  {string} logoSrcSet
 * @return {Object}
 */
export const getLogoMarkup = (
  logoHref,
  logoSubText,
  logoText,
  logoSrc,
  logoSizes,
  logoSrcSet
) => (
  <Menu.Item
    className={getClassNames({
      'has-sub-text': !!logoSubText,
    })}
    href={logoHref}
    link
  >
    <FlexContainer flexDirection="column" justifyContent="center">
      {logoSrc ? (
        <Image
          alt={logoText}
          sizes={logoSizes}
          src={logoSrc}
          srcSet={logoSrcSet}
        />
      ) : (
        <Heading size="small">{logoText}</Heading>
      )}
      {logoSubText && <Paragraph size="tiny">{logoSubText}</Paragraph>}
    </FlexContainer>
  </Menu.Item>
);
