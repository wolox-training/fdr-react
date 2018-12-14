import UserService from '../../services/UserService';

export const actions = {
  GET_USER: '@@USER/GET_USER',
  GET_USER_SUCCESS: '@@USER/GET_USER_SUCCESS',
  GET_USER_FAILURE: '@@USER/GET_USER_FAILURE'
};

const actionsCreators = {
  getUser: values => async dispatch => {
    const response = await UserService.getUser(values);
    if (response.status === 200) {
      dispatch({
        type: actions.GET_USER_SUCCESS,
        payload: { user: response.data }
      });
    } else {
      dispatch({
        type: actions.GET_USER_FAILURE,
        payload: { err: response.problem }
      });
    }
  },
  setUser: values => async dispatch => {
    const response = await UserService.setUser(values);
    if (response.status === 200) {
      dispatch({
        type: actions.GET_USER_SUCCESS,
        payload: { user: response.data }
      });
    } else {
      dispatch({
        type: actions.GET_USER_FAILURE,
        payload: { err: response.problem }
      });
    }
  }
};

export default actionsCreators;
