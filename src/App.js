import React from 'react';


import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
    <h1 style={{ fontSize: '45px', textAlign: 'center'}}>todos</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
