export const required = value => (value ? undefined : 'Value is required');

export const minLength = value => (value.length < 8 ? 'Value must be at least 8 characters' : undefined);

export const isEmail = value => {
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(value) ? undefined : 'Value must be a valid email';
};

export const matchesPassword = (value, allValues) =>
  value === allValues.password ? undefined : 'Passwords must match';
