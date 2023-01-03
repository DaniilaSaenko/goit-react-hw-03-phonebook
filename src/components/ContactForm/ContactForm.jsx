import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Label, Form } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };
  
  handleInputChange = evt => {
    const { name, value } = evt.target;

    this.setState({
      [name]: [value],
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);

    this.setState({
      name: '',
      number: '',
    });

    const { contacts } = this.props;
    const {
      elements: { number, name },
    } = evt.target;

    contacts.map(contact => {
      if (contact.name === name.value) {
        this.setState({
          number: number.value,
        });
      }

      return this.state;
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>

          <Label>
            Number
            <Input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>

          <Button type="submit">Add contact</Button>
        </Form>
      </>
    );
  }
}