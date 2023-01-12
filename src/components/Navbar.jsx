import React, {useEffect, useState} from "react";
import Users from "./Users";
import {getUsers} from "../controllers/Navbar";

const Navbar = () => {
    let user = "Nikita Nikolchuk"
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(data => {
            setUsers(data)
        })
    }, [])
    return (
        <div>
            <nav className="navbar">
                <li className="users">
                    <a href="/">{user}</a>
                    <ul className="dropdown">
                        <Users users={users}></Users>
                    </ul>
                </li>
                <li className="nav-links">
                    <div className="navmenu">
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Orders</a></li>
                        <li><a href="/">Make order</a></li>
                        <li><a href="/">Employees</a></li>
                    </div>
                </li>
            </nav>
        </div>
    )
}

export default Navbar;