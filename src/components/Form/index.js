import React from "react";
import PropTypes from 'prop-types';
import './Form.css';

export default function Form({handleSubmit, handleChange, novaTarefa}) {
    return(
        <form>
            <input type="text" onChange={handleChange} value={novaTarefa}></input>
            <button type="submit" onClick={handleSubmit}>+</button>
        </form>
    )
}

Form.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired,
  }