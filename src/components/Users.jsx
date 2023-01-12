import React from "react"
import User from "./User";

const Users = (users) => {
    return (
        <div>
            {users.users.map(user => {
                return (
                    <User user={user}/>
                )
            })}
        </div>
    )
}

export default Users