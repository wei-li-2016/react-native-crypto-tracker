import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL,
} from './../Actions/ActionTypes';

const initialState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCHING_COIN_DATA:
      return {
        isFetching: true,
        data: null,
        hasError: false,
        errorMessage: null,
        ...state
      };
    case FETCHING_COIN_DATA_SUCCESS:
      return {
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null,
        ...state
      };
    case FETCHING_COIN_DATA_FAIL:
      return {
        isFetching: false,
        hasError: true,
        data: action.payload,
        errorMessage: action.err,
        ...state
      }
    default:
      return state;
  }
}