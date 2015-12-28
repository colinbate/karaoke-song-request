import React, {Component} from 'react';
import Song from './Song';
import classNames from 'classnames';

const noRows = (reqs) => {
  if (!reqs.length) {
    return (
      <tr><td colSpan="5" style={{textAlign: 'center'}}>No songs requested...</td></tr>
    );
  }
}

class SongList extends Component {
  componentDidMount() {
    console.log('Upgrading DOM (initial)');
    componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    console.log('Upgrading DOM');
    componentHandler.upgradeDom('MaterialDataTable', 'mdl-js-data-table');
  }
  
  render() {
    const {requests} = this.props;
    const adminMode = requests.length && requests[0].name;
    const classes = classNames('ksr-full-table', 'mdl-data-table', 'mdl-js-data-table', 'mdl-shadow--2dp', {'mdl-data-table--selectable': adminMode});
    return (
      <table className={classes}>
        <thead>
          <tr>
            <th className="mdl-data-table__cell--non-numeric">Song Title</th>
            <th className="mdl-data-table__cell--non-numeric">Artist</th>
            <th className="mdl-data-table__cell--non-numeric">When</th>
            {adminMode ? <th className="mdl-data-table__cell--non-numeric">Who</th> : null}
          </tr>
        </thead>
        <tbody>
          {requests.map(request => <Song key={request.key} request={request}/>)}
          {noRows(requests)}
        </tbody>
      </table>
    );
  }
}

export default SongList;