import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { useState } from 'react';

export const App = () => {
  // state = {
  //   contacts: [],
  //   filter: '',
  // };

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // componentDidMount() {
  //   const stringafiendContacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(stringafiendContacts) ?? [];
  //   this.setState({ contacts: parsedContacts });
  // }

  useEffect(() => {
    const stringafiendContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(stringafiendContacts) ?? [];
    setContacts(parsedContacts);
  }, []);

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     const stringafiendContacts = JSON.stringify(this.state.contacts);
  //     localStorage.setItem('contacts', stringafiendContacts);
  //   }
  // }

  useEffect(() => {
    const stringafiendContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringafiendContacts);
  }, [contacts]);

  const conactList = contactData => {
    // const { contacts } = contacts;
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

    setContacts(prevState => [...prevState, contactData]);

    // this.setState(prevState => {
    //   return {
    //     contacts: [...prevState.contacts, contactData],
    //   };
    // });
  };

  const filterName = filter => {
    // this.setState({ filter });
    setFilter(filter);
  };

  const deleteItem = id => {
    // this.setState({
    //   contacts: this.state.contacts.filter(product => product.id !== id),
    // });
    setContacts(contacts.filter(product => product.id !== id));
  };

  const filterApp = () => {
    return contacts.filter(fil =>
      fil.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Form conactList={conactList} />
      <Filter filter={filter} filterName={filterName} />
      <ContactList onDelete={deleteItem} data={filterApp()} />
    </>
  );
};
