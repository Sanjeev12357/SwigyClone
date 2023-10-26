import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom"; 
import './index.css';
import { Provider } from "react-redux";
// Import Outlet for rendering nested routes
import store from "./utils/store";
const AppLayout = () => {
  return (
    <Provider store={store}>
    <React.Fragment>
      <Header />
      <Outlet /> {/* Render the nested routes */}
      <Footer />
    </React.Fragment>
    </Provider>
  );
};

export default AppLayout;
