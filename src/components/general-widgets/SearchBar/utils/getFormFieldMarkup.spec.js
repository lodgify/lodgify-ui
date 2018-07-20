import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';
import { Form } from 'semantic-ui-react';

import { Icon } from 'elements/Icon';
import { Dropdown } from 'inputs/Dropdown';
import { DateRangePicker } from 'inputs/DateRangePicker';

import { getFormFieldMarkup } from './getFormFieldMarkup';

const componentProps = {
  isShowingSummary: true,
  isShowingLocationDropdown: true,
  getIsDayBlocked: Function.prototype,
  locationOptions: [],
  guestsOptions: [],
  searchButton: <div />,
};

const getMarkup = overrideProps =>
  shallow(
    <div>
      {getFormFieldMarkup(
        {
          ...componentProps,
          ...overrideProps,
        },
        Function.prototype,
        false
      )}
    </div>
  );

describe('getFormFieldMarkup', () => {
  it('should return 5 `Form.Field`', () => {
    const wrapper = getMarkup().find(Form.Field);
    expect(wrapper).toHaveLength(5);
  });

  describe('first `Form.Field`', () => {
    const getField = () =>
      getMarkup()
        .find(Form.Field)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getField();
      expectComponentToHaveProps(wrapper, {
        width: 'three',
      });
    });
    it('should have the correct children', () => {
      const wrapper = getField();
      expectComponentToHaveChildren(wrapper, Icon);
    });
  });

  describe('first `Icon`', () => {
    it('should have the right props', () => {
      const wrapper = getMarkup()
        .find(Icon)
        .at(0);
      expectComponentToHaveProps(wrapper, {
        name: 'home',
        labelText: 'Property Summary',
      });
    });
  });

  describe('second `Form.Field`', () => {
    const getField = () =>
      getMarkup()
        .find(Form.Field)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getField();
      expectComponentToHaveProps(wrapper, {
        width: 'three',
      });
    });
    it('should have the correct children', () => {
      const wrapper = getField();
      expectComponentToHaveChildren(wrapper, Dropdown);
    });
  });
  describe('first `Dropdown`', () => {
    it('should have the right props', () => {
      const wrapper = getMarkup()
        .find(Dropdown)
        .at(0);

      expectComponentToHaveProps(wrapper, {
        icon: 'map pin',
        label: 'Location',
        onChange: expect.any(Function),
      });
    });
  });

  describe('third `Form.Field`', () => {
    const getField = () =>
      getMarkup()
        .find(Form.Field)
        .at(2);
    it('should have the right props', () => {
      const wrapper = getField();
      expectComponentToHaveProps(wrapper, {
        width: 'seven',
      });
    });
    it('should have the correct children', () => {
      const wrapper = getField();
      expectComponentToHaveChildren(wrapper, DateRangePicker);
    });
  });
  describe('first `DateRangePicker`', () => {
    it('should have the right props', () => {
      const wrapper = getMarkup()
        .find(DateRangePicker)
        .at(0);

      expectComponentToHaveProps(wrapper, {
        name: 'dates',
        getIsDayBlocked: expect.any(Function),
        onChange: expect.any(Function),
      });
    });
  });
  describe('fourth `Form.Field`', () => {
    const getField = () =>
      getMarkup()
        .find(Form.Field)
        .at(3);
    it('should have the right props', () => {
      const wrapper = getField();
      expectComponentToHaveProps(wrapper, {
        width: 'three',
      });
    });
    it('should have the correct children', () => {
      const wrapper = getField();
      expectComponentToHaveChildren(wrapper, Dropdown);
    });
  });
  describe('second `DateRangePicker`', () => {
    it('should have the right props', () => {
      const wrapper = getMarkup()
        .find(Dropdown)
        .at(1);

      expectComponentToHaveProps(wrapper, {
        name: 'guests',
        icon: 'users',
        label: 'Guests',
      });
    });
  });
  describe('fifth `Form.Field`', () => {
    const getField = () =>
      getMarkup()
        .find(Form.Field)
        .at(4);
    it('should have the right props', () => {
      const wrapper = getField();
      expectComponentToHaveProps(wrapper, {
        width: 'three',
      });
    });
    it('should have the correct children', () => {
      const wrapper = getField();
      expectComponentToHaveChildren(wrapper, 'div');
    });
  });
});
