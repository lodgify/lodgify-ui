import React from 'react';
import { shallow } from 'enzyme';
import { Table as SemanticUITable } from 'semantic-ui-react';

import {
  expectComponentToBe,
  expectComponentToHaveProps,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
} from 'utils/expect-helpers';
import { getArrayOfLengthOfItem } from 'utils/get-array-of-length-of-item';

import { Component as Table } from './component';

const tableHeadings = ['stringHeadOne', 'stringHeadTwo'];
const tableBody = [
  ['stringRowHeadingOne', 'stringBodyOne'],
  ['stringRowHeadingTwo', 'stringBodyTwo'],
];

const getTable = () =>
  shallow(<Table tableHeadings={tableHeadings} tableBody={tableBody} />);

describe('<Table />', () => {
  it('should render a single Semantic UI `Table` component', () => {
    const wrapper = getTable();
    expectComponentToBe(wrapper, SemanticUITable);
  });

  describe('the `Table` component', () => {
    it('should have the right props', () => {
      const wrapper = getTable();
      expectComponentToHaveProps(wrapper, {
        basic: 'very',
        padded: true,
        striped: true,
      });
    });

    it('should render the right children', () => {
      const wrapper = getTable();
      expectComponentToHaveChildren(
        wrapper,
        SemanticUITable.Header,
        SemanticUITable.Body
      );
    });
  });

  describe('the `SemanticUITable.Header` component', () => {
    it('should render the right children', () => {
      const wrapper = getTable().find(SemanticUITable.Header);
      expectComponentToHaveChildren(wrapper, SemanticUITable.Row);
    });
  });

  describe('the table heading `SemanticUITable.Row` component', () => {
    it('should render the right children', () => {
      const wrapper = getTable()
        .find(SemanticUITable.Row)
        .first();
      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(
          tableHeadings.length,
          SemanticUITable.HeaderCell
        )
      );
    });
  });

  describe('the `SemanticUITable.HeaderCell` component', () => {
    it('it should render the right children', () => {
      const wrapper = getTable()
        .find(SemanticUITable.HeaderCell)
        .first();
      expectComponentToHaveChildren(wrapper, tableHeadings[0]);
    });
  });

  describe('the `SemanticUITable.Body` component', () => {
    it('should render the right children', () => {
      const wrapper = getTable().find(SemanticUITable.Body);
      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(tableBody.length, SemanticUITable.Row)
      );
    });
  });

  describe('the table body `SemanticUITable.Row` component', () => {
    it('should render the right children', () => {
      const wrapper = getTable()
        .find(SemanticUITable.Row)
        .at(1);
      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(tableBody[0].length, SemanticUITable.Cell)
      );
    });
  });

  describe('the `SemanticUITable.Cell` component', () => {
    it('should render the right children', () => {
      const wrapper = getTable()
        .find(SemanticUITable.Cell)
        .first(0);
      expectComponentToHaveChildren(wrapper, tableBody[0][0]);
    });
  });

  it('should have `displayName` `Table`', () => {
    expectComponentToHaveDisplayName(Table, 'Table');
  });
});
