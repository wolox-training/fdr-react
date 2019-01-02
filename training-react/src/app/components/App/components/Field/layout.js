import React from 'react';

function FieldDetails({ label, input, meta, type }) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input {...input} type={type} id={label} />
      {meta.error && meta.touched && <div style={{ color: 'red' }}>{meta.error}</div>}
    </div>
  );
}

export default FieldDetails;
