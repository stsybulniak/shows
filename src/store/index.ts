import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import showSaga from './show/sagas';
import { IShowState, showReducer } from './show';
import episodeSaga from './episode/sagas';
import { episodeReducer, IEpisodeState } from './episode';

export interface IApplicationState {
  router: RouterState;
  show: IShowState;
  episode: IEpisodeState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    show: showReducer,
    episode: episodeReducer,
  });

export function* rootSaga() {
  yield all([fork(showSaga), fork(episodeSaga)]);
}
