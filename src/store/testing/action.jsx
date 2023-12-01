import axios from 'axios';
import {
  GET_LIST_TESTING_REQUEST,
  GET_LIST_TESTING_SUCCESS,
  GET_LIST_TESTING_FAILURE,
} from './actionTypes';

export const getTesting = () => {
  return async (dispatch) => {
    // loading
    dispatch({
      type: GET_LIST_TESTING_REQUEST,
      payload: {
        loading: true,
        data: [],
        errorMessage: false,
      },
    });

    try {
      // hit api
      const response = await axios({
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/todos/1`,
      });

      // success
      dispatch({
        type: GET_LIST_TESTING_SUCCESS,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });

      return response;
    } catch (error) {
      // error
      dispatch({
        type: GET_LIST_TESTING_FAILURE,
        payload: {
          loading: false,
          data: [],
          errorMessage: error.message,
        },
      });

      throw error; // Rethrow the error to allow the component to catch it
    }
  };
};
