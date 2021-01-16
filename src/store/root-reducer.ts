import { combineReducers } from 'redux';

import searchReducer from './modules/search/search.reducer';

const rootReducer = combineReducers({
  search: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
