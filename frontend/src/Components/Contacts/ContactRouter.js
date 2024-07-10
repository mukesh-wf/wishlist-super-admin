import React from 'react';
import { Routes, Route } from 'react-router';
import ContactGrid from './ContactGrid';
import ContactList from './ContactList';
import CreateContact from './CreateContact';
import PageNotFound from '../404Error/PageNotFound';

const ContactRouter = () => {
  return (
    <Routes>
      <Route exact path="/contactgrid" element={<ContactGrid />} />
      <Route exact path="/contactlist" element={<ContactList />} />
      <Route exact path="/createcontact" element={<CreateContact />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default ContactRouter;