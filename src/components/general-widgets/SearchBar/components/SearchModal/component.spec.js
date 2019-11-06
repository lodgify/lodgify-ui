import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount, shallow } from 'enzyme';

import { Modal } from 'elements/Modal';

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

const getShallowModalMarkup = extraProps =>
  shallow(<SearchModal {...props} {...extraProps} />);

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

  describe('if `onClose` is called', () => {
    it('should close the modal', () => {
      const actual = getModalMarkup();
      const modal = actual.find(Modal);

      modal.props().onClose();
      expect(modal.props().isOpen).toBe(false);
    });
  });

  describe('if the triggers `onClick` is called', () => {
    it('should open the modal', () => {
      const wrapper = getShallowModalMarkup();
      const trigger = shallow(wrapper.props().trigger);

      trigger.simulate('click');

      expect(wrapper.props().isOpen).toBe(true);
    });
  });
});
