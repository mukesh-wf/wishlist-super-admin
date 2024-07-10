import React from 'react';
import ContactList from './ContactList';
import './Contacts.css';

const CreateContact = () => {
  let show = true;
  let msg = 'Add New'

  return (
    <>
      <ContactList showData={show} msgText={msg} />
    </>
  )
}

export default CreateContact;