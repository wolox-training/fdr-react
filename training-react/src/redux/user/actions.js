import UserService from '../../services/UserService';
import LocalStoreService from '../../services/LocalStoreService';

const USER_SESSION = 'USER_SESSION';

export const actions = {
  GET_USER: '@@USER/GET_USER',
  GET_USER_SUCCESS: '@@USER/GET_USER_SUCCESS',
  GET_USER_FAILURE: '@@USER/GET_USER_FAILURE'
};

const actionsCreators = {
  getUser: values => async dispatch => {
    const response = await UserService.getUser(values);
    if (response.status === 200) {
      const user = response.data[0];
      LocalStoreService.saveItem(USER_SESSION, JSON.stringify(user));
      dispatch({
        type: actions.GET_USER_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch({
        type: actions.GET_USER_FAILURE,
        payload: response.problem
      });
    }
  }
};

export default actionsCreators;
