import React from 'react';
import {reduxForm} from 'redux-form';
import {fields} from '../components/RequestForm';

const Example = ({fields}) => (
  <code><pre>
    {JSON.stringify(Object.keys(fields).reduce((p,c) => {
      if ('value' in fields[c]) {
        p[c] = fields[c].value;
      }
      return p;
    }, {}), null, 2)}
  </pre></code>
);

export default reduxForm({
  form: 'requestForm',
  fields,
  readonly: true
})(Example);