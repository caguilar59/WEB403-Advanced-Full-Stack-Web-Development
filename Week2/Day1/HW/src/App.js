import React from 'react';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

const todosByDay = {
  Sunday: [
    { id: 1, text: 'Plan the week', note: 'Choose the three most important priorities.', done: false },
    { id: 2, text: 'Call family', note: 'Catch up and share how the week went.', done: false },
    { id: 3, text: 'Prep meals', note: 'Make a few lunches for the week ahead.', done: false },
  ],
  Monday: [
    { id: 1, text: 'Eat Breakfast', note: 'Make Eggs and Pancakes', done: false },
    { id: 2, text: 'Walk Dog', note: 'Bring doggie bag', done: false },
    { id: 3, text: 'Take Shower', note: 'Shower no later than 10am!', done: false },
  ],
  Tuesday: [
    { id: 1, text: 'Get Lunch', note: 'Lunch at Sandbox', done: false },
    { id: 2, text: 'Run a Mile', note: 'Stop by mom at end of run', done: false },
    { id: 3, text: 'Take Bath', note: 'Prep half hour before. Replenish bath oil.', done: false },
  ],
  Wednesday: [
    { id: 1, text: 'Finish homework', note: 'Review the assignment before submitting.', done: false },
    { id: 2, text: 'Go for a walk', note: 'Take a short break outside.', done: false },
    { id: 3, text: 'Read a chapter', note: 'Keep track of any questions for class.', done: false },
  ],
  Thursday: [
    { id: 1, text: 'Attend class', note: 'Bring notes and any questions.', done: false },
    { id: 2, text: 'Pick up groceries', note: 'Check the shopping list first.', done: false },
    { id: 3, text: 'Tidy the desk', note: 'Clear space for the next assignment.', done: false },
  ],
  Friday: [
    { id: 1, text: 'Submit assignments', note: 'Double-check that each file is attached.', done: false },
    { id: 2, text: 'Meet a friend', note: 'Confirm the time and place.', done: false },
    { id: 3, text: 'Watch a movie', note: 'Pick something everyone will enjoy.', done: false },
  ],
  Saturday: [
    { id: 1, text: 'Do laundry', note: 'Separate lights and darks.', done: false },
    { id: 2, text: 'Visit the farmers market', note: 'Bring reusable bags.', done: false },
    { id: 3, text: 'Relax', note: 'Make a little time to recharge.', done: false },
  ],
};

function Todos({ items, onShowNote, onToggle }) {
  return (
    <ul className="todo-list" aria-label="Tasks for today">
      {items.map((todo) => (
        <li className="todo-list-item" key={todo.id}>
          <button
            className={`todo-button${todo.done ? ' is-done' : ''}`}
            type="button"
            onClick={() => onShowNote(todo.note)}
            aria-label={`Show note for ${todo.text}`}
          >
            {todo.text}
          </button>
          <button
            className={`status-button${todo.done ? ' is-done' : ''}`}
            type="button"
            onClick={() => onToggle(todo.id)}
            aria-label={`${todo.done ? 'Mark as not done' : 'Mark as done'}: ${todo.text}`}
            aria-pressed={todo.done}
          >
            <FontAwesomeIcon icon={todo.done ? faTimes : faCheck} aria-hidden="true" />
          </button>
        </li>
      ))}
    </ul>
  );
}

function AddTodo({ onAdd }) {
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todosByDay,
      day: new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date()),
      selectedNote: '',
    };
  }

  showNote = (note) => {
    this.setState({ selectedNote: note });
  };

  dismissNote = () => {
    this.setState({ selectedNote: '' });
  };

  addTodo = (text, note) => {
    this.setState((state) => {
      const currentTodos = state.todosByDay[state.day];
      const nextId = currentTodos.reduce((maxId, todo) => Math.max(maxId, todo.id), 0) + 1;
      return {
        todosByDay: {
          ...state.todosByDay,
          [state.day]: [...currentTodos, { id: nextId, text, note, done: false }],
        },
      };
    });
  };

  toggleTodo = (todoId) => {
    this.setState((state) => ({
      todosByDay: {
        ...state.todosByDay,
        [state.day]: state.todosByDay[state.day].map((todo) =>
          todo.id === todoId ? { ...todo, done: !todo.done } : todo,
        ),
      },
    }));
  };

  render() {
    const { day, todosByDay: todos, selectedNote } = this.state;

    return (
      <main className="App">
        <section className="todo-card" aria-labelledby="todo-heading">
          <header className="app-header">
            <p className="weekday">{day}'s</p>
            <h1 id="todo-heading">Todo List</h1>
            <p className="subtitle">A little progress, one task at a time.</p>
          </header>
          <Todos items={todos[day]} onShowNote={this.showNote} onToggle={this.toggleTodo} />
          {selectedNote && (
            <section className="note-card" aria-live="polite" aria-label="Todo note">
              <p>{selectedNote}</p>
              <button className="dismiss-button" type="button" onClick={this.dismissNote}>
                Done
              </button>
            </section>
          )}
          <AddTodo onAdd={this.addTodo} />
        </section>
      </main>
    );
  }
}

export default App;
