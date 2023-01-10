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

  addContact = data => {
    data.preventDefault();
    const { contacts } = this.state;

    const {
      elements: { name, number },
    } = data.currentTarget;

    let addedContact = {
      name: name.value,
      number: number.value,
      id: nanoid(),
    };

    let isAdded = false;

    contacts.map(contact => {
      if (contact.name === name.value) {
        alert(`${name.value} is already in contacts`);
        return (isAdded = true);
      }
      return isAdded;
    });
 
    if (!isAdded) {
      this.setState(prevState => ({
        contacts: [addedContact, ...prevState.contacts],
      }));
      data.currentTarget.reset();
    }
  };


  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
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

    return (
      <Box px={20} pt={10}>
        <h1>Phonebook</h1>
        <ContactForm  addContact={this.addContact} />

        {contacts.length !== 0 && (
          <Box mt={20}>
            <h2>Contacts</h2>
            <Filter value={filter} onChange={this.changeFilter} />
            <ContactList
              contacts={this.getVisibleContacts()}
              onDelete={this.deleteContact}
            />
          </Box>
        )}
      </Box>
    );
  }
}