import React from 'react';
import {connect} from 'react-redux';

const FulFilledSong = ({request}) => (
  <tr>
    <td className="mdl-data-table__cell--non-numeric">{request.title}</td>
    <td className="mdl-data-table__cell--non-numeric">{request.artist}</td>
    <td className="mdl-data-table__cell--non-numeric"><a className="mdl-color-text--primary" href={'mailto:' + request.email}>{request.name}</a></td>
  </tr>
);

const FulFilled = ({completed, isAdmin}) => (
  <div className={isAdmin && completed.length ? '' : 'hidden'}>
    <h4>Fulfilled Requests</h4>
    <table className="ksr-full-table mdl-data-table mdl-js-data-table mdl-shadow--2dp">
      <thead>
        <tr>
          <th className="mdl-data-table__cell--non-numeric">Song Title</th>
          <th className="mdl-data-table__cell--non-numeric">Artist</th>
          <th className="mdl-data-table__cell--non-numeric">Who</th>
        </tr>
      </thead>
      <tbody>
        {completed.map(request => <FulFilledSong key={request.key} request={request}/>)}
      </tbody>
    </table>
  </div>
);

function mapStateToProps(state) {
  return {
    completed: state.completed,
    isAdmin: state.user.admin
  };
}

export default connect(mapStateToProps)(FulFilled);