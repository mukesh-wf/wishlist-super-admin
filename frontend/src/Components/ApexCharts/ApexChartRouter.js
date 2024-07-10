import React from 'react';
import { Routes, Route } from 'react-router';
import AreaChart from './AreaChart';
import BarChart from './BarChart';
import ColumnChart from './ColumnChart';
import LineChart from './LineChart';
import PieChart from './PieChart';
import RadarChart from './RadarChart';
import RadialbarChart from './RadialbarChart';
import PageNotFound from '../404Error/PageNotFound';


const ApexChartRouter = () => {
  
  return (
    <Routes>
      <Route exact path="/areacharts" element={<AreaChart />} />
      <Route exact path="/barcharts" element={<BarChart />} />
      <Route exact path="/columncharts" element={<ColumnChart />} />
      <Route exact path="/linecharts" element={<LineChart />} />
      <Route exact path="/piecharts" element={<PieChart />} />
      <Route exact path="/radarcharts" element={<RadarChart />} />
      <Route exact path="/radialbarcharts" element={<RadialbarChart />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default ApexChartRouter;