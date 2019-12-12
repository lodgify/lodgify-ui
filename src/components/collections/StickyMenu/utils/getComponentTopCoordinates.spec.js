import { menuItems } from '../mock-data/mock-data';

import { getComponentTopCoordinates } from './getComponentTopCoordinates';

const mockMath = Object.create(global.Math);

mockMath.abs = () => 9;
global.Math = mockMath;

describe('`getComponentTopCoordinates`', () => {
  it('should return an array of objects containing the `text` and the absolute top position of the components', () => {
    document.body.innerHTML = `
    <div>
    <div id="availability"></div>
    <div id="rates"></div>
    <div id="description"></div>
    <div id="reviews"></div>
    </div>
`;

    const actual = getComponentTopCoordinates(menuItems);

    expect(actual).toEqual([
      { text: 'availability', top: 9 },
      { text: 'rates', top: 9 },
      { text: 'reviews', top: 9 },
      { text: 'description', top: 9 },
    ]);
  });

  describe('if any component is not found', () => {
    it('should return top position as `0` instead', () => {
      document.body.innerHTML = `
      <div>
      <div id="POP"></div>
      <div id="rates"></div>
      <div id="description"></div>
      <div id="reviews"></div>
      </div>
  `;
      const actual = getComponentTopCoordinates(menuItems);

      expect(actual).toEqual([
        { text: 'availability', top: 0 },
        { text: 'rates', top: 9 },
        { text: 'reviews', top: 9 },
        { text: 'description', top: 9 },
      ]);
    });
  });
});
