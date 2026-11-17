import React from 'react';
import Nav from './Nav';
import { TodoData } from './TodoData';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TodoLists: TodoData,
      day: new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date()),
      selectedNote: '',
    };
  }

  showNote = (note) => this.setState({ selectedNote: note });

  dismissNote = () => this.setState({ selectedNote: '' });

  addTodo = (text, note) => {
    this.setState((state) => {
      const currentTodos = state.TodoLists[state.day] || [];
      const nextId = currentTodos.reduce((maxId, todo) => Math.max(maxId, todo.id), 0) + 1;
      return {
        TodoLists: {
          ...state.TodoLists,
          [state.day]: [...currentTodos, { id: nextId, text, note, done: false }],
        },
      };
    });
  };

  toggleTodo = (todoId) => {
    this.setState((state) => ({
      TodoLists: {
        ...state.TodoLists,
        [state.day]: (state.TodoLists[state.day] || []).map((todo) =>
          todo.id === todoId ? { ...todo, done: !todo.done } : todo,
        ),
      },
    }));
  };

  render() {
    const { TodoLists, day, selectedNote } = this.state;
    return (
      <div className="App">
        <Nav
          lists={TodoLists}
          day={day}
          selectedNote={selectedNote}
          onShowNote={this.showNote}
          onDismissNote={this.dismissNote}
          onAdd={this.addTodo}
          onToggle={this.toggleTodo}
        />
      </div>
    );
  }
}

export default App;
