import React from 'react';

export default function AddTodo({ onAdd }) {
  const [item, setItem] = React.useState('');
  const [note, setNote] = React.useState('');

  const submit = (event) => {
    event.preventDefault();
    const text = item.trim();
    const todoNote = note.trim();
    if (!text || !todoNote) return;
    onAdd(text, todoNote);
    setItem('');
    setNote('');
  };

  return (
    <section className="add-todo" aria-labelledby="add-todo-heading">
      <h2 id="add-todo-heading">Add a task</h2>
      <form onSubmit={submit}>
        <label className="sr-only" htmlFor="add-todo-item">Task</label>
        <input
          id="add-todo-item"
          name="addTodoItem"
          type="text"
          value={item}
          onChange={(event) => setItem(event.target.value)}
          placeholder="Add Todo Item"
          required
        />
        <label className="sr-only" htmlFor="add-todo-note">Note</label>
        <input
          id="add-todo-note"
          name="addTodoNote"
          type="text"
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Add Todo Note"
          required
        />
        <button className="add-button" type="submit">Add</button>
      </form>
    </section>
  );
}
