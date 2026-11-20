import React, { Component } from 'react';
import axios from 'axios';
import Contacts from './components/contacts';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { contacts: [], loading: true, error: '' };
    this.controller = new AbortController();
  }

  componentDidMount() {
    // HTTPS serves the same API from the slides without mixed-content issues.
    axios.get('https://jsonplaceholder.typicode.com/users', {
      signal: this.controller.signal,
    })
      .then(response => {
        const contacts = response.data;
        if (!Array.isArray(contacts)) throw new Error('The contact service returned an unexpected response.');
        this.setState({ contacts, loading: false });
      })
      .catch(error => {
        if (!axios.isCancel(error)) {
          this.setState({ loading: false, error: 'Unable to load contacts. Check your connection and refresh the page.' });
        }
      });
  }

  componentWillUnmount() {
    this.controller.abort();
  }

  render() {
    const { contacts, loading, error } = this.state;
    return (
      <main className="container">
        <header className="page-header">
          <p className="eyebrow">WEB 403 / Week 3 Day 2</p>
          <h1>Contact List</h1>
          <p className="intro">People, a little personality, and one simple API.</p>
          <div className="source-line">
            <span>JSONPlaceholder sample contacts</span>
            {!loading && !error && <span>{contacts.length} contacts</span>}
          </div>
        </header>
        {loading && <p className="status" role="status">Loading contacts…</p>}
        {error && <p className="status error" role="alert">{error}</p>}
        {!loading && !error && <Contacts contacts={contacts} />}
        <footer>Chris Aguilar <span>React · REST API · Axios</span></footer>
      </main>
    );
  }
}

export default App;
