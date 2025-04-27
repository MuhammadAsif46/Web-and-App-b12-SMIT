import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Layout from "../pages/Layout";
import Team from "../pages/Team";
import Card from "../pages/Card";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}>
          <Route path="" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="team" element={<Team />} />
        </Route> */}
      <Route path="/card" element={<Card />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signup" element={<Signup />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
