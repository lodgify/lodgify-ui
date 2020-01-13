import React from 'react';
import { string, oneOf } from 'prop-types';
import { Menu, Image } from 'semantic-ui-react';
import classnames from 'classnames';

import { Heading } from 'typography/Heading';
import { Paragraph } from 'typography/Paragraph';
import { FlexContainer } from 'layout/FlexContainer';
import { testidFactory } from 'utils/testid';

const TEST_ID_PREFIX = 'logo';
const testid = testidFactory(TEST_ID_PREFIX);

export const Component = ({
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
    data-testid={testid()}
    href={logoHref}
    link
  >
    <FlexContainer flexDirection="column" justifyContent="center">
      {logoSrc ? (
        <Image
          alt={logoText}
          className={`${logoSize}-logo`}
          data-testid={testid('image')}
          sizes={logoSizes}
          src={logoSrc}
          srcSet={logoSrcSet}
        />
      ) : (
        <Heading className="header-title" size="small">
          {logoText}
        </Heading>
      )}
      {logoSubText && (
        <Paragraph
          data-testid={testid('subtext')}
          size="tiny"
          title={logoSubText}
        >
          {logoSubText}
        </Paragraph>
      )}
    </FlexContainer>
  </Menu.Item>
);

Component.displayName = 'Logo';

Component.defaultProps = {
  logoHref: '',
  logoSubText: '',
  logoSize: 'medium',
  logoSrc: undefined,
  logoSizes: undefined,
  logoText: '',
  logoSrcSet: undefined,
};

Component.propTypes = {
  /** The href for the logo link. */
  logoHref: string,
  /** The maximum size of the headers logo. */
  logoSize: oneOf(['medium', 'large', 'huge']),
  /** A list of one or more strings separated by commas indicating a set of source sizes for the logo. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  logoSizes: string,
  /** The src url for the logo. */
  logoSrc: string,
  /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use for the logo. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  logoSrcSet: string,
  /** The text that appears under the logo or logo text. */
  logoSubText: string,
  /** The text for the logo. */
  logoText: string,
};
