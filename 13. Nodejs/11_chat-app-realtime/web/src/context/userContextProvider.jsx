import { Children, useState } from 'react';
import UserContext from './userContext';

const UserContextProvider = ({children}) => {

  const token = localStorage.getItem("token");
  const loginUser = localStorage.getItem("user");
  // console.log("token-->", token);
  
    const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(loginUser))
    const [isUser, setIsUser] = useState(token ? true : false)
    // console.log("isUser-->", isUser);
    
  return (
    <UserContext.Provider value={{isLoggedIn, setIsLoggedIn, isUser, setIsUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider