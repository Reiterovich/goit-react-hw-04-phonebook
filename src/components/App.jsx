import { Component } from 'react';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const stringafiendContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(stringafiendContacts) ?? [];

    this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      const stringafiendContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', stringafiendContacts);
    }
  }

  conactList = contactData => {
    const { contacts } = this.state;
    if (
      contacts.some(
        elm =>
          elm.name.toLowerCase() === contactData.name.toLowerCase() ||
          elm.number === contactData.number
      )
    ) {
      window.alert(
        `${contactData.name} or ${contactData.number} is already in contacts!`
      );
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contactData],
      };
    });
  };

  filterName = filter => {
    this.setState({ filter });
  };

  delete = id => {
    this.setState({
      contacts: this.state.contacts.filter(product => product.id !== id),
    });
  };

  filterApp = () => {
    return this.state.contacts.filter(fil =>
      fil.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form conactList={this.conactList} />
        <Filter filter={this.state.filter} filterName={this.filterName} />
        <ContactList onDelete={this.delete} data={this.filterApp()} />
      </>
    );
  }
}
