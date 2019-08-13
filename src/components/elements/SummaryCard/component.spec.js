import { shallow } from 'enzyme';
import React from 'react';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { SummaryCard } from 'elements/SummaryCard';

const props = {
  propertyName: "La casa d'Argent",
  propertyType: 'Soterrani',
  ratingNumber: 4.5,
};

const getSummaryCard = extraProps =>
  shallow(<SummaryCard {...props} {...extraProps} />);

describe('SummaryCard', () => {
  it('should have the right shape', () => {
    const actual = getSummaryCard();

    expect(actual).toMatchSnapshot();
  });

  describe('if `ratingNumber` is falsy', () => {
    it('should return the right structure', () => {
      const actual = getSummaryCard({ ratingNumber: 0 });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('handleClick', () => {
    it('should call `props.onClick` with the right arguments', () => {
      const name = 'Argent';
      const onClick = jest.fn();
      const wrapper = getSummaryCard({ name, onClick });

      const syntheticEvent = 'an event';

      wrapper.instance().handleClick(syntheticEvent);

      expect(onClick).toHaveBeenCalledWith(name, syntheticEvent);
    });
  });

  it('should have `displayName` SummaryCard', () => {
    expectComponentToHaveDisplayName(SummaryCard, 'SummaryCard');
  });
});
