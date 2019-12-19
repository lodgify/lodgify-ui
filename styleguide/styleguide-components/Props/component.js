import React from 'react';
import { shape } from 'prop-types';
import { columns, getRowKey } from 'react-styleguidist/lib/rsg-components/Props/PropsRenderer';
import Table from 'rsg-components/Table';
import parsePropTypes from 'parse-prop-types';

export const PropsRenderer = ({ props }) => {
  console.log(props);
  props = props.map(p => {
    if (p.type.name === 'custom') {
      const element = require('../../../src')[p.type.raw];
      const newShape = Object.entries(parsePropTypes(element)).reduce((acc, [key, value]) => ({ ...acc, [key]: value.type }), {});
      return { ...p, type: { name: p.type.raw, value: newShape }, }
    }
    return p;
  })
  console.log(props);
  return <Table columns={columns} rows={props} getRowKey={getRowKey} />
} 