import { action } from 'typesafe-actions';
import { EpisodeTypes, IEpisode } from './types';

export const fetchEpisodeList = () => action(EpisodeTypes.fetchEpisodeList);
export const fetchEpisodeListSuccess = (payload: { [key: string]: IEpisode }) =>
  action(EpisodeTypes.fetchEpisodeListSuccess, payload);
export const fetchEpisodeListFailure = (payload: string) => action(EpisodeTypes.fetchEpisodeListFailure, payload);
