export enum EpisodeTypes {
  fetchEpisodeList = '@@episode/FETCH_EPISODE_LIST',
  fetchEpisodeListSuccess = '@@episode/FETCH_EPISODE_LIST_SUCCESS',
  fetchEpisodeListFailure = '@@episode/FETCH_EPISODE_LIST_FAILURE',
}

export interface IEpisode {
  id: number;
  name: string;
  image: { medium: string; original: string } | null;
  summary: string;
  number: number;
  season: number;
}

export interface IEpisodeState {
  episodes: { [key: number]: IEpisode };
  isLoading: boolean;
  error: string | null;
}
