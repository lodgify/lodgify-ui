import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';
import { Button } from 'semantic-ui-react';

import { getArrayOfLengthOfItem } from 'utils/get-array-of-length-of-item';
import { getParagraphsFromStrings } from 'utils/get-paragraphs-from-strings';
import { Paragraph } from 'typography/Paragraph';
import { Modal } from 'elements/Modal';

import { descriptionText, extraDescriptionText } from '../mock-data/props';

import { getParagraphWithEllipsis } from './getParagraphWithEllipsis';
import { formatParagraphWithModal } from './formatParagraphWithModal';

const paragraphText =
  'Livingstone is a modern website template with clean and straight lines. Its special feature is a wide horizontal header photo slideshow in which logo and header navigation nicely blend in.';

const getMarkupAsRenderedComponent = () =>
  shallow(
    <div>
      {formatParagraphWithModal(
        paragraphText,
        descriptionText,
        extraDescriptionText
      )}
    </div>
  );

const getChildOfFragment = index =>
  getMarkupAsRenderedComponent()
    .children()
    .first()
    .children()
    .at(index);

describe('`formatParagraphWithModal`', () => {
  describe('the `Fragment`', () => {
    it('should render the right children', () => {
      const wrapper = getMarkupAsRenderedComponent()
        .children()
        .first();
      const string = getParagraphWithEllipsis(paragraphText);

      expectComponentToHaveChildren(wrapper, string, Modal);
    });
  });

  describe('the `Modal`', () => {
    const getModal = () => getChildOfFragment(1);

    it('should have the right props', () => {
      const wrapper = getModal(1);

      expectComponentToHaveProps(wrapper, {
        trigger: <Button basic>View more</Button>,
      });
    });

    it('should render the right children', () => {
      const wrapper = getModal();
      const numberOfParagraphs = getParagraphsFromStrings(
        descriptionText,
        extraDescriptionText
      ).length;

      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(numberOfParagraphs, Paragraph)
      );
    });

    describe('each `Paragraph`', () => {
      it('should have the right children', () => {
        const wrapper = getChildOfFragment(1)
          .find(Paragraph)
          .at(0);

        expectComponentToHaveChildren(wrapper, paragraphText);
      });
    });
  });
});
