import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../404Error/PageNotFound";
import StoreDetail from "./StoreDetail";
import ReportPage from "./ReportPage";

const StoreDataRouter = () => {
  return (
    <Routes>
      <Route exact path="/reportpage" element={<ReportPage />} />
      <Route exact path="/reportpage/storedetail" element={<StoreDetail />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default StoreDataRouter;
