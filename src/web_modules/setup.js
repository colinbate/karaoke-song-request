import FetchWrap from '../api/fetch-wrap';
import SongListApi from '../api/song-list';
import {tokenKey, emailKey} from '../api/auth';
import {setUser} from '../actions';

export const songListApi = new SongListApi(new FetchWrap());

export function checkForExistingUser(store) {
  const storage = window.sessionStorage;
  const email = storage.getItem(emailKey);
  const token = storage.getItem(tokenKey);
  if (email && token) {
    store.dispatch(setUser(email));
  }
}