import { getGroupedNavigationItems } from './getGroupedNavigationItems';

describe('getGroupedNavigationItems', () => {
  it('should return an object with the right shape', () => {
    const testCases = [
      {
        before: [
          { href: '/', text: 'Home' },
          { href: '/contact', text: 'Contact' },
          { href: '/pool', text: 'Pool' },
          {
            text: 'The Property',
            subItems: [
              { href: '/pool', text: 'Pool' },
              { href: '/spa', text: 'Spa' },
              { href: '/tennis-court', text: 'Tennis Court' },
              { href: '/gym', text: 'Gym' },
            ],
          },
        ],
        after: [
          {
            subItems: [
              { href: '/', text: 'Home' },
              { href: '/contact', text: 'Contact' },
              { href: '/pool', text: 'Pool' },
            ],
          },
          {
            text: 'The Property',
            subItems: [
              { href: '/pool', text: 'Pool' },
              { href: '/spa', text: 'Spa' },
              { href: '/tennis-court', text: 'Tennis Court' },
              { href: '/gym', text: 'Gym' },
            ],
          },
        ],
      },
      {
        before: [
          { href: '/', text: 'Home' },
          {
            text: 'The Property',
            subItems: [
              { href: '/pool', text: 'Pool' },
              { href: '/spa', text: 'Spa' },
              { href: '/tennis-court', text: 'Tennis Court' },
              { href: '/gym', text: 'Gym' },
            ],
          },
          { href: '/contact', text: 'Contact' },
          { href: '/pool', text: 'Pool' },
        ],
        after: [
          {
            subItems: [{ href: '/', text: 'Home' }],
          },
          {
            text: 'The Property',
            subItems: [
              { href: '/pool', text: 'Pool' },
              { href: '/spa', text: 'Spa' },
              { href: '/tennis-court', text: 'Tennis Court' },
              { href: '/gym', text: 'Gym' },
            ],
          },
          {
            subItems: [
              { href: '/contact', text: 'Contact' },
              { href: '/pool', text: 'Pool' },
            ],
          },
        ],
      },
      {
        before: [
          { href: '/', text: 'Home' },
          {
            text: 'The Property',
            subItems: [
              { href: '/pool', text: 'Pool' },
              { href: '/spa', text: 'Spa' },
              { href: '/tennis-court', text: 'Tennis Court' },
              { href: '/gym', text: 'Gym' },
            ],
          },
          { href: '/contact', text: 'Contact' },
          {
            text: 'The Owners',
            subItems: [
              { href: '/cats', text: 'They are cats' },
              { href: '/cute-cats', text: 'They are cute cats' },
            ],
          },
          { href: '/pool', text: 'Pool' },
        ],
        after: [
          {
            subItems: [{ href: '/', text: 'Home' }],
          },
          {
            text: 'The Property',
            subItems: [
              { href: '/pool', text: 'Pool' },
              { href: '/spa', text: 'Spa' },
              { href: '/tennis-court', text: 'Tennis Court' },
              { href: '/gym', text: 'Gym' },
            ],
          },
          {
            subItems: [{ href: '/contact', text: 'Contact' }],
          },
          {
            text: 'The Owners',
            subItems: [
              { href: '/cats', text: 'They are cats' },
              { href: '/cute-cats', text: 'They are cute cats' },
            ],
          },
          {
            subItems: [{ href: '/pool', text: 'Pool' }],
          },
        ],
      },
      {
        before: [{ text: 'Home' }, { subItems: null }, { href: '/' }],
        after: [{ text: 'Home' }, { subItems: [{ href: '/' }] }],
      },
    ];
    testCases.forEach(({ before, after }) => {
      const actual = getGroupedNavigationItems(before);
      expect(actual).toEqual(after);
    });
  });
});
