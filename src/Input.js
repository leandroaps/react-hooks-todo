import React, { useContext, useState } from 'react';
import { Context } from './Provider';
import { COMP_ALL } from './Reducer';
import { Task } from './Task';

export const Input = () => {
  const [value, setValue] = useState('');
  const { startAddTodo } = useContext(Context);

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    startAddTodo(value);
    setValue('');
  };
  const { state, dispatch } = useContext(Context);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="New todo"
            value={value}
            onChange={e => setValue(e.target.value)}
            id="new"
            className="form-control"
          />
          <div class="mt-2" role="group">
            <button type="submit" className="btn btn-block btn-primary">
              add todo
            </button>
            <button
              onClick={() => dispatch({ type: COMP_ALL })}
              className="btn btn-block btn-warning"
            >
              Complete all
            </button>
          </div>
        </div>
        <div className="container list ">
          {state &&
            state.map(task => (
              <Task key={task.id} fromDispatch={dispatch} {...task} />
            ))}
        </div>
      </form>
    </>
  );
};
