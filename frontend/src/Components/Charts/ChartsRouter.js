import React from 'react';
import { Routes, Route } from 'react-router';
import Chartjs from './Chartjs';
import GoogleCharts from './GoogleCharts';
import PageNotFound from '../404Error/PageNotFound';

const ChartsRouter = () => {
  return (
    <Routes>
      <Route exact path="/chartjs" element={<Chartjs />} />
      <Route exact path="/googlecharts" element={<GoogleCharts />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default ChartsRouter;