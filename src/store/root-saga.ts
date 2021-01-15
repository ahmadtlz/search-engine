import { all, call } from 'redux-saga/effects';
import { SearchSaga } from './modules/search/search.saga';

export default function* rootSaga() {
  yield all([call(SearchSaga)]);
}
