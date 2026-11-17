import React from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

export default function Home({ day, todos, selectedNote, onShowNote, onDismissNote, onAdd, onToggle }) {
  return (
    <main className="todo-card" aria-labelledby="todo-heading">
      <header className="app-header">
        <p className="weekday">{day}'s</p>
        <h1 id="todo-heading">Todo List</h1>
        <p className="subtitle">A little progress, one task at a time.</p>
      </header>
      {todos.length ? (
        <Todos items={todos} onShowNote={onShowNote} onToggle={onToggle} />
      ) : (
        <p className="empty-state">No tasks for today yet. Add one below.</p>
      )}
      {selectedNote && (
        <section className="note-card" aria-live="polite" aria-label="Todo note">
          <p>{selectedNote}</p>
          <button className="dismiss-button" type="button" onClick={onDismissNote}>Done</button>
        </section>
      )}
      <AddTodo onAdd={onAdd} />
    </main>
  );
}
