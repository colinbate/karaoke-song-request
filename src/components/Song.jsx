import React from 'react';

const Song = ({request}) => (
  <tr>
    <td className="mdl-data-table__cell--non-numeric">{request.title}</td>
    <td className="mdl-data-table__cell--non-numeric">{request.artist}</td>
  </tr>
);

export default Song;