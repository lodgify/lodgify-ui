import React from 'react';
import PropTypes from 'prop-types';

import { Heading } from 'typography/Heading';
import { Header } from 'collections/Header';
import { FullBleed } from 'media/FullBleed';
import { Container } from 'layout/Container';

/**
 * A standard Hero widget which displays a heading, header
 * and some extra content
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  backgroundImageUrl,
  extraContent,
  headerLogoSrc,
  headerLogoText,
  headerNavigationItems,
  headerPrimaryCTA,
  headerSearchBarGuestsOptions,
  headerSearchBarLocationOptions,
  heading,
}) => (
  <FullBleed className="is-hero" hasGradient imageUrl={backgroundImageUrl}>
    <Header
      logoSrc={headerLogoSrc}
      logoText={headerLogoText}
      navigationItems={headerNavigationItems}
      primaryCTA={headerPrimaryCTA}
      searchBarGuestsOptions={headerSearchBarGuestsOptions}
      searchBarLocationOptions={headerSearchBarLocationOptions}
    />
    <Heading size="huge">{heading}</Heading>
    <Container textAlign="center">{!!extraContent && extraContent}</Container>
  </FullBleed>
);

Component.displayName = 'Hero';

Component.defaultProps = {
  extraContent: null,
  headerLogoSrc: null,
  headerPrimaryCTA: null,
  headerSearchBarGuestsOptions: [],
  headerSearchBarLocationOptions: [],
  heading: null,
};

Component.propTypes = {
  /** The background image url of the hero. */
  backgroundImageUrl: PropTypes.string.isRequired,
  /** The extra content that will be displayed in a row underneath the heading. */
  extraContent: PropTypes.node,
  /** The src url for the logo in the header. */
  headerLogoSrc: PropTypes.string,
  /** The text for the logo in the header. */
  headerLogoText: PropTypes.string.isRequired,
  /** The items for a user to navigate the site. */
  headerNavigationItems: PropTypes.arrayOf(
    PropTypes.shape({
      /** The href url for an item which is a link. */
      href: PropTypes.string,
      /** Sub navigation items to display as a [`<Submenu />`](#submenu) under an item. */
      subItems: PropTypes.arrayOf(
        PropTypes.shape({
          href: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
        })
      ),
      /** The visible text for an item. */
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** An optional primary call to action to display as a [`<Button />`](#button) in the header. */
  headerPrimaryCTA: PropTypes.shape({
    /** The href url for the call to action. */
    href: PropTypes.string.isRequired,
    /** The  visible text for the call to action. */
    text: PropTypes.string.isRequired,
  }),
  /** The options which the user can select in the guests field in the search bar. */
  headerSearchBarGuestsOptions: PropTypes.arrayOf(
    PropTypes.shape({
      /** The visible text for the option. */
      text: PropTypes.string.isRequired,
      /** The underlying value for the option. */
      value: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
      ]),
    })
  ),
  /** The options which the user can select in the location field in the search bar. */
  headerSearchBarLocationOptions: PropTypes.arrayOf(
    PropTypes.shape({
      /** The visible text for the option. */
      text: PropTypes.string.isRequired,
      /** The underlying value for the option. */
      value: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
      ]),
    })
  ),
  /** The text for the heading displayed in the middle of the hero. */
  heading: PropTypes.string,
};
