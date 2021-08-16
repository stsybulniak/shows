import { Reducer } from 'redux';
import { IShowState, ShowTypes } from './types';

export const initialState: IShowState = {
  isLoading: false,
  show: null,
  error: null,
};

export const showReducer: Reducer<IShowState> = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case ShowTypes.fetchShow: {
      return { ...state, isLoading: true };
    }
    case ShowTypes.fetchShowSuccess: {
      return { ...state, isLoading: false, show: payload };
    }
    case ShowTypes.fetchShowFailure: {
      return { ...state, isLoading: false, show: null, error: payload };
    }
    default: {
      return state;
    }
  }
};
