import User from "./user";
import { useContext, useState } from "react";

const UserProvider = ({children})=>{
    const [subject, setSubject] = useState("")
    return (
        <User.Provider value={{subject,setSubject}}>
            {children}
        </User.Provider>
    )
}

export default UserProvider
