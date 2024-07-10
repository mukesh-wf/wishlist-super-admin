import React from 'react';
import { Route, Routes } from 'react-router';
import FormLayout from './FormLayout';
import FormElement from './FormElement';
import FormValidation from './FormValidation';
import PageNotFound from '../404Error/PageNotFound';


const FormRouter = () => {
  return (
    <Routes>
      <Route path="/elements" element={<FormElement />} />
      <Route path="/layouts" element={<FormLayout />} />
      <Route path="/validation" element={<FormValidation />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
export default FormRouter;