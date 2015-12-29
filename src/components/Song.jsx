import React from 'react';
import {dateLocalize} from '../utils/formatters';

const Song = ({request, isTicked, tickHandler}) => (
  <tr className={isTicked ? 'is-selected' : ''}>
    {request.name ? <td className="mdl-data-table__cell--non-numeric">
      <label className="mdl-checkbox mdl-js-checkbox">
        <input type="checkbox" id={'sel_' + request.key} value={isTicked} className="mdl-checkbox__input" onChange={tickHandler} />
      </label>
    </td> : null}
    <td className="mdl-data-table__cell--non-numeric">{request.title}</td>
    <td className="mdl-data-table__cell--non-numeric">{request.artist}</td>
    <td className="mdl-data-table__cell--non-numeric">{dateLocalize(request.when)}</td>
    {request.name ? <td className="mdl-data-table__cell--non-numeric"><a className="mdl-color-text--primary" href={'mailto:' + request.email}>{request.name}</a></td> : null}
  </tr>
);

export default Song;