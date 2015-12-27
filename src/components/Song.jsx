import React from 'react';
import {dateLocalize} from '../utils/formatters';

const Song = ({request}) => (
  <tr>
    <td className="mdl-data-table__cell--non-numeric">{request.title}</td>
    <td className="mdl-data-table__cell--non-numeric">{request.artist}</td>
    <td className="mdl-data-table__cell--non-numeric">{dateLocalize(request.when)}</td>
    {request.name ? <td className="mdl-data-table__cell--non-numeric"><a className="mdl-color-text--primary" href={'mailto:' + request.email}>{request.name}</a></td> : null}
  </tr>
);

export default Song;