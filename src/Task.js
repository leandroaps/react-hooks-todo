import React from 'react';
import { toggleComplete } from './Reducer';
import './task.css';

export const Task = ({ id, completed, title, fromDispatch }) => {
  return (
    <div className={completed ? 'completed' : null}>
      <input
        type="checkbox"
        onChange={() => fromDispatch(toggleComplete(id))}
        checked={completed}
        className="form-check-input"
        id={id}
      />
      <label className="form-check-label text-left" htmlFor={id}>
        {title}
      </label>
    </div>
  );
};
