import React from 'react';

export const customInput = props => {
  const { label, input, meta, type } = props;
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input {...input} type={type} id={label} />
      {meta.error && meta.touched && <div style={{ color: 'red' }}>{meta.error}</div>}
    </div>
  );
};
