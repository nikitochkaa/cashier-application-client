import React from "react"
import {changeUser} from "../controllers/Navbar";

const User = (user) => {
    return (
        <li><button onClick={user => changeUser(user)}>{user.user.name + " " + user.user.surname}</button></li>
    )
}

export default User