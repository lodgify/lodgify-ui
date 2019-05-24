import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import {
  descriptionText,
  extraDescriptionText,
  propertyMainCharacteristics,
} from './mock-data/props';
import { Component as Description } from './component';

const props = {
  homeHighlights: [
    { iconName: 'credit card', text: 'credit cards' },
    { iconName: 'no children', text: 'no children allowed' },
  ],
  homeHighlightsHeadingText: 'Highlights',
  mainCharacteristicsIcons: {
    color: null,
    hasBorder: false,
    isCircular: false,
    isColorInverted: false,
    isDisabled: false,
    isLabelLeft: false,
    labelText: expect.any(String),
    labelWeight: null,
    name: expect.any(String),
    path: null,
    size: null,
  },
  propertyMainCharacteristics,
  propertyName: 'Yolo',
  propertyType: 'Bed & Breakfast',
};

const getDescription = extraProps =>
  mount(<Description {...props} {...extraProps} />);

describe('<Description />', () => {
  it('should have the correct structure', () => {
    const wrapper = getDescription();

    expect(wrapper).toMatchSnapshot();
  });

  describe('if `props.descriptionText` is defined', () => {
    it('should have the correct structure', () => {
      const wrapper = getDescription({ descriptionText });

      expect(wrapper).toMatchSnapshot();
    });

    describe('if `props.extraDescriptionText` is defined', () => {
      it('should have the correct structure', () => {
        const wrapper = getDescription({
          descriptionText,
          extraDescriptionText,
        });

        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  describe('if `props.homeHighlights` is empty', () => {
    it('should not render the home highlights', () => {
      const wrapper = getDescription({
        homeHighlights: [],
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should have `displayName` `Description`', () => {
    expectComponentToHaveDisplayName(Description, 'Description');
  });
});
