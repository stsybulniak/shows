import { Reducer } from 'redux';
import { IEpisodeState, EpisodeTypes } from './types';

export const initialState: IEpisodeState = {
  isLoading: false,
  episodes: {},
  error: null,
};

export const episodeReducer: Reducer<IEpisodeState> = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case EpisodeTypes.fetchEpisodeList: {
      return { ...state, isLoading: true };
    }
    case EpisodeTypes.fetchEpisodeListSuccess: {
      return { ...state, isLoading: false, episodes: payload };
    }
    case EpisodeTypes.fetchEpisodeListFailure: {
      return { ...state, isLoading: false, episodes: {}, error: payload };
    }
    default: {
      return state;
    }
  }
};
