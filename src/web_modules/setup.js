import FetchWrap from '../api/fetch-wrap';
import SongListApi from '../api/song-list';
import {tokenKey, profileKey} from '../api/auth';
import storage from 'storage';
import {setUser} from '../actions';
import JwtHelper from '../utils/JwtHelper';

export const songListApi = new SongListApi(new FetchWrap());

export function checkForExistingUser(store) {
  const profile = storage.get(profileKey);
  const token = storage.get(tokenKey);
  if (profile && token) {
    let helper = new JwtHelper();
    if (helper.isTokenExpired(token)) {
      storage.remove(profileKey);
      storage.remove(tokenKey);
    } else {
      store.dispatch(setUser(profile));
    }
  }
}