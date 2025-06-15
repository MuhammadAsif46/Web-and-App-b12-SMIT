import React, { useContext } from 'react'
import User from '../context/user'

const Profile = () => {
    const  {subject} = useContext(User)
    
    if(!subject) return <div>Please Signup</div>

    return <div>Learn your fav subject: {subject}</div>
 
}

export default Profile

// const {name} = useContext(User)
// return (
//   <div>Profile:- ({name})</div>
// )