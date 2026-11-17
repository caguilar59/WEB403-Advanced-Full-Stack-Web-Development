import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faHouse } from '@fortawesome/free-solid-svg-icons';
import Home from './Home';
import AllTodos from './AllTodos';

export default function Nav(props) {
  const { lists, day } = props;
  return (
    <Router>
      <header className="header bg-dark">
        <nav className="nav mx-2 mb-4" aria-label="Main navigation">
          <Link to="/" aria-label="Home" title="Home">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
          <Link to="/allLists" aria-label="All Todo Lists" title="All Todo Lists">
            <FontAwesomeIcon icon={faClipboardList} />
          </Link>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={(
            <Home
              day={day}
              todos={lists[day] || []}
              selectedNote={props.selectedNote}
              onShowNote={props.onShowNote}
              onDismissNote={props.onDismissNote}
              onAdd={props.onAdd}
              onToggle={props.onToggle}
            />
          )}
        />
        <Route path="/allLists" element={<AllTodos lists={lists} />} />
        <Route path="*" element={<Home day={day} todos={lists[day] || []} {...props} />} />
      </Routes>
    </Router>
  );
}
