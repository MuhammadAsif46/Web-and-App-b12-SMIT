import { Children, useState } from 'react';
import UserContext from './userContext';

const UserContextProvider = ({children}) => {

  const token = localStorage.getItem("token");
    const [isLoggedIn, setIsLoggedIn] = useState(null)
    const [isUser, setIsUser] = useState(JSON.parse(token))
    console.log("isUser-->", isUser);
    
  return (
    <UserContext.Provider value={{isLoggedIn, setIsLoggedIn, isUser, setIsUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider