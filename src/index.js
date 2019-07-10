import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './Provider';
import { TaskList } from './TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as serviceWorker from './serviceWorker';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <h1 className="navbar-brand">React To Do List with Hooks</h1>
      </nav>
      <div className="container">
        <TaskList />
      </div>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
