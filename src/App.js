import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskInsert from './TaskInsert';
import TasksForm from './TasksForm';
import CompletedTasksForm from './CompletedTasksForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Here is your list of TODOs and DONEs</code>
        </p>
      </header>
      <div className="TodoForm">
        <TaskInsert />
        <TasksForm />
        <CompletedTasksForm />
      </div>
    </div>
  );
}

export default App;
