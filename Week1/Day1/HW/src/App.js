import React from 'react';
import './App.css';
import {TodoList1, TodoList2} from './componets/todolist';

 function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList1/>
      <TodoList2/>
    </div>
  );
}

export default App;