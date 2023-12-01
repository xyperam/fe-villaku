import {
  GET_LIST_TESTING_REQUEST,
  GET_LIST_TESTING_SUCCESS,
  GET_LIST_TESTING_FAILURE,
} from './actionTypes';

const initialState = {
  reducerTesting: {
    isLoading: false,
    data: [],
    error: null,
  },
};

const testing = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_TESTING_REQUEST:
      return (state = {
        ...state,
        reducerTesting: action.payload,
      });
    case GET_LIST_TESTING_SUCCESS:
      return (state = {
        ...state,
        reducerTesting: action.payload,
      });
    case GET_LIST_TESTING_FAILURE:
      return (state = {
        ...state,
        reducerTesting: action.payload,
      });

    default:
      return state;
  }
};

export default testing;
