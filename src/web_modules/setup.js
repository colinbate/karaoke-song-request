import FetchWrap from '../api/fetch-wrap';
import SongListApi from '../api/song-list';
import {tokenKey, emailKey} from '../api/auth';
import {setUser} from '../actions';
import JwtHelper from '../utils/JwtHelper';

export const songListApi = new SongListApi(new FetchWrap());

export function checkForExistingUser(store) {
  const storage = window.sessionStorage;
  const email = storage.getItem(emailKey);
  const token = storage.getItem(tokenKey);
  if (email && token) {
    let helper = new JwtHelper();
    if (helper.isTokenExpired(token)) {
      storage.removeItem(emailKey);
      storage.removeItem(tokenKey);
    } else {
      store.dispatch(setUser(email));
    }
  }
}