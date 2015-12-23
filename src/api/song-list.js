import {urlGetSongs, urlAddSong, urlRemoveSongs} from '../config';

export default class SongListApi {
  constructor(fetch) {
    this.fetch = fetch;
  }
  
  get() {
    return this.fetch.get(urlGetSongs).then(p => p.list.map(v => v[1]));
  }
  
  add(request) {
    return this.fetch.post(urlAddSong, request);
  }
  
  remove(...ids) {
    return this.fetch.post(urlRemoveSongs, ids);
  }
}