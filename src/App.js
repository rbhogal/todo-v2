import React from 'react';

import './App.css';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
    <h1 style={{ fontSize: '45px' }}>todos</h1>
      <TodoForm />
      {/* TodoList */}
      
    </div>
  );
}

export default App;
