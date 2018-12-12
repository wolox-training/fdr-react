export const USER_SESSION = 'USER_SESSION';

export const login = async (values, props) => {
  const { getUser } = props;
  await getUser(values);
  const { user } = props;
  if (user) {
    localStorage.setItem(
      USER_SESSION,
      JSON.stringify({
        id: user.id,
        email: user.mail
      })
    );
    window.alert(`User ${user && user.mail} login succesfully`); // eslint-disable-line no-alert
    window.location.reload();
  } else {
    window.alert(`User-password not found`); // eslint-disable-line no-alert
  }
};

export const logout = () => {
  localStorage.removeItem(USER_SESSION);
  window.alert(`User logout succesfully`); // eslint-disable-line no-alert
  window.location.reload();
};
