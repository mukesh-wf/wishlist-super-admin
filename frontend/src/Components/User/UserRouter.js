import React from "react";
import { Route, Routes } from "react-router-dom";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import UserList from "./UserList";
import PageNotFound from "../404Error/PageNotFound";

const UserRouter = () => {
  return (
    <Routes>
      <Route exact path="/add" element={<AddUser />} />
      <Route exact path="/edit/:id" element={<EditUser />} />
      <Route exact path="/gridlisting/:id" element={< UserList />} />
      <Route exact path="/tbllisting/:idd" element={<UserList />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default UserRouter;
