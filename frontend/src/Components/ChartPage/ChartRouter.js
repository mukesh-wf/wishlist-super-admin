import React from 'react';
import { Routes, Route } from 'react-router';
import SocialMedia from './SocialMedia';
import SitePerformance from './SitePerformance';
import SalePerformance from './SalePerformance';
import Ecommerce from './Ecommerce';
import FinanceDashboard from './FinanceDashboard';
import PageNotFound from '../404Error/PageNotFound';

const ChartRouter = () => {

  return (
    <Routes>
      <Route exact path="/socialmedia" element={<SocialMedia />} />
      <Route exact path="/ecommerce" element={<Ecommerce />} />
      <Route exact path="/siteperformance" element={<SitePerformance />} />
      <Route exact path="/New" element={<SalePerformance />} />
      <Route exact path="/finance" element={<FinanceDashboard />} />
      <Route exact path="/" element={<SocialMedia />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes >
  )
}

export default ChartRouter;