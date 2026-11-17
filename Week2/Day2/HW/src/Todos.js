import React from 'react';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Todos({ items = [], onShowNote, onToggle }) {
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
