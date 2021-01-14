import {
  GET_COUNTRIES_START,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAILURE,
  CountriesState,
  CountriesAction,
} from './search.types';

const INITIAL_STATE: CountriesState = {
  data: null,
  loading: false,
  error: '',
};

const searchReducer = (
  state = INITIAL_STATE,
  action: CountriesAction
): CountriesState => {
  switch (action.type) {
    case GET_COUNTRIES_START:
      return {
        ...state,
        loading: true,
      };
    case GET_COUNTRIES_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: '',
      };
    case GET_COUNTRIES_FAILURE:
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
