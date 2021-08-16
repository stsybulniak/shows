export enum ShowTypes {
  fetchShow = '@@show/FETCH_SHOW',
  fetchShowSuccess = '@@show/FETCH_SHOW_SUCCESS',
  fetchShowFailure = '@@show/FETCH_SHOW_FAILURE',
}

export interface IShow {
  id: number;
  name: string;
  image: { medium: string; original: string };
  summary: string;
}

export interface IShowState {
  show: IShow | null;
  isLoading: boolean;
  error: string | null;
}
