import React from 'react';
import { shallow } from 'enzyme';
import { FormField, FormGroup } from 'semantic-ui-react';
import {
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { InputGroup } from '../../InputGroup';

import { getFormChild } from './getFormChild';

describe('getFormChild', () => {
  describe('if `child` is `false`', () => {
    it('should return `false`', () => {
      const actual = getFormChild(false);

      expect(actual).toBe(false);
    });
  });

  describe('if `child` is a string', () => {
    const child = '🔺';
    const getFormChildWithString = () =>
      shallow(<div>{getFormChild(child)}</div>);

    it('should return a Semantic UI `Form.Field`', () => {
      const wrapper = getFormChildWithString();

      expectComponentToHaveChildren(wrapper, FormField);
    });

    describe('the `Form.Field` component', () => {
      it('should have the right children', () => {
        const wrapper = getFormChildWithString().children();

        expectComponentToHaveChildren(wrapper, child);
      });
    });
  });

  describe('if `child.type` is `Form.Group`', () => {
    const child = (
      <InputGroup>
        <input />
      </InputGroup>
    );
    const parent = { state: {} };
    const getFormChildWithGroup = () =>
      shallow(<div>{getFormChild(child, parent)}</div>);

    it('should render each group child wrapped in a `FormGroup`', () => {
      const wrapper = getFormChildWithGroup();

      expectComponentToHaveChildren(wrapper, FormGroup);
    });

    it('should pass `FormGroup` the right props', () => {
      const wrapper = getFormChildWithGroup().children();

      expectComponentToHaveProps(wrapper, { widths: 'equal' });
    });

    it('should nest `FormGroup` > `FormField` > input', () => {
      const wrapper = getFormChildWithGroup().find(FormField);

      expectComponentToHaveChildren(wrapper, 'input');
    });
  });

  describe('in any other case', () => {
    const child = <div />;
    const parent = { state: {} };
    const getFormChildWithElement = () =>
      shallow(<div>{getFormChild(child, parent)}</div>);

    it('should return whatever `getClonedInput` returns', () => {
      const wrapper = getFormChildWithElement();

      expectComponentToHaveChildren(wrapper, FormField);
    });
  });
});
