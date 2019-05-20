import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Accordion } from 'semantic-ui-react';
import { size } from 'lodash';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Icon, ICON_NAMES } from 'elements/Icon';
import { Modal } from 'elements/Modal';
import { Divider } from 'elements/Divider';

import { getLogoMarkup } from '../getLogoMarkup';
import { getLinkMarkup } from '../getLinkMarkup';

import { getScrollToHeight } from './utils/getScrollToHeight';
import { getIsAccordionInView } from './utils/getIsAccordionInView';

export class Component extends React.PureComponent {
  state = {
    activeAccordionItem: null,
  };

  componentDidUpdate = () => {
    const { activeAccordionItem } = this.state;

    if (activeAccordionItem && !getIsAccordionInView(activeAccordionItem)) {
      const bottomOfActiveAccordionItem = activeAccordionItem.getBoundingClientRect()
        .bottom;
      const currentScrollHeight = activeAccordionItem.offsetParent.scrollTop;

      activeAccordionItem.offsetParent.scrollTop = getScrollToHeight(
        currentScrollHeight,
        bottomOfActiveAccordionItem
      );
    }
  };

  createMenuRef = menu => (this.menu = menu);

  handleAccordionTitleClick = event => {
    if (this.state.activeAccordionItem === event.currentTarget.offsetParent) {
      this.forceUpdate();
      return;
    }
    this.setState({ activeAccordionItem: event.currentTarget.offsetParent });
  };

  render = () => {
    const {
      activeNavigationItemIndex,
      logoHref,
      logoSizes,
      logoSrc,
      logoSrcSet,
      logoText,
      navigationItems,
    } = this.props;

    return (
      <Menu.Item>
        <Modal
          header={getLogoMarkup(
            logoHref,
            null,
            logoText,
            logoSrc,
            logoSizes,
            logoSrcSet
          )}
          isFullscreen
          trigger={<Icon name={ICON_NAMES.BARS} />}
        >
          <div ref={this.createMenuRef}>
            <Menu text vertical>
              {navigationItems.map(
                (
                  { subItems, text, target: navigationItemTarget, href },
                  index
                ) =>
                  size(subItems) ? (
                    <Accordion
                      as={Menu.Item}
                      key={buildKeyFromStrings(text, index)}
                      onTitleClick={this.handleAccordionTitleClick}
                      panels={[
                        {
                          title: {
                            content: text,
                            key: buildKeyFromStrings(text, index),
                          },
                          content: {
                            content: subItems.map(
                              ({ text, target: subItemTarget, href }, index) =>
                                getLinkMarkup(
                                  text,
                                  href,
                                  subItemTarget,
                                  index,
                                  activeNavigationItemIndex
                                )
                            ),
                            key: buildKeyFromStrings(index, text),
                          },
                        },
                      ]}
                    />
                  ) : (
                    getLinkMarkup(
                      text,
                      href,
                      navigationItemTarget,
                      index,
                      activeNavigationItemIndex
                    )
                  )
              )}
              <Divider size="huge" />
            </Menu>
          </div>
        </Modal>
      </Menu.Item>
    );
  };
}

Component.defaultProps = {
  activeNavigationItemIndex: null,
  logoHref: '/',
  logoSizes: undefined,
  logoSrc: null,
  logoSrcSet: undefined,
  primaryCTA: null,
};

Component.propTypes = {
  /** The index of the active navigation item. */
  activeNavigationItemIndex: PropTypes.number,
  /** The href for the logo link. */
  logoHref: PropTypes.string,
  /** A list of one or more strings separated by commas indicating a set of source sizes for the logo. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  logoSizes: PropTypes.string,
  /** The src url for the logo. */
  logoSrc: PropTypes.string,
  /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use for the logo. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  logoSrcSet: PropTypes.string,
  /** The text for the logo. */
  logoText: PropTypes.string.isRequired,
  /** The items for a user to navigate the site. */
  // eslint-disable-next-line react/no-unused-prop-types
  navigationItems: PropTypes.arrayOf(
    PropTypes.shape({
      /** The href url for an item which is a link. */
      href: PropTypes.string,
      /** Sub navigation items to display as a [`<Submenu />`](#submenu) under an item. */
      subItems: PropTypes.arrayOf(
        PropTypes.shape({
          href: PropTypes.string.isRequired,
          target: PropTypes.string,
          text: PropTypes.string.isRequired,
        })
      ),
      /** Specifies where to display the linked navigation items URL. See [MDN docs `<a />` for more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target). */
      target: PropTypes.string,
      /** The visible text for an item. */
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** An optional primary call to action to display as a [`<Button />`](#button). */
  primaryCTA: PropTypes.shape({
    /** The on click handler for the call to action. */
    onClick: PropTypes.func.isRequired,
    /** The visible text for the call to action. */
    text: PropTypes.string.isRequired,
  }),
};
