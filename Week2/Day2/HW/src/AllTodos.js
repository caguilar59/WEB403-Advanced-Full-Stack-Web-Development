import React from 'react';

export default function AllTodos({ lists }) {
  return (
    <main className="all-todos" aria-labelledby="all-todos-heading">
      <h1 id="all-todos-heading">Todo Lists</h1>
      <p className="all-todos-intro">A view of every task across your week.</p>
      <div className="all-todos-grid">
        {Object.entries(lists).map(([day, items]) => (
          <section className="day-list" key={day} aria-labelledby={`day-${day}`}>
            <h2 id={`day-${day}`}>{day}</h2>
            {items.length ? (
              <ul>
                {items.map((item) => (
                  <li className={item.done ? 'is-done' : ''} key={item.id}>
                    <span>{item.text}</span>
                    <small>{item.note}</small>
                  </li>
                ))}
              </ul>
            ) : <p className="empty-state">No tasks yet.</p>}
          </section>
        ))}
      </div>
    </main>
  );
}
