import React from 'react';
import { mount } from 'enzyme';

import { Component as SearchModal } from './component';

const props = {
  isModalOpen: false,
  modalHeadingText: 'Hello world',
  modalSummaryElement: null,
  onCloseModal: Function.prototype,
  searchButton: <div />,
  handleSubmit: () => {},
  onInputChange: f => f,
};

const getModalMarkup = extraProps =>
  mount(<SearchModal {...props} {...extraProps} />);

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
