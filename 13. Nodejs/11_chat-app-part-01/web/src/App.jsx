import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const App = () => {
  const isUser = localStorage.getItem("token") || false;
  const [user, setUser] = useState(JSON.parse(isUser));
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
    setIsLoading(false);
  }, [user]);

  if (isLoading) {
    // Show a loading message or component while auth state is being determined
    return (
      <div
        className="flex justify-center items-center text-4xl"
        style={{ height: "100vh" }}
      >
        Loading...
      </div>
    );
  }
  return (
    <Routes>
      <Route
        path="/login"
        element={user ? <Navigate to="/" /> : <LoginPage />}
      />
      <Route
        path="/signup"
        element={user ? <Navigate to="/" /> : <SignupPage />}
      />
      <Route
        path="/"
        element={user ? <HomePage /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default App;
