import { getAdditionalProps } from './getAdditionalProps';
import { getDefaultValue } from './getDefaultValue';
import { getValue } from './getValue';

describe('getAdditionalProps', () => {
  const defaultProps = {
    children: 'testing',
    items: [{ test: 'test' }],
  };

  describe('if `isSelectedDisabled` is true', () => {
    it('should return `value`', () => {
      const isSelectedDisabled = true;

      const actual = getAdditionalProps({
        ...defaultProps,
        isSelectedDisabled,
      });

      expect(actual).toEqual({
        value: getValue(isSelectedDisabled),
      });
    });
  });

  describe('if `isSelectedDisabled` is false', () => {
    it('should return `defaultValue`', () => {
      const isSelectedDisabled = false;

      const actual = getAdditionalProps({
        ...defaultProps,
        isSelectedDisabled,
      });

      expect(actual).toEqual({
        defaultValue: getDefaultValue(
          defaultProps.children,
          defaultProps.items,
          isSelectedDisabled
        ),
      });
    });
  });
});
