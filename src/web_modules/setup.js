import FetchWrap from '../api/fetch-wrap';
import SongListApi from '../api/song-list';

export const songListApi = new SongListApi(new FetchWrap());