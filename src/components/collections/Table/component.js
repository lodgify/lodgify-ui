import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';

import { getTextAlign } from './utils/getTextAlign';

/**
 * Table is the Lodgify UI interface for the Semantic UI Table.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ className, tableHeadings, tableBody, tableId }) => (
  <Table basic="very" className={className} padded striped>
    <Table.Header>
      <Table.Row>
        {tableHeadings.map((heading, index) => (
          <Table.HeaderCell
            key={buildKeyFromStrings(tableId, `heading${index}`)}
            textAlign={getTextAlign(index)}
          >
            {heading}
          </Table.HeaderCell>
        ))}
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {tableBody.map((row, rowIndex) => (
        <Table.Row key={buildKeyFromStrings(tableId, `row${rowIndex}`)}>
          {row.map((cell, cellIndex) => (
            <Table.Cell
              key={buildKeyFromStrings(
                tableId,
                `row${rowIndex}`,
                `cell${cellIndex}`
              )}
              textAlign={getTextAlign(cellIndex)}
            >
              {cell}
            </Table.Cell>
          ))}
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

Component.defaultProps = {
  className: '',
  tableId: '',
};

Component.displayName = 'Table';

Component.propTypes = {
  /** Custom class name string to customize the resulting table. */
  className: PropTypes.string,
  /** The data making up the body of the table */
  tableBody: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.node)).isRequired,
  /** The column heading represented in the table */
  tableHeadings: PropTypes.arrayOf(PropTypes.node).isRequired,
  /** The id needed if rendering more than one table */
  tableId: PropTypes.string,
};
