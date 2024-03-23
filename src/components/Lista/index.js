import React from "react";
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from "react-icons/fa";

import './Lista.css'
export default function Lista ({tarefas, handleDelete, handleEdit}) {
    return(
        <ul className="tarefas">
        {tarefas.map((tarefa, index) => (
          <li>{tarefa}
            <span>
            <FaEdit className='edit'
              onClick={(e) => handleEdit(e, index)} 
              />
            <FaWindowClose className='delete'
              onClick={(e) => handleDelete(e, index)} />
          </span>
          </li>
        ))}
      </ul>
      );
}

Lista.propTypes = {
    tarefas: PropTypes.array.isRequired,
    handleDelete: PropTypes.array.isRequired,
    handleEdit: PropTypes.array.isRequired,
  }