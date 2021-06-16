import { SET_USER } from '../reduxTypes';

export const setUser = (email, history) => async (dispatch) => {
  dispatch({
    type: SET_USER,
    email
  });
  history.push('/');
};
