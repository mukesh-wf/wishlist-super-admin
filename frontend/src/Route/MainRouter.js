import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Dashboard from '../Components/Dashboard/Dashboard';
import Login from "../Components/Auth/Login";
import PageNotFound from "../Components/404Error/PageNotFound";
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
    return <Navigate to="/" />;
};

const MainRouter = () => {
    const newCheck = useSelector(state => state.utils.isCheck);
    const pathName = useLocation().pathname;

    return (
        <Routes>
            <Route path="/" element={<Login />} />

            {newCheck ? (
                <Route exact path="/*" element={<Dashboard />} />
            ) : (
                <Route path={pathName === '/dashboard' ? "/dashboard" : "/"} element={pathName === '/dashboard' ? <ProtectedRoute /> : <Login />} />
            )}
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
};

export default MainRouter;