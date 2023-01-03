import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Box } from './Box';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContacts = data => {
    const { name, number } = data;

    const contact = {
      id: nanoid(),
      name: name[0],
      number: number[0],
    };

    const contactsInclude = this.state.contacts.some(el => el.name === name[0]);

    if (contactsInclude) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    if (filter.length === 0) {
      return contacts;
    } else {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Box px={20} pt={10}>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.addContacts}
          contacts={this.state.contacts}
        />

        {contacts.length !== 0 && (
          <Box mt={20}>
            <h2>Contacts</h2>
            <Filter value={filter} onChange={this.changeFilter} />
            <ContactList
              contacts={visibleContacts}
              onDelete={this.deleteContact}
            />
          </Box>
        )}
      </Box>
    );
  }
}