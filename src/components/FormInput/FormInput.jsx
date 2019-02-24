import React from 'react';

import './FormInput.css';

const FormInput = ({
  label, value, onChange, required, pattern, type = 'text',
}) => (
  <label className="form-input">
    <span className="form-input__label">{label}:</span>
    <input
      className="form-input__input"
      type={type}
      placeholder={label}
      onChange={onChange}
      required={required}
      pattern={pattern}
      value={value}
    />
  </label>
);

export default FormInput;
