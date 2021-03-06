import React, { useRef, useEffect, useState } from 'react';
import { string, arrayOf, shape, func, bool } from 'prop-types';
import classnames from 'classnames';
import { Menu } from 'semantic-ui-react';
import { debounce } from 'debounce';

import { Submenu } from 'elements/Submenu';
import { size } from 'utils/size';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Link } from 'elements/Link';
import { Icon } from 'elements/Icon';
import { testidFactory } from 'utils/testid';
import { HorizontalGutters } from 'layout/HorizontalGutters';

import { HORIZONTAL_MENU_MARGINS } from './constants';

const TEST_ID_PREFIX = 'horizontalMenu';

const testid = testidFactory(TEST_ID_PREFIX);

export const Component = ({ items, onItemClick, hasOverflow, className }) => {
  const menuRef = useRef();
  const horizontalMenuRef = useRef();

  const [isArrowLeftActive, setIsArrowLeftActive] = useState(false);
  const [isArrowRightActive, setIsArrowRightActive] = useState(false);

  /* istanbul ignore next */
  const getArrowsOnScroll = () => {
    const menuPosition = menuRef.current.scrollLeft;
    const maxScroll = menuRef.current.scrollWidth - menuRef.current.clientWidth;

    if (menuPosition === 0 && maxScroll > 0) {
      setIsArrowLeftActive(false);
    } else {
      setIsArrowLeftActive(true);
    }

    if (menuPosition === maxScroll && maxScroll > 0) {
      setIsArrowRightActive(false);
    } else {
      setIsArrowRightActive(true);
    }
  };

  /* istanbul ignore next */
  const getArrowsOnResize = () => {
    const menuWrapper = menuRef.current;
    const menuWrapperContainer = horizontalMenuRef.current;

    const menuWrapperWidth = menuWrapper && menuWrapper.scrollWidth;

    const menuWrapperContainerWidth =
      menuWrapperContainer &&
      menuWrapperContainer.getBoundingClientRect().width -
        HORIZONTAL_MENU_MARGINS;

    if (menuWrapperContainerWidth < menuWrapperWidth) {
      setIsArrowLeftActive(true);
      setIsArrowRightActive(true);
    } else {
      setIsArrowLeftActive(false);
      setIsArrowRightActive(false);
    }
  };

  /* istanbul ignore next */
  useEffect(() => {
    getArrowsOnResize();

    if (menuRef.current && horizontalMenuRef.current) {
      global.window.addEventListener('resize', () =>
        debounce(getArrowsOnResize(), 150)
      );
    }

    if (menuRef.current) {
      menuRef.current.addEventListener('wheel', () => getArrowsOnScroll());

      return () => {
        menuRef.current.removeEventListener('wheel', getArrowsOnScroll);
        global.window.removeEventListener('resize', getArrowsOnResize);
      };
    }
  }, [menuRef.current]);

  const scrollTo = (begin = false) => {
    const domMenu = menuRef.current;
    const maxScroll = domMenu.scrollWidth - domMenu.clientWidth;

    domMenu.scrollLeft = begin ? 0 : maxScroll;
    getArrowsOnScroll();
  };

  return (
    <nav
      className={classnames('horizontal-menu', className, {
        'is-overflowed': hasOverflow,
      })}
      data-testid={testid()}
      ref={horizontalMenuRef}
    >
      <div
        className={classnames('arrow left', {
          'is-active': isArrowLeftActive,
        })}
        data-testid={testid('arrow-left')}
        onClick={() => {
          scrollTo(true);
        }}
        role="button"
      >
        <Icon name="chevron left" />
      </div>
      <HorizontalGutters>
        <Menu data-testid={testid('menu')}>
          <div
            className="menu-wrapper"
            data-testid={testid('menu-wrapper')}
            ref={menuRef}
          >
            {items.map((item, index) => {
              const { id, href, text, isActive, subItems } = item;

              return size(subItems) > 0 ? (
                <div className="item" key={buildKeyFromStrings(text, index)}>
                  <Submenu
                    isMenuItem
                    isSimple
                    isTriggerUnderlined={index === isActive}
                    isTriggeredOnHover
                    items={subItems}
                  >
                    {text}
                  </Submenu>
                </div>
              ) : (
                <Menu.Item
                  active={isActive}
                  data-testid={testid(`menu-item-${index}`)}
                  href={href}
                  key={`menu-item-${index}-${id || ''}`}
                  name={text}
                  onClick={onItemClick && (event => onItemClick(item, event))}
                >
                  <Link>{text}</Link>
                </Menu.Item>
              );
            })}
          </div>
        </Menu>
      </HorizontalGutters>
      <div
        className={classnames('arrow right', {
          'is-active': isArrowRightActive,
        })}
        data-testid={testid('arrow-right')}
        onClick={() => {
          scrollTo();
        }}
      >
        <Icon name="chevron right" />
      </div>
    </nav>
  );
};
Component.displayName = 'HorizontalMenu';

Component.defaultProps = {
  items: [],
  onItemClick: undefined,
  className: '',
  hasOverflow: null,
};

Component.propTypes = {
  /** The custom classes. */
  className: string,
  /** Is the menu displayed as a header. */
  hasOverflow: bool,
  /** The items of the menu. */
  items: arrayOf(
    shape({
      /** Id of the item to identify it. */
      id: string,
      /** The link triggered by clicking the Item. */
      href: string,
      /** The text written in the menu for the Item. */
      text: string.isRequired,
      /** The flag that indicate if the element is active or not. */
      isActive: bool,
      /** Sub navigation items to display as a [`<Submenu />`](#submenu) under an item. */
      subItems: arrayOf(
        shape({
          href: string,
          target: string,
          text: string.isRequired,
        })
      ),
    })
  ),
  /** The Callback execute when an Item is clicked */
  onItemClick: func,
};
