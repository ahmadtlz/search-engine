import {
  GET_SEARCH_START,
  GET_SEARCH_SUCCESS,
  GET_SEARCH_FAILURE,
  SearchState,
  SearchAction,
} from './search.types';

const INITIAL_STATE: SearchState = {
  data: null,
  loading: false,
  search: '',
  error: '',
};

const searchReducer = (
  state = INITIAL_STATE,
  action: SearchAction
): SearchState => {
  switch (action.type) {
    case GET_SEARCH_START:
      return {
        ...state,
        search: action.payload,
        loading: true,
      };
    case GET_SEARCH_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        search: '',
        error: '',
      };
    case GET_SEARCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default searchReducer;
