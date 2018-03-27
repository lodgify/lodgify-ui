import { Button } from 'semantic-ui-react';

import { renderNavButton } from './renderNavButton';

const onClick = Function.prototype;
const disabled = true;
const getButton = (leftOrRight = 'left') =>
  renderNavButton(leftOrRight)(onClick, disabled);

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
          icon: 'chevron left',
          onClick: onClick,
          content: null,
        })
      );
    });
  });
});
