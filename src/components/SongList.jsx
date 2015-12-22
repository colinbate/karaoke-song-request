import React from 'react';
import Song from './Song';

const SongList = ({requests }) => (
  <table className="ksr-full-table mdl-data-table mdl-js-data-table mdl-shadow--2dp">
    <thead>
      <tr>
        <th className="mdl-data-table__cell--non-numeric">Song Title</th>
        <th className="mdl-data-table__cell--non-numeric">Artist</th>
      </tr>
    </thead>
    <tbody>
      {requests.map(request => <Song request={request}/>)}
    </tbody>
  </table>
);

export default SongList;