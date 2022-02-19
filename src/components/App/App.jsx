import React, { Component } from 'react';
import AppName from 'components/AppName';
import ContactForm from 'components/ContactForm';
import SectionName from 'components/SectionName';
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

  render() {
    const { contacts, filter } = this.state;

    return (
      <AppContainer>
        <AppName title='Phonebook' />
        <ContactForm onSubmit={this.addContactToList} />
        <SectionName title='Contacts' />
      </AppContainer> 
    );
  };
};

export default App;