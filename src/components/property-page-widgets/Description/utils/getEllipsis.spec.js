import { getEllipsis } from './getEllipsis';

const paragraphText =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius provident eum, dignissimos accusantium ipsum nisi sequi cupiditate aut placeat nostrum iste, tempora nulla, tenetur dolorem inventore alias necessitatibus in optio.';

describe('the getEllipsis util', () => {
  it('should return a String with the right ellipsis', () => {
    const ellipsis = getEllipsis(paragraphText);
    expect(ellipsis).toEqual('..');
  });
});
