import React from 'react';

const Contacts = ({ contacts }) => (
  <section aria-label="Contacts">
    {contacts.length === 0 ? <p className="status">No contacts found.</p> : (
      <div className="contact-grid">
        {contacts.map(contact => (
          <article className="card" key={contact.id}>
            <div className="card-body">
              <span className="avatar" aria-hidden="true">
                {contact.name.split(' ').map(part => part[0]).slice(0, 2).join('')}
              </span>
              <h2 className="card-title">{contact.name}</h2>
              <p className="card-subtitle"><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
              <p className="card-text">“{contact.company.catchPhrase}”</p>
            </div>
          </article>
        ))}
      </div>
    )}
  </section>
);

export default Contacts;
