import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const stringafiendContacts = localStorage.getItem('contacts');

    const parsedContacts = JSON.parse(stringafiendContacts) ?? [];
    setContacts(parsedContacts);
  }, []);

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      const stringafiendContacts = JSON.stringify(contacts);
      localStorage.setItem('contacts', stringafiendContacts);
    }
  }, [contacts]);

  const conactList = contactData => {
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
  };

  const filterName = filter => {
    setFilter(filter);
  };

  const deleteItem = id => {
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
