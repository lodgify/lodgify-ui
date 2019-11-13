import React from 'react';
import { string, oneOf } from 'prop-types';
import { Menu, Image } from 'semantic-ui-react';
import classnames from 'classnames';

import { Heading } from 'typography/Heading';
import { Paragraph } from 'typography/Paragraph';
import { FlexContainer } from 'layout/FlexContainer';

export const HeaderLogo = ({
  logoHref,
  logoSubText,
  logoText,
  logoSrc,
  logoSize,
  logoSizes,
  logoSrcSet,
}) => (
  <Menu.Item
    className={classnames({
      'has-sub-text': !!logoSubText,
    })}
    href={logoHref}
    link
  >
    <FlexContainer flexDirection="column" justifyContent="center">
      {logoSrc ? (
        <Image
          alt={logoText}
          className={`${logoSize}-logo`}
          sizes={logoSizes}
          src={logoSrc}
          srcSet={logoSrcSet}
        />
      ) : (
        <Heading className="header-title" size="small">
          {logoText}
        </Heading>
      )}
      {logoSubText && <Paragraph size="tiny">{logoSubText}</Paragraph>}
    </FlexContainer>
  </Menu.Item>
);

HeaderLogo.displayName = 'HeaderLogo';

HeaderLogo.defaultProps = {
  logoHref: '',
  logoSubText: '',
  logoSize: 'medium',
  logoSrc: undefined,
  logoSizes: undefined,
  logoText: '',
  logoSrcSet: undefined,
};

HeaderLogo.propTypes = {
  logoHref: string,
  logoSize: oneOf(['medium', 'large', 'huge']),
  logoSizes: string,
  logoSrc: string,
  logoSrcSet: string,
  logoSubText: string,
  logoText: string,
};
