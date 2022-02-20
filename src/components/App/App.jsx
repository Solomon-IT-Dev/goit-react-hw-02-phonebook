import React, { Component } from 'react';
import AppName from 'components/AppName';
import ContactForm from 'components/ContactForm';
import SectionName from 'components/SectionName';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { nanoid } from 'nanoid';
import { AppContainer } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  addContactToList = ({name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }))
  };

  changeFilter = evt => {
    this.setState({filter: evt.currentTarget.value})
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();

    return (
      contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const totalContactCount = contacts.length;
    const visibleContacts = this.getVisibleContacts();

    return (
      <AppContainer>
        <AppName title='Phonebook' />
        <ContactForm onSubmit={this.addContactToList} />
        <SectionName title='Contacts' />
        <Filter label='Find contacts by name' value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} contactsAmount={totalContactCount} />
      </AppContainer> 
    );
  };
};

export default App;