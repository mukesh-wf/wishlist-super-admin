import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import Store from "./Components/Store/Index";
import "bootstrap/dist/js/bootstrap.bundle.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/MainStyle.css';
import { ProSidebarProvider } from 'react-pro-sidebar';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ProSidebarProvider>
      <BrowserRouter>
        <Provider store={Store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ProSidebarProvider>
  </React.StrictMode>
);



