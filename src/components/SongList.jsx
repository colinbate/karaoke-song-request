import React from 'react';
import Song from './Song';

const noRows = (reqs) => {
  if (!reqs.length) {
    return (
      <tr><td colSpan="4" style={{textAlign: 'center'}}>No songs requested...</td></tr>
    );
  }
}

const SongList = ({requests}) => (
  <table className="ksr-full-table mdl-data-table mdl-js-data-table mdl-shadow--2dp">
    <thead>
      <tr>
        <th className="mdl-data-table__cell--non-numeric">Song Title</th>
        <th className="mdl-data-table__cell--non-numeric">Artist</th>
        <th className="mdl-data-table__cell--non-numeric">When</th>
        {requests.length && requests[0].name ? <th className="mdl-data-table__cell--non-numeric">Who</th> : null}
      </tr>
    </thead>
    <tbody>
      {requests.map(request => <Song key={request.key} request={request}/>)}
      {noRows(requests)}
    </tbody>
  </table>
);

export default SongList;