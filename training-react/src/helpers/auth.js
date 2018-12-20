export const USER_SESSION = 'USER_SESSION';

export const login = async (values, props) => {
  const { getUser } = props;
  await getUser(values);
  props.history.push('/game');
};

export const logout = props => {
  localStorage.removeItem(USER_SESSION);
  window.alert(`User logout succesfully`); // eslint-disable-line no-alert
  props.history.push('/');
};
