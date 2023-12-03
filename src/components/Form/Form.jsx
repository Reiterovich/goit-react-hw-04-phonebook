import { nanoid } from 'nanoid';
import { useState } from 'react';

export const Form = ({ conactList }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const hendleSubmit = evt => {
    evt.preventDefault();

    const contactData = {
      name: name,
      number: number,
      id: nanoid(),
    };

    conactList(contactData);

    setName('');
    setNumber('');
  };

  const handleInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name': {
        setName(value);
        return;
      }
      case 'number': {
        setNumber(value);
        return;
      }
      default:
        return;
    }
  };

  return (
    <>
      <form onSubmit={hendleSubmit}>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          value={name}
          required
        />
        <br />
        <h2>Number</h2>
        <input
          onChange={handleInputChange}
          type="tel"
          name="number"
          value={number}
          required
        />
        <br />
        <button type="submit">Add contact</button>
      </form>
      <br />
      <h2>Contacts</h2>
    </>
  );
};
