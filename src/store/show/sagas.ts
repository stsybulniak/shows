import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { fetchShowError, fetchShowSuccess } from './actions';
import { IShow, ShowTypes } from './types';
import axios, { AxiosResponse } from 'axios';

function* handleFetchShow() {
  try {
    const resp: AxiosResponse<IShow> = yield axios.get(`${process.env.REACT_APP_API_URL}`);
    yield put(fetchShowSuccess(resp.data));
  } catch (err) {
    yield put(fetchShowError(err.message));
  }
}

function* watchShowSaga() {
  yield takeEvery(ShowTypes.fetchShow, handleFetchShow);
}

function* boardSaga() {
  yield all([fork(watchShowSaga)]);
}

export default boardSaga;
