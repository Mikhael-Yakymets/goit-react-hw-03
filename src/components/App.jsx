import initialContacts from '../contacts.json';

import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import { useEffect, useState } from 'react';

const LOCAL_STORAGE_KEY = 'my-contacts';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // #region first load
  useEffect(() => {
    const storedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    } else {
      setContacts(initialContacts);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initialContacts));
    }
  }, []);
  // #region first load

  // #region save to Local Storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  // #region save to Local Storage

  //#region add Contact
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };
  //#endregion add Contact

  //#region delete Contact
  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };
  //#endregion delete Contact

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </>
  );
};

export default App;
