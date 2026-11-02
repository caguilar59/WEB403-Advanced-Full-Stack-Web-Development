import React from 'react';
import './App.css';

const todosByDay = {
  Sunday: ['Plan the week', 'Call family', 'Prep meals'],
  Monday: ['Cook Breakfast', 'Walk Dog', 'Take Shower'],
  Tuesday: ['Get Lunch', 'Run a Mile', 'Take Bath'],
  Wednesday: ['Finish homework', 'Go for a walk', 'Read a chapter'],
  Thursday: ['Attend class', 'Pick up groceries', 'Tidy the desk'],
  Friday: ['Submit assignments', 'Meet a friend', 'Watch a movie'],
  Saturday: ['Do laundry', 'Visit the farmers market', 'Relax'],
};

function TodoList({ items }) {
  return (
    <ul className="todo-list" aria-label="Tasks for today">
      {items.map((item) => (
        <li className="todo-list-item" key={item}>{item}</li>
      ))}
    </ul>
  );
}

function App() {
  const day = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date());

  return (
    <main className="App">
      <section className="todo-card" aria-labelledby="todo-heading">
        <h1 id="todo-heading">
          <span className="weekday">{day}'s</span>
          <span className="heading-title">Todo List</span>
        </h1>
        <TodoList items={todosByDay[day]} />
      </section>
    </main>
  );
}

export default App;
