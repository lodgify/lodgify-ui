import { Button } from 'semantic-ui-react';

import { ICON_NAMES } from 'elements/Icon';

import { renderNavButton } from './renderNavButton';

const onClick = Function.prototype;
const disabled = true;
const getButton = (iconName = ICON_NAMES.CHEVRON_LEFT) =>
  renderNavButton(iconName)(onClick, disabled);

describe('renderNavButton', () => {
  it('should return a function', () => {
    const actual = renderNavButton();
    expect(actual).toBeInstanceOf(Function);
  });

  describe('the returned function', () => {
    it('should should return a single Semantic UI `Button` component', () => {
      const actual = getButton().type;
      expect(actual).toBe(Button);
    });
  });

  describe('the `Button` component', () => {
    it('should get the right props', () => {
      const actual = getButton().props;
      expect(actual).toEqual(
        expect.objectContaining({
          primary: true,
          circular: true,
          disabled: disabled,
          onClick: onClick,
          content: null,
        })
      );
    });

    it('should have the right children', () => {
      const children = getButton().props.children;
      const actualName = children.type.displayName;
      const actualProps = children.props;
      expect(actualName).toBe('Icon');
      expect(actualProps).toEqual(
        expect.objectContaining({
          isColorInverted: true,
          name: ICON_NAMES.CHEVRON_LEFT,
        })
      );
    });
  });
});
