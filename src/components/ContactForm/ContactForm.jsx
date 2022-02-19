import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FormWrapper } from './ContactForm.styled';

const FORM_INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

    nameInputId = nanoid();
    numberInputId = nanoid();

    onInputChange = evt => { 
        const { name, value } = evt.currentTarget;
        this.setState({ [name]: value });
    };

    onContactFormSubmit = evt => {
        evt.preventDefault();

        this.props.onSubmit(this.state);

        this.formReset();
    };

    formReset = () => {
        this.setState({ ...FORM_INITIAL_STATE });
    };
    
  render() {
    const { name, number } = this.state;

    return (
      <FormWrapper>
            <form onSubmit={this.onContactFormSubmit}>
                <label htmlFor={this.nameInputId}>
                    Name
                    <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    value={name}
                    onChange={this.onInputChange}
                    id={this.nameInputId}
                    required
                    />
                </label>
                <label htmlFor={this.numberInputId}>
                    Number
                    <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    value={number}
                    onChange={this.onInputChange}
                    id={this.numberInputId}
                    required
                    />
                </label>
                <button type="submit">Add contact</button>
          </form>
      </FormWrapper> 
    );
  };
};

export default ContactForm;

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};