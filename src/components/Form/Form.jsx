import React from 'react';

import Button from 'components/Button';

import './Form.css';

const Form = ({ button, onFormSubmit, children }) => (
  <div className="form">
    <h3 className="form__title">Add to playlist</h3>
    <form
      onSubmit={onFormSubmit}
      className="form__form"
    >
      {children}
      <div className="form__button">
        <Button>{button}</Button>
      </div>
    </form>
  </div>
);

export default Form;
