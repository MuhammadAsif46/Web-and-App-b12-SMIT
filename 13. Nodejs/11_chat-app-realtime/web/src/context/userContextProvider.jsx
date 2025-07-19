import { Children, useState } from 'react';
import UserContext from './userContext';

const UserContextProvider = ({children}) => {

  const token = localStorage.getItem("token");
  console.log("token-->", token);
  
    const [isLoggedIn, setIsLoggedIn] = useState(null)
    const [isUser, setIsUser] = useState(token ? true : false)
    console.log("isUser-->", isUser);
    
  return (
    <UserContext.Provider value={{isLoggedIn, setIsLoggedIn, isUser, setIsUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider