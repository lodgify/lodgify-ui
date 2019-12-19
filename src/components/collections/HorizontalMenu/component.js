import React, { useRef, useEffect } from 'react';
import { string, arrayOf, shape, func, bool } from 'prop-types';
import classnames from 'classnames';
import { Menu } from 'semantic-ui-react';

import { Link } from 'elements/Link';
import { Icon } from 'elements/Icon';
import { testidFactory } from 'utils/testid';

import { SCROLL_DELTA } from './constants';

const TEST_ID_PREFIX = 'horizontalMenu';

const testid = testidFactory(TEST_ID_PREFIX);

export const Component = ({ items, onItemClick, className }) => {
  const menuRef = useRef();

  /* istanbul ignore next */
  useEffect(() => {
    const wheelListener = event => {
      event.preventDefault();
      menuRef.current.scrollLeft =
        menuRef.current.scrollLeft + event.deltaX * SCROLL_DELTA;
    };

    if (menuRef.current) {
      menuRef.current.addEventListener('wheel', wheelListener);
    }
    return () => {
      menuRef.current.removeEventListener('whell', wheelListener);
    };
  }, [menuRef.current]);

  const scrollTo = (begin = false) => {
    const domMenu = menuRef.current;
    const maxScroll = domMenu.scrollWidth - domMenu.clientWidth;

    domMenu.scrollLeft = begin ? 0 : maxScroll;
  };

  return (
    <nav
      className={classnames('horizontal-menu', className)}
      data-testid={testid()}
    >
      <div
        className="arrow left"
        data-testid={testid('arrow-left')}
        onClick={() => scrollTo(true)}
        role="button"
      >
        <Icon name="chevron left" />
      </div>
      <Menu data-testid={testid('menu')}>
        <div
          className="menu-wrapper"
          data-testid={testid('menu-wrapper')}
          ref={menuRef}
        >
          {items.map((item, index) => {
            const { id, link, text, isActive } = item;

            return (
              <Menu.Item
                active={isActive}
                data-testid={testid(`menu-item-${index}`)}
                href={link}
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
      <div
        className="arrow right"
        data-testid={testid('arrow-right')}
        onClick={() => scrollTo()}
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
};

Component.propTypes = {
  /** The custom classes. */
  className: string,
  /** The items of the menu. */
  items: arrayOf(
    shape({
      /** Id of the item to identify it. */
      id: string,
      /** The link triggered by clicking the Item. */
      link: string,
      /** The text written in the menu for the Item. */
      text: string.isRequired,
      /** The flag that indicate if the element is active or not. */
      isActive: bool,
    })
  ),
  /** The Callback execute when an Item is clicked */
  onItemClick: func,
};
