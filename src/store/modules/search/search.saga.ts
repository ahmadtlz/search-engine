import { ISearch, SearchError, SearchAction } from './search.types';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { GET_SEARCH_START } from './search.types';

import { getSearchSuccess, getSearchFailure } from './search.action';

import { apiURl } from '../../../config.json';
import { get } from '../../../fetch';

export function* getSearchAsync(search: SearchAction) {
  try {
    const res = yield call(
      get,
      `${apiURl}?key=${process.env.REACT_APP_API_KEY}&cx=${process.env.REACT_APP_SEARCH_ENGIN_KEY}&q=${search.payload}`
    );

    if (!res) {
      const resData: SearchError = yield res;
      throw new Error(resData.message);
    }

    const resData: ISearch = yield res;
    yield put(getSearchSuccess(resData));
  } catch (error) {
    yield put(getSearchFailure(error.message));
  }
}

export function* getSearchStart() {
  yield takeLatest(GET_SEARCH_START, getSearchAsync);
}

export function* SearchSaga() {
  yield all([call(getSearchStart)]);
}
