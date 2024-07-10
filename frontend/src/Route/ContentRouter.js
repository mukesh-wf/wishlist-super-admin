import React from "react";
import UserRouter from '../Components/User/UserRouter';
import { Route, Routes } from "react-router-dom";
import FormRouter from '../Components/Form/FormRouter';
import Setting from '../Components/Site Setting/Setting'
import ChartRouter from "../Components/ChartPage/ChartRouter";
import MainSettingPage from "../Components/Profilesetting/MainPage";
import EcommerceRouter from '../Components/ECommercePages/EcommerceRouter';
import Todo from '../Components/Todo/Todo';
import ChartsRouter from "../Components/Charts/ChartsRouter";
import ApexChartRouter from "../Components/ApexCharts/ApexChartRouter";
import Testimonial from "../Components/Testimonial/Testimonial";
import FAQs from "../Components/FAQs/FAQs";
import ContactRouter from "../Components/Contacts/ContactRouter";
import PageNotFound from "../Components/404Error/PageNotFound";

import StoreDataRouter from "../Components/StoreData/storeDataRouter";

const ContentRouter = () => {

    return (
        <>
            <Routes>
                {
                    <>
                        <Route exact path="/setting" element={<Setting />} />
                        <Route exact path="/user/*" element={<UserRouter />} />
                        <Route exact path="/dashboard/*" element={<ChartRouter />} />
                        <Route exact path="/profile" element={<MainSettingPage />} />
                        <Route exact path="/form/*" element={<FormRouter />} />
                        <Route exact path="/eCommerce/*" element={<EcommerceRouter />} />
                        <Route exact path="/todo" element={<Todo />} />
                        <Route exact path="/charts/*" element={<ChartsRouter />} />
                        <Route exact path="/apexcharts/*" element={<ApexChartRouter />} />
                        <Route exact path="/testimonial" element={<Testimonial />} />
                        <Route exact path="/faqs" element={<FAQs />} />
                        <Route exact path="/contacts/*" element={<ContactRouter />} />



                        <Route exact path="/storedata/*" element={<StoreDataRouter />} />
                        <Route path="*" element={<PageNotFound />} />

                        {/* <Route path="/storedetail" element={<StoreDetail />} /> */}

                    </>
                }
            </Routes>
        </>

    );
};

export default ContentRouter;
