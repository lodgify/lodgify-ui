import React from 'react';
import { mount } from 'enzyme';
import moment from 'moment';

import { getSearchBarModal } from './getSearchBarModal';

const props = {
  isModalOpen: false,
  modalHeadingText: 'Hello world',
  modalSummaryElement: null,
  onCloseModal: Function.prototype,
  searchButton: <div />,
};
const handleSubmit = () => {};
const persistInputChange = () => {};

const getModalMarkup = extraProps =>
  mount(
    <div>
      {getSearchBarModal(
        {
          ...props,
          ...extraProps,
        },
        {
          localtion: '',
          dates: {
            startDate: moment(),
            endDate: moment(),
          },
          guests: 1,
        },
        handleSubmit,
        persistInputChange
      )}
    </div>
  );

describe('getSearchBarModal', () => {
  it('should return the right structure', () => {
    const actual = getModalMarkup();

    expect(actual).toMatchSnapshot();
  });

  describe('if `props.modalSummaryElement` is passed', () => {
    it('should return the right structure', () => {
      const actual = getModalMarkup({
        modalSummaryElement: <div />,
      });

      expect(actual).toMatchSnapshot();
    });
  });
});
