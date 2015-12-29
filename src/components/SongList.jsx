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
    componentHandler.upgradeDom('MaterialCheckbox', 'mdl-js-checkbox');
  }
  componentDidUpdate() {
    componentHandler.upgradeDom('MaterialCheckbox', 'mdl-js-checkbox');
  }
  render() {
    const {requests, selState, toggleRequest} = this.props;
    const tickHandlerFactory = id => ev => toggleRequest(ev, id);
    const adminMode = requests.length && requests[0].name;
    const classes = classNames('ksr-full-table', 'mdl-data-table', 'mdl-js-data-table', 'mdl-shadow--2dp');
    return (
      <table className={classes} ref={ref => this.node = ref}>
        <thead>
          <tr>
            {adminMode ? <th className="mdl-data-table__cell--non-numeric">&nbsp;</th> : null}
            <th className="mdl-data-table__cell--non-numeric">Song Title</th>
            <th className="mdl-data-table__cell--non-numeric">Artist</th>
            <th className="mdl-data-table__cell--non-numeric">When</th>
            {adminMode ? <th className="mdl-data-table__cell--non-numeric">Who</th> : null}
          </tr>
        </thead>
        <tbody>
          {requests.map(request => <Song key={request.key} request={request} isTicked={selState.has(request.key)} tickHandler={tickHandlerFactory(request.key)}/>)}
          {noRows(requests)}
        </tbody>
      </table>
    );
  }
}

export default SongList;