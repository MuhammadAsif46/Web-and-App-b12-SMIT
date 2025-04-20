import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import Login from "../components/Login/Login";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsUser(true);
    }
  }, []);

  return (
    // <BrowserRouter basename="/abc">
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={isUser ? <Navigate to={"/profile"} /> : <Login />}
      />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/profile" element={<Profile />} /> */}
      <Route
        path="/profile"
        element={isUser ? <Profile /> : <Navigate to={"/login"} />}
      />
      {/* <Route path="/profile/:username" element={<Profile />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    // </BrowserRouter>
  );
};

export default AppRouter;
