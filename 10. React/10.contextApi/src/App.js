import React, { useState } from "react";
import AppRouter from "./config/Router";
import { BrowserRouter } from "react-router-dom";
import User from "./context/user";
import UserProvider from "./context/userProvider";

const App = () => {
  // const [name,setName] = useState("Ali raZA")
  return (
    // <User.Provider value={{name,setName}}>

    <UserProvider>
      <AppRouter />
    </UserProvider>

    // </User.Provider>
  );
};

export default App;
