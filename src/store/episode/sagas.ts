import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { IEpisode, EpisodeTypes } from './types';
import axios, { AxiosResponse } from 'axios';
import { fetchEpisodeListFailure, fetchEpisodeListSuccess } from './actions';
import { convertEpisodeToMap } from '../../utils';

const fetchEpisodes = () => axios.get(`${process.env.REACT_APP_API_URL}/episodes`)

export function* handleFetchEpisodeList() {
  try {
    const resp: AxiosResponse<IEpisode[]> = yield call(fetchEpisodes);
    const data = convertEpisodeToMap(resp.data);
    yield put(fetchEpisodeListSuccess(data));
  } catch (err) {
    yield put(fetchEpisodeListFailure(err.message));
  }
}

function* watchEpisodeSaga() {
  yield takeEvery(EpisodeTypes.fetchEpisodeList, handleFetchEpisodeList);
}

function* episodeSaga() {
  yield all([fork(watchEpisodeSaga)]);
}

export default episodeSaga;
