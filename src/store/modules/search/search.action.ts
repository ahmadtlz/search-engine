import {
  GET_SEARCH_FAILURE,
  GET_SEARCH_SUCCESS,
  GET_SEARCH_START,
  ISearch,
  SearchAction,
} from './search.types';

export const getSearchStart = (search: string): SearchAction => ({
  type: GET_SEARCH_START,
  payload: search,
});

export const getSearchSuccess = (data: ISearch): SearchAction => ({
  type: GET_SEARCH_SUCCESS,
  payload: data,
});

export const getSearchFailure = (err = ''): SearchAction => ({
  type: GET_SEARCH_FAILURE,
  payload: err,
});
