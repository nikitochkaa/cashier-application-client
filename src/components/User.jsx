import React from "react"
import {changeCurrentUser} from "./Navbar";

const User = (user) => {
    return (
        <li>
            <button onClick={() => changeCurrentUser(user.user)}>
                {user.user.name + " " + user.user.surname}
            </button>
        </li>
    )
}

export default User