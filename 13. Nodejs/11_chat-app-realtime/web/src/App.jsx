import React, { useEffect, useState, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UserContext from "./context/userContext";
import ProfilePage from "./pages/ProfilePage";


const App = () => {
  // const [user, setUser] = useState(JSON.parse(token));
  const { isUser, setIsUser, isLoggedIn } = useContext(UserContext);
  // console.log("user--", isUser);



  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isUser) {
      setIsUser(isUser);
    } else {
      setIsUser(isUser);
    }
    // setIsLoading(false);
  }, [isUser,isLoggedIn]);

  // if (isLoading && isUser === false) {
  //   return (
  //     <div
  //       className="flex justify-center items-center text-4xl"
  //       style={{ height: "100vh" }}
  //     >
  //       Loading...
  //     </div>
  //   );
  // }
  return (
    <Routes>
      <Route
        path="/login"
        element={isUser ? <Navigate to="/" /> : <LoginPage />}  
      />
      <Route
        path="/signup"
        element={isUser ? <Navigate to="/" /> : <SignupPage />}
      />
      <Route
        path="/"
        element={isUser ? <HomePage /> : <Navigate to="/login" />}
      />
      <Route
        path="/profile"
        element={isUser ? <ProfilePage /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default App;
