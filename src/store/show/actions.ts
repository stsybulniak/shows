import { action } from 'typesafe-actions';
import { IShow, ShowTypes } from './types';

export const fetchShow = () => action(ShowTypes.fetchShow);
export const fetchShowSuccess = (payload: IShow) => action(ShowTypes.fetchShowSuccess, payload);
export const fetchShowError = (payload: string) => action(ShowTypes.fetchShowFailure, payload);
