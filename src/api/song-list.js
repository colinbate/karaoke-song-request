import {urlGetSongs, urlAddSong, urlRemoveSongs, urlFulfillSongs} from '../config';

export default class SongListApi {
  constructor(fetch) {
    this.fetch = fetch;
  }
  
  get() {
    return this.fetch.get(urlGetSongs).then(p => {
      return {
        requests: p.list.map(v => v[1]),
        fulfilled: p.fulfilled && p.fulfilled.map(v => v[1]) || []
      };
    });
  }
  
  add(request) {
    return this.fetch.post(urlAddSong, {payload: request});
  }
  
  remove(...ids) {
    return this.fetch.post(urlRemoveSongs, {payload: ids});
  }
  
  fulfill(...ids) {
    return this.fetch.post(urlFulfillSongs, {payload: ids});
  }
}