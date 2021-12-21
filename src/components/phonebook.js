// import style from "./Phonebook.module.css";
import React, { useState, useEffect } from "react";
import Form from "./form-section/form";
import { nanoid } from 'nanoid';
import ContactList from './ContactList/Contactlist';
import FilterList from './FilterList/FilterList';
import useHookLocalStorage from '../hooks-folder/useHookLocalStorage'




const PhoneBook = () => {
  const [contacts, setContacts] = useHookLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    )
  }


  const addContact = contact => {
    if (contacts.some(item => item.name.toLowerCase() === contact.name.toLowerCase(),)) {
      alert('go to dupa')
      return;
    }

    setContacts(prevState => [...prevState, { ...contact, id: nanoid() }])
  }


  const deleteContact = contactId => {
    setContacts(
      contacts => contacts.filter(
        contact => contact.id !== contactId))
  }

  const onFilterHandleChange = event => {
    return setFilter(event.currentTarget.value);
  }

  
  const visibleContacts = getFilteredContacts();
  return (
    <div>
      <h2>Phonebook</h2>
      <Form addContact={addContact} />
      <h2>Contacts</h2>
      <FilterList filter={filter} onFilterHandleChange={onFilterHandleChange} />
      <ContactList contact={visibleContacts} onDelete={deleteContact} />
    </div>

  );
}

export default PhoneBook;
