import React from 'react';

export const customInput = props => {
  const { label, input, meta } = props;
  return (
    <div>
      <label htmlFor={props.label}>{props.label}</label>
      <input {...props.input} type={props.type} id={props.label} />
      {/* eslint-disable prettier/prettier */}
      {meta.error &&
        meta.touched && (
          <div style={{ color: 'red' }}>{meta.error}</div>
        )}
    </div>
  );
};
