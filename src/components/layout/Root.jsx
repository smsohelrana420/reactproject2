import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
